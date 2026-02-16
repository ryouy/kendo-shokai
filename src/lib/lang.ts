export type Lang = "ja" | "en";

export const LANG_STORAGE_KEY = "aukc-lang";
const LANG_EVENT = "aukc-lang-change";

export function normalizeLang(value: unknown): Lang {
  return value === "en" || value === "ja" ? value : "ja";
}

export function applyLangToDocument(lang: Lang) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;
}

export function getLangFromDocument(): Lang | null {
  if (typeof document === "undefined") return null;
  return normalizeLang(document.documentElement.dataset.lang);
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

export function setLang(lang: Lang) {
  if (typeof window === "undefined") return;
  setStoredLang(lang);
  applyLangToDocument(lang);
  try {
    window.dispatchEvent(new CustomEvent(LANG_EVENT, { detail: lang }));
  } catch {
    // ignore
  }
}

export function subscribeLang(onChange: () => void) {
  if (typeof window === "undefined") return () => {};

  const handler = () => onChange();
  const storageHandler = (e: StorageEvent) => {
    if (e.key === LANG_STORAGE_KEY) onChange();
  };

  window.addEventListener(LANG_EVENT, handler as EventListener);
  window.addEventListener("storage", storageHandler);
  return () => {
    window.removeEventListener(LANG_EVENT, handler as EventListener);
    window.removeEventListener("storage", storageHandler);
  };
}

export function getLangSnapshot(): Lang {
  return getLangFromDocument() ?? getStoredLang();
}


