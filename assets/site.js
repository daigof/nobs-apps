(() => {
  const themeStorageKey = "nobs-theme";
  const resetTimers = new WeakMap();

  const getTheme = () => {
    try {
      const theme = localStorage.getItem(themeStorageKey);
      if (theme === "light" || theme === "dark") {
        return theme;
      }
    } catch (_error) {}

    if (typeof window.matchMedia !== "function") {
      return "light";
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light";
    }

    return "light";
  };

  const applyTheme = (theme) => {
    document.documentElement.dataset.theme = theme;

    document.querySelectorAll("[data-theme-option]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.themeOption === theme));
    });
  };

  const toggleTheme = () => {
    const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";

    try {
      localStorage.setItem(themeStorageKey, theme);
    } catch (_error) {}

    applyTheme(theme);
  };

  const bindThemeSelector = () => {
    document.querySelectorAll(".theme-selector").forEach((selector) => {
      selector.addEventListener("click", toggleTheme);
    });
  };

  const bindLanguageSelector = () => {
    document.querySelectorAll("[data-language-nav]").forEach((select) => {
      select.addEventListener("change", () => {
        const url = select.value;

        if (url) {
          window.location.href = url;
        }
      });
    });
  };

  const copyText = async (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  };

  const bindCopyButtons = () => {
    document.querySelectorAll(".copy-button").forEach((button) => {
      button.addEventListener("click", async () => {
        const field = button.closest(".copy-field");
        const address = field ? field.querySelector(".crypto-address") : null;
        const value = address ? address.textContent.trim() : "";

        if (!value) {
          return;
        }

        const defaultLabel = button.dataset.defaultLabel || button.textContent;
        clearTimeout(resetTimers.get(button));

        try {
          await copyText(value);
          button.textContent = button.dataset.copiedLabel || "Copied";
        } catch (_error) {
          button.textContent = button.dataset.failedLabel || "Failed";
        }

        resetTimers.set(
          button,
          setTimeout(() => {
            button.textContent = defaultLabel;
          }, 1600),
        );
      });
    });
  };

  const init = () => {
    applyTheme(getTheme());
    bindThemeSelector();
    bindLanguageSelector();
    bindCopyButtons();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
