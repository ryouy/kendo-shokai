export type ThemeMode = "kendo" | "chill";

export const THEME_STORAGE_KEY = "aukc-theme";
const THEME_EVENT = "aukc-theme-change";

export function normalizeTheme(value: unknown): ThemeMode {
  return value === "kendo" || value === "chill" ? value : "kendo";
}

export function applyThemeToDocument(theme: ThemeMode) {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.theme = theme;
}

export function getThemeFromDocument(): ThemeMode | null {
  if (typeof document === "undefined") return null;
  return normalizeTheme(document.documentElement.dataset.theme);
}

export function setStoredTheme(theme: ThemeMode) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // ignore
  }
}

export function getStoredTheme(): ThemeMode {
  if (typeof window === "undefined") return "kendo";
  try {
    return normalizeTheme(localStorage.getItem(THEME_STORAGE_KEY));
  } catch {
    return "kendo";
  }
}

export function setTheme(theme: ThemeMode, opts?: { preserveScroll?: boolean }) {
  if (typeof window === "undefined") return;

  const y = opts?.preserveScroll ? window.scrollY : null;
  setStoredTheme(theme);
  applyThemeToDocument(theme);

  try {
    window.dispatchEvent(new CustomEvent(THEME_EVENT, { detail: theme }));
  } catch {
    // ignore
  }

  if (y != null) {
    requestAnimationFrame(() => {
      window.scrollTo({ top: y, left: 0, behavior: "instant" as ScrollBehavior });
    });
  }
}

export function subscribeTheme(onChange: () => void) {
  if (typeof window === "undefined") return () => {};

  const handler = () => onChange();
  const storageHandler = (e: StorageEvent) => {
    if (e.key === THEME_STORAGE_KEY) onChange();
  };

  window.addEventListener(THEME_EVENT, handler as EventListener);
  window.addEventListener("storage", storageHandler);
  return () => {
    window.removeEventListener(THEME_EVENT, handler as EventListener);
    window.removeEventListener("storage", storageHandler);
  };
}

export function getThemeSnapshot(): ThemeMode {
  return getThemeFromDocument() ?? getStoredTheme();
}


