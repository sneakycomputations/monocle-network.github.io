(() => {
  const PLACEHOLDER = "https://dummydownloadlink";

  // Replace these values with the actual release URLs when available.
  const DEFAULT_DOWNLOADS = {
    Windows: `${PLACEHOLDER}WindowsInstaller`,
    Linux: `${PLACEHOLDER}LinuxAppImage`,
    macOS: `${PLACEHOLDER}macOSUniversal`,
    macOSIntel: `${PLACEHOLDER}macOSIntel`,
    macOSAppleSilicon: `${PLACEHOLDER}macOSAppleSilicon`
  };

  function detectOS() {
    const platform = navigator.userAgentData?.platform || navigator.platform || "";
    const ua = navigator.userAgent || "";

    if (/Windows/i.test(platform) || /Windows/i.test(ua)) return "Windows";
    if (/Mac/i.test(platform) || /Macintosh|Mac OS X/i.test(ua)) return "macOS";
    if (/Linux|X11/i.test(platform) || /Linux/i.test(ua)) return "Linux";

    return "Windows";
  }

  async function detectMacArchitecture() {
    try {
      const hints = navigator.userAgentData;
      if (hints?.getHighEntropyValues) {
        const values = await hints.getHighEntropyValues(["architecture"]);
        if (/arm/i.test(values.architecture || "")) return "AppleSilicon";
        if (/x86/i.test(values.architecture || "")) return "Intel";
      }
    } catch {
      // Architecture hints are not available in every browser.
    }

    // Browsers generally do not expose macOS CPU architecture in their
    // traditional user-agent string. Avoid guessing if no hint is available.
    return "Unknown";
  }

function setDownloadLink(element, os, url) {
  if (!element) return;

  const icons = {
    Windows: "assets/os/icon-os-windows.svg",
    Linux: "assets/os/icon-os-linux.svg",
    macOS: "assets/os/icon-os-mac.svg"
  };

  const icon = element.querySelector(".download-choice-icon");
  const label = element.querySelector("span");

  if (icon) {
    icon.src = icons[os] || icons.Windows;
  }

  if (label) {
    label.textContent = `Download for ${os}`;
  } else {
    // Fallback if the button hasn't yet been updated with the icon markup.
    element.textContent = `Download for ${os}`;
  }

  element.href = url;
}
  function setLinkWithArrow(element, text) {
    if (!element) return;
    element.replaceChildren(document.createTextNode(text + " "));
    const arrow = document.createElement("span");
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "›";
    element.appendChild(arrow);
  }

  async function initialiseDownloads() {
    const os = detectOS();
    let defaultURL = DEFAULT_DOWNLOADS[os];

    if (os === "macOS") {
      const architecture = await detectMacArchitecture();

      if (architecture === "Intel") {
        defaultURL = DEFAULT_DOWNLOADS.macOSIntel;
      } else if (architecture === "AppleSilicon") {
        defaultURL = DEFAULT_DOWNLOADS.macOSAppleSilicon;
      }
    }

    document.querySelectorAll(".download-choice").forEach(link => {
      setDownloadLink(link, os, defaultURL);
    });
    // Keep individual package links active and provide a consistent,
    // searchable placeholder URL for every format.
    document.querySelectorAll("[data-download-os][data-download-format]").forEach(link => {
      const linkOS = link.dataset.downloadOs;
      const format = link.dataset.downloadFormat;
      link.href = `${PLACEHOLDER}${linkOS}${format}`;
    });

    // Main buttons are single-package links, so they have no dropdown arrow.
  }

  document.addEventListener("DOMContentLoaded", initialiseDownloads);
})();