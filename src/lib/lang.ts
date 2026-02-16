export type Lang = "ja" | "en";

export const LANG_STORAGE_KEY = "aukc-lang";

export function normalizeLang(value: unknown): Lang {
  return value === "en" || value === "ja" ? value : "ja";
}

export function applyLangToDocument(lang: Lang) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;
}

export function setStoredLang(lang: Lang) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    // ignore
  }
}

export function getStoredLang(): Lang {
  if (typeof window === "undefined") return "ja";
  try {
    return normalizeLang(localStorage.getItem(LANG_STORAGE_KEY));
  } catch {
    return "ja";
  }
}


