export type ThemeMode = "stylish" | "kendo";

export const THEME_STORAGE_KEY = "aukc-theme";

export function normalizeTheme(value: unknown): ThemeMode {
  return value === "kendo" || value === "stylish" ? value : "stylish";
}

export function applyThemeToDocument(theme: ThemeMode) {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.theme = theme;
}

export function setStoredTheme(theme: ThemeMode) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // ignore
  }
}

export function getStoredTheme(): ThemeMode {
  if (typeof window === "undefined") return "stylish";
  try {
    return normalizeTheme(localStorage.getItem(THEME_STORAGE_KEY));
  } catch {
    return "stylish";
  }
}


