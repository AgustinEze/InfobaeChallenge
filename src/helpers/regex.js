export const isValidUrl = (url) => {
    if (!url || typeof url !== "string") return false;
    return /^https?:\/\/.+\..+/.test(url); // Regex simple para validar URLs
  };