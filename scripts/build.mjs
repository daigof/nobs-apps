import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import * as cheerio from "cheerio";
import { minify as minifyHtml } from "html-minifier-terser";
import { transform as minifyCss } from "lightningcss";
import { minify as minifyJs } from "terser";
import { supportedLanguages, translations } from "./translations.mjs";

const rootDirectory = fileURLToPath(new URL("../", import.meta.url));
const buildDirectory = join(rootDirectory, "build");
const siteOrigin = "https://nobsapps.co";
const lastModified = "2026-06-12";

const pages = [
  {
    key: "home",
    sourcePath: "index.html",
    route: "",
    schemaType: "WebSite",
  },
  {
    key: "fasting",
    sourcePath: "fasting/index.html",
    route: "fasting/",
    applicationCategory: "HealthApplication",
  },
  {
    key: "flappy",
    sourcePath: "flappy/index.html",
    route: "flappy/",
    applicationCategory: "GameApplication",
  },
  {
    key: "timers",
    sourcePath: "timers/index.html",
    route: "timers/",
    applicationCategory: "UtilitiesApplication",
  },
];

const locales = supportedLanguages.map(([code, label]) => ({
  code,
  label,
  slug: code === "en" ? "" : code.toLowerCase(),
  hreflang: code,
}));

const ogLocaleByCode = {
  de: "de_DE",
  en: "en_US",
  es: "es_ES",
  fr: "fr_FR",
  hi: "hi_IN",
  ja: "ja_JP",
  pt: "pt_PT",
  "zh-Hans": "zh_CN",
};

const copyPaths = [
  "favicon.ico",
  "robots.txt",
  "Diego-Fortes-CV.html",
  "Diego-Fortes-CV.pdf",
  "assets/images",
  "assets/social-preview.png",
];

const icons = {
  system: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect width="20" height="14" x="2" y="3" rx="2"></rect>
      <line x1="8" x2="16" y1="21" y2="21"></line>
      <line x1="12" x2="12" y1="17" y2="21"></line>
    </svg>
  `,
  light: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2"></path>
      <path d="M12 20v2"></path>
      <path d="m4.93 4.93 1.41 1.41"></path>
      <path d="m17.66 17.66 1.41 1.41"></path>
      <path d="M2 12h2"></path>
      <path d="M20 12h2"></path>
      <path d="m6.34 17.66-1.41 1.41"></path>
      <path d="m19.07 4.93-1.41 1.41"></path>
    </svg>
  `,
  dark: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path>
    </svg>
  `,
};

const getTranslation = (localeCode, key) => {
  const parts = key.split(".");
  const localized = parts.reduce((current, part) => current?.[part], translations[localeCode]);
  const english = parts.reduce((current, part) => current?.[part], translations.en);
  return localized ?? english ?? "";
};

const stripHtml = (value) =>
  String(value)
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();

const escapeAttribute = (value) =>
  String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

const getRoutePath = (locale, page) => `/${locale.slug ? `${locale.slug}/` : ""}${page.route}`;

const getOutputPath = (locale, page) => `${getRoutePath(locale, page).replace(/^\//, "")}index.html`;

const getAbsoluteUrl = (locale, page) => `${siteOrigin}${getRoutePath(locale, page)}`;

const getAssetPrefix = (outputPath) => {
  const directory = dirname(outputPath);
  return directory === "." ? "./" : "../".repeat(directory.split("/").length);
};

const writeBuildFile = async (relativePath, content) => {
  const destination = join(buildDirectory, relativePath);
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, content);
};

const getDescription = (localeCode, page) => {
  if (page.key === "home") {
    return stripHtml(
      `${getTranslation(localeCode, "common.tagline")} ${getTranslation(localeCode, "home.promiseBody2")}`,
    );
  }

  if (page.key === "fasting") {
    return stripHtml(
      `${getTranslation(localeCode, "fasting.phasesIntro")} ${getTranslation(localeCode, "fasting.localBehaviorIntro")}`,
    );
  }

  if (page.key === "flappy") {
    return stripHtml(
      `${getTranslation(localeCode, "flappy.gameplayIntro")} ${getTranslation(localeCode, "flappy.offlineBody")}`,
    );
  }

  return stripHtml(
    `${getTranslation(localeCode, "timers.toolsIntro")} ${getTranslation(localeCode, "timers.localBehaviorIntro")}`,
  );
};

const buildAlternateLinks = (page) => {
  const links = locales
    .map((locale) => `<link rel="alternate" hreflang="${locale.hreflang}" href="${getAbsoluteUrl(locale, page)}">`)
    .join("");

  return `${links}<link rel="alternate" hreflang="x-default" href="${getAbsoluteUrl(locales[0], page)}">`;
};

const getStructuredData = (locale, page, title, description) => {
  if (page.key === "home") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${siteOrigin}/#organization`,
          name: "NoBS Apps",
          url: `${siteOrigin}/`,
          description,
          image: `${siteOrigin}/assets/social-preview.png`,
          sameAs: ["https://github.com/daigof/nobs-apps"],
        },
        {
          "@type": "WebSite",
          "@id": `${siteOrigin}/#website`,
          name: "NoBS Apps",
          url: `${siteOrigin}/`,
          publisher: {
            "@id": `${siteOrigin}/#organization`,
          },
          inLanguage: locale.code,
        },
      ],
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: title.split("|")[0].trim(),
    url: getAbsoluteUrl(locale, page),
    description,
    applicationCategory: page.applicationCategory,
    operatingSystem: "Android, iOS",
    inLanguage: locale.code,
    publisher: {
      "@type": "Organization",
      name: "NoBS Apps",
      url: `${siteOrigin}/`,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
};

const buildHeadMetadata = (locale, page, title, description) => {
  const url = getAbsoluteUrl(locale, page);
  const image = `${siteOrigin}/assets/social-preview.png`;
  const imageAlt = "NoBS Apps preview: No accounts. No ads. No tracking. No Bullshit.";
  const structuredData = JSON.stringify(getStructuredData(locale, page, title, description), null, 2);
  const ogLocaleAlternates = locales
    .filter((alternateLocale) => alternateLocale.code !== locale.code)
    .map(
      (alternateLocale) =>
        `<meta property="og:locale:alternate" content="${ogLocaleByCode[alternateLocale.code] ?? alternateLocale.code}">`,
    )
    .join("");

  return `
    <meta name="description" content="${escapeAttribute(description)}">
    <meta name="author" content="NoBS Apps">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${url}">
    ${buildAlternateLinks(page)}
    <meta property="og:type" content="website">
    <meta property="og:title" content="${escapeAttribute(title)}">
    <meta property="og:description" content="${escapeAttribute(description)}">
    <meta property="og:url" content="${url}">
    <meta property="og:site_name" content="NoBS Apps">
    <meta property="og:locale" content="${ogLocaleByCode[locale.code] ?? locale.code}">
    ${ogLocaleAlternates}
    <meta property="og:image" content="${image}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="${escapeAttribute(imageAlt)}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeAttribute(title)}">
    <meta name="twitter:description" content="${escapeAttribute(description)}">
    <meta name="twitter:image" content="${image}">
    <meta name="twitter:image:alt" content="${escapeAttribute(imageAlt)}">
    <script type="application/ld+json">${structuredData}</script>
  `;
};

const buildControls = (locale, page) => {
  const languageLabel = getTranslation(locale.code, "common.languageLabel");
  const themeSelectorLabel = getTranslation(locale.code, "common.themeSelectorLabel");
  const themeButtons = ["system", "light", "dark"]
    .map((theme) => {
      const aria = getTranslation(locale.code, `common.${theme}ThemeAria`);
      const title = getTranslation(locale.code, `common.${theme}ThemeTitle`);
      return `<button type="button" class="theme-button" data-theme-option="${theme}" aria-pressed="false" aria-label="${escapeAttribute(aria)}" title="${escapeAttribute(title)}">${icons[theme]}</button>`;
    })
    .join("");
  const options = locales
    .map((optionLocale) => {
      const selected = optionLocale.code === locale.code ? " selected" : "";
      return `<option value="${getRoutePath(optionLocale, page)}"${selected}>${escapeAttribute(optionLocale.label)}</option>`;
    })
    .join("");

  return `
    <nav class="site-controls" aria-label="${escapeAttribute(themeSelectorLabel)}">
      <select class="language-select" data-language-nav aria-label="${escapeAttribute(languageLabel)}" title="${escapeAttribute(languageLabel)}">
        ${options}
      </select>
      <div class="theme-selector" aria-label="${themeSelectorLabel}">
        ${themeButtons}
      </div>
    </nav>
  `;
};

const removeExistingSeo = ($) => {
  $('meta[name="description"], meta[name="author"], meta[name="robots"], meta[name^="twitter:"]').remove();
  $('meta[property^="og:"]').remove();
  $('link[rel="canonical"], link[rel="alternate"]').remove();
  $('script[type="application/ld+json"]').remove();
};

const localizeTemplate = (html, locale, page) => {
  const $ = cheerio.load(html, { decodeEntities: false });
  const outputPath = getOutputPath(locale, page);
  const assetPrefix = getAssetPrefix(outputPath);
  const title = getTranslation(locale.code, `${page.key}.metaTitle`);
  const description = getDescription(locale.code, page);

  $("html").attr("lang", locale.code);
  $("title").text(title);

  $("[data-i18n]").each((_, element) => {
    $(element).text(getTranslation(locale.code, $(element).attr("data-i18n")));
  });

  $("[data-i18n-html]").each((_, element) => {
    $(element).html(getTranslation(locale.code, $(element).attr("data-i18n-html")));
  });

  $("[data-i18n-attr]").each((_, element) => {
    const pairs = $(element).attr("data-i18n-attr").split(",");

    for (const pair of pairs) {
      const [attribute, key] = pair.split(":").map((value) => value.trim());

      if (attribute && key) {
        $(element).attr(attribute, getTranslation(locale.code, key));
      }
    }
  });

  $("[data-i18n], [data-i18n-html], [data-i18n-attr]").removeAttr("data-i18n data-i18n-html data-i18n-attr");

  $(".copy-button").each((_, button) => {
    $(button)
      .attr("data-default-label", getTranslation(locale.code, "common.copy"))
      .attr("data-copied-label", getTranslation(locale.code, "common.copied"))
      .attr("data-failed-label", getTranslation(locale.code, "common.failed"));
  });

  $('link[rel="icon"]').attr("href", `${assetPrefix}favicon.ico`);
  $('script[src$="assets/site.js"]').attr("src", `${assetPrefix}assets/site.js`);
  $('link[href$="assets/styles.css"]').attr("href", `${assetPrefix}assets/styles.css`);
  $("img").each((_, image) => {
    const src = $(image).attr("src");

    if (src?.includes("assets/")) {
      $(image).attr("src", `${assetPrefix}${src.slice(src.indexOf("assets/"))}`);
    }
  });

  removeExistingSeo($);
  $("title").after(buildHeadMetadata(locale, page, title, description));
  $(".site-controls").remove();
  $("body").prepend(buildControls(locale, page));

  return $.html();
};

const minifyPage = (html) =>
  minifyHtml(html, {
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    minifyCSS: true,
    removeComments: true,
    removeRedundantAttributes: true,
    sortAttributes: true,
    sortClassName: true,
  });

const buildSitemap = () => {
  const urls = locales.flatMap((locale) => pages.map((page) => getAbsoluteUrl(locale, page)));
  const entries = urls
    .map(
      (url) => `  <url>
    <loc>${url}</loc>
    <lastmod>${lastModified}</lastmod>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;
};

const buildRoutesConfig = () =>
  `${JSON.stringify(
    {
      version: 1,
      include: ["/*"],
      exclude: ["/*"],
    },
    null,
    2,
  )}
`;

await rm(buildDirectory, { force: true, recursive: true });
await mkdir(buildDirectory, { recursive: true });

for (const locale of locales) {
  for (const page of pages) {
    const template = await readFile(join(rootDirectory, page.sourcePath), "utf8");
    const html = localizeTemplate(template, locale, page);
    await writeBuildFile(getOutputPath(locale, page), await minifyPage(html));
  }
}

const javascript = await readFile(join(rootDirectory, "assets/site.js"), "utf8");
const minifiedJavascript = await minifyJs(javascript, {
  compress: true,
  mangle: true,
});

if (!minifiedJavascript.code) {
  throw new Error("Failed to minify assets/site.js");
}

await writeBuildFile("assets/site.js", minifiedJavascript.code);

const stylesheet = await readFile(join(rootDirectory, "assets/styles.css"));
const minifiedStylesheet = minifyCss({
  code: stylesheet,
  filename: "styles.css",
  minify: true,
});
await writeBuildFile("assets/styles.css", minifiedStylesheet.code);
await writeBuildFile("sitemap.xml", buildSitemap());
await writeBuildFile("_routes.json", buildRoutesConfig());

for (const copyPath of copyPaths) {
  await cp(join(rootDirectory, copyPath), join(buildDirectory, copyPath), {
    recursive: true,
  });
}

console.log(`Built ${pages.length} pages in ${locales.length} locales and production assets into build/`);
