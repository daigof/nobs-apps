(() => {
  const themeStorageKey = "nobs-theme";
  const resetTimers = new WeakMap();

  const getTheme = () => {
    try {
      const theme = localStorage.getItem(themeStorageKey);
      return theme === "light" || theme === "dark" ? theme : "system";
    } catch (_error) {
      return "system";
    }
  };

  const applyTheme = (theme) => {
    if (theme === "light" || theme === "dark") {
      document.documentElement.dataset.theme = theme;
    } else {
      document.documentElement.removeAttribute("data-theme");
    }

    document.querySelectorAll("[data-theme-option]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.themeOption === theme));
    });
  };

  const bindThemeSelector = () => {
    document.querySelectorAll("[data-theme-option]").forEach((button) => {
      button.addEventListener("click", () => {
        const theme = button.dataset.themeOption;

        try {
          if (theme === "light" || theme === "dark") {
            localStorage.setItem(themeStorageKey, theme);
          } else {
            localStorage.removeItem(themeStorageKey);
          }
        } catch (_error) {}

        applyTheme(theme);
      });
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
