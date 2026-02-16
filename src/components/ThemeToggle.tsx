"use client";

import { useEffect, useId, useMemo, useState } from "react";
import { MoonStar, Sparkles, Sword } from "lucide-react";
import {
  applyThemeToDocument,
  getStoredTheme,
  setStoredTheme,
  type ThemeMode,
} from "@/lib/theme";

function nextTheme(current: ThemeMode): ThemeMode {
  return current === "stylish" ? "kendo" : "stylish";
}

export function ThemeToggle() {
  const reactId = useId();
  const [theme, setTheme] = useState<ThemeMode>("stylish");

  useEffect(() => {
    const t = getStoredTheme();
    setTheme(t);
    applyThemeToDocument(t);
  }, []);

  const label = useMemo(
    () => (theme === "stylish" ? "Modern モード" : "Bushido モード"),
    [theme],
  );

  return (
    <div className="flex items-center gap-2">
      <span className="sr-only" id={`${reactId}-label`}>
        表示モード切替（Modern / Bushido）
      </span>
      <button
        type="button"
        aria-labelledby={`${reactId}-label`}
        aria-pressed={theme === "kendo"}
        onClick={() => {
          const t = nextTheme(theme);
          setTheme(t);
          setStoredTheme(t);
          applyThemeToDocument(t);
        }}
        className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-sm font-medium text-foreground shadow-sm shadow-shadow/10 transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-shadow/15 focus:outline-none focus:ring-2 focus:ring-accent/40"
      >
        <span className="inline-flex items-center gap-2">
          <span className="grid size-7 place-items-center rounded-full bg-background">
            {theme === "stylish" ? (
              <Sparkles className="size-4 text-accent" aria-hidden="true" />
            ) : (
              <Sword className="size-4 text-accent-2" aria-hidden="true" />
            )}
          </span>
          <span className="hidden sm:inline">{label}</span>
          <span className="sm:hidden">
            {theme === "stylish" ? "Modern" : "Bushido"}
          </span>
        </span>
        <span className="ml-1 inline-flex items-center opacity-70">
          <MoonStar className="size-4" aria-hidden="true" />
        </span>
      </button>
    </div>
  );
}


