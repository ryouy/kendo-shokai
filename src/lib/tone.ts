export type Tone = "normal" | "poyo";

export const TONE_STORAGE_KEY = "aukc-tone";
const TONE_EVENT = "aukc-tone-change";

export function normalizeTone(value: unknown): Tone {
  return value === "poyo" || value === "normal" ? value : "normal";
}

export function applyToneToDocument(tone: Tone) {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.tone = tone;
}

export function getToneFromDocument(): Tone | null {
  if (typeof document === "undefined") return null;
  return normalizeTone(document.documentElement.dataset.tone);
}

export function setStoredTone(tone: Tone) {
  try {
    localStorage.setItem(TONE_STORAGE_KEY, tone);
  } catch {
    // ignore
  }
}

export function getStoredTone(): Tone {
  if (typeof window === "undefined") return "normal";
  try {
    return normalizeTone(localStorage.getItem(TONE_STORAGE_KEY));
  } catch {
    return "normal";
  }
}

export function setTone(tone: Tone) {
  if (typeof window === "undefined") return;
  setStoredTone(tone);
  applyToneToDocument(tone);
  try {
    window.dispatchEvent(new CustomEvent(TONE_EVENT, { detail: tone }));
  } catch {
    // ignore
  }
}

export function subscribeTone(onChange: () => void) {
  if (typeof window === "undefined") return () => {};

  const handler = () => onChange();
  const storageHandler = (e: StorageEvent) => {
    if (e.key === TONE_STORAGE_KEY) onChange();
  };

  window.addEventListener(TONE_EVENT, handler as EventListener);
  window.addEventListener("storage", storageHandler);
  return () => {
    window.removeEventListener(TONE_EVENT, handler as EventListener);
    window.removeEventListener("storage", storageHandler);
  };
}

export function getToneSnapshot(): Tone {
  return getToneFromDocument() ?? getStoredTone();
}


