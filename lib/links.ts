// External links used across the site.
export const OFFICIAL_SITE_URL = "https://www.duvdevanus.org/";

// No Instagram URL has been provided yet. Any button pointing at Instagram
// must use this constant rather than a hardcoded guess — until it's a real
// profile URL, components should not render an Instagram button at all.
export const INSTAGRAM_URL = "ADD_INSTAGRAM_URL_HERE";

export const isInstagramConfigured = () =>
  Boolean(INSTAGRAM_URL) && INSTAGRAM_URL !== "ADD_INSTAGRAM_URL_HERE";
