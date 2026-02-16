"use client";

import { useEffect, useId, useMemo, useState } from "react";
import { Coffee, MoonStar, Sword } from "lucide-react";
import {
  applyThemeToDocument,
  getStoredTheme,
  setStoredTheme,
  type ThemeMode,
} from "@/lib/theme";

function nextTheme(current: ThemeMode): ThemeMode {
  return current === "kendo" ? "chill" : "kendo";
}

export function ThemeToggle() {
  const reactId = useId();
  const [theme, setTheme] = useState<ThemeMode>("kendo");

  useEffect(() => {
    const t = getStoredTheme();
    setTheme(t);
    applyThemeToDocument(t);
  }, []);

  const label = useMemo(
    () =>
      theme === "kendo" ? "武士道モード" : "ゆるゆるモード",
    [theme],
  );

  return (
    <div className="flex items-center gap-2">
      <span className="sr-only" id={`${reactId}-label`}>
        表示モード切替（武士道 / ゆるゆる）
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
            {theme === "kendo" ? (
              <Sword className="size-4 text-accent-2" aria-hidden="true" />
            ) : (
              <Coffee className="size-4 text-accent" aria-hidden="true" />
            )}
          </span>
          <span className="hidden sm:inline">{label}</span>
          <span className="sm:hidden">
            {theme === "kendo" ? "武士道" : "ゆる"}
          </span>
        </span>
        <span className="ml-1 inline-flex items-center opacity-70">
          <MoonStar className="size-4" aria-hidden="true" />
        </span>
      </button>
    </div>
  );
}


