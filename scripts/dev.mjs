import { spawn } from "node:child_process";
import { watch } from "node:fs";
import { createServer } from "node:net";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const rootDirectory = fileURLToPath(new URL("../", import.meta.url));
const buildDirectory = join(rootDirectory, "dist");
const preferredPort = Number.parseInt(process.env.PORT ?? "8080", 10);
const rebuildDelay = 150;

const ignoredDirectories = new Set([".git", "dist", "node_modules", "test-results"]);
const watchedRoots = new Set([
  "assets",
  "fasting",
  "flappy",
  "scripts",
  "timers",
  "Diego-Fortes-CV.html",
  "Diego-Fortes-CV.pdf",
  "favicon.ico",
  "index.html",
  "robots.txt",
  "sitemap.xml",
]);

let buildInProgress = false;
let rebuildQueued = false;
let rebuildTimer;
let serverProcess;

const run = (command, args) =>
  new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: rootDirectory,
      stdio: "inherit",
    });

    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`${command} ${args.join(" ")} exited with code ${code}`));
    });
  });

const build = async () => {
  if (buildInProgress) {
    rebuildQueued = true;
    return;
  }

  buildInProgress = true;

  do {
    rebuildQueued = false;
    console.log("[dev] Building static site...");

    try {
      await run("node", ["scripts/build.mjs"]);
      console.log("[dev] Build complete.");
    } catch (error) {
      console.error(`[dev] Build failed: ${error.message}`);
    }
  } while (rebuildQueued);

  buildInProgress = false;
};

const scheduleBuild = () => {
  clearTimeout(rebuildTimer);
  rebuildTimer = setTimeout(() => {
    void build();
  }, rebuildDelay);
};

const shouldWatchPath = (filename) => {
  if (!filename) {
    return false;
  }

  const parts = relative(rootDirectory, join(rootDirectory, filename)).split("/");

  if (parts.some((part) => ignoredDirectories.has(part))) {
    return false;
  }

  return watchedRoots.has(parts[0]);
};

const isPortAvailable = (port) =>
  new Promise((resolve) => {
    const probe = createServer();

    probe.once("error", () => {
      resolve(false);
    });

    probe.once("listening", () => {
      probe.close(() => {
        resolve(true);
      });
    });

    probe.listen(port, "127.0.0.1");
  });

const findPort = async () => {
  for (let port = preferredPort; port < preferredPort + 20; port += 1) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }

  throw new Error(`No available port found from ${preferredPort} to ${preferredPort + 19}`);
};

const openChrome = (url) => {
  const opener = spawn("open", ["-a", "Google Chrome", url], {
    detached: true,
    stdio: "ignore",
  });

  opener.on("error", (error) => {
    console.error(`[dev] Could not open Google Chrome: ${error.message}`);
  });

  opener.unref();
};

const stopServer = () => {
  if (serverProcess && !serverProcess.killed) {
    serverProcess.kill("SIGTERM");
  }
};

process.on("SIGINT", () => {
  stopServer();
  process.exit(0);
});

process.on("SIGTERM", () => {
  stopServer();
  process.exit(0);
});

await build();

const port = await findPort();
const url = `http://127.0.0.1:${port}/`;

serverProcess = spawn("python3", ["-m", "http.server", String(port), "-d", buildDirectory], {
  cwd: rootDirectory,
  stdio: "inherit",
});

serverProcess.on("exit", (code) => {
  process.exit(code ?? 0);
});

setTimeout(() => {
  openChrome(url);
  console.log(`[dev] Serving built site at ${url}`);
}, 500);

try {
  watch(rootDirectory, { recursive: true }, (_eventType, filename) => {
    if (shouldWatchPath(filename)) {
      console.log(`[dev] Change detected: ${filename}`);
      scheduleBuild();
    }
  });
} catch (error) {
  console.error(`[dev] File watching unavailable: ${error.message}`);
  console.error("[dev] The Python server is still running; rerun pnpm dev after edits.");
}
