"use client";

import { useId, useMemo, useSyncExternalStore } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import {
  getLangSnapshot,
  setLang,
  subscribeLang,
  type Lang,
} from "@/lib/lang";

function opposite(lang: Lang): Lang {
  return lang === "ja" ? "en" : "ja";
}

export function LanguageToggle() {
  const id = useId();
  const pathname = usePathname();
  const router = useRouter();
  const lang = useSyncExternalStore<Lang>(subscribeLang, getLangSnapshot, () => "ja");

  const label = useMemo(
    () => (lang === "ja" ? "English" : "日本語"),
    [lang],
  );

  return (
    <button
      type="button"
      aria-label="Language switch (日本語 / English)"
      aria-describedby={`${id}-hint`}
      onClick={() => {
        const next = opposite(lang);
        const y = typeof window !== "undefined" ? window.scrollY : 0;
        setLang(next);

        // Navigate without hash jumps; keep scroll position stable.
        const target = next === "en" ? "/en" : "/";
        const already = next === "en" ? pathname?.startsWith("/en") : !pathname?.startsWith("/en");
        if (!already) router.push(target, { scroll: false });
        requestAnimationFrame(() => {
          window.scrollTo({ top: y, left: 0, behavior: "instant" as ScrollBehavior });
        });
      }}
      className="group inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-2 text-sm font-medium text-foreground shadow-sm shadow-shadow/10 transition hover:-translate-y-0.5 hover:bg-background hover:shadow-md hover:shadow-shadow/15 focus:outline-none focus:ring-2 focus:ring-accent/40 sm:px-3"
    >
      <Globe
        className="size-4 text-muted group-hover:text-foreground"
        aria-hidden="true"
      />
      <span className="hidden sm:inline">{label}</span>
      <span className="sm:hidden">{lang === "ja" ? "EN" : "JA"}</span>
      <span className="sr-only" id={`${id}-hint`}>
        Switch page language
      </span>
    </button>
  );
}


