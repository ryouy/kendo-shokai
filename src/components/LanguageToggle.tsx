"use client";

import { useEffect, useId, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import {
  applyLangToDocument,
  getStoredLang,
  setStoredLang,
  type Lang,
} from "@/lib/lang";

function opposite(lang: Lang): Lang {
  return lang === "ja" ? "en" : "ja";
}

export function LanguageToggle() {
  const id = useId();
  const pathname = usePathname();
  const router = useRouter();
  const [lang, setLang] = useState<Lang>("ja");

  useEffect(() => {
    const stored = getStoredLang();
    // If URL already indicates /en, prefer that on first paint.
    const byPath: Lang = pathname?.startsWith("/en") ? "en" : "ja";
    const initial = stored ?? byPath;
    setLang(initial);
    applyLangToDocument(initial);
  }, [pathname]);

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
        setLang(next);
        setStoredLang(next);
        applyLangToDocument(next);

        const hash = typeof window !== "undefined" ? window.location.hash : "";
        // This site is essentially one-page; keep it simple and robust for basePath.
        const target = next === "en" ? "/en" : "/";
        router.push(`${target}${hash}`);
      }}
      className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-zinc-900/70 px-3 py-2 text-sm font-medium text-zinc-100 shadow-sm shadow-black/30 backdrop-blur transition hover:-translate-y-0.5 hover:bg-zinc-900/85 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white/35"
    >
      <Globe className="size-4 text-zinc-300 group-hover:text-zinc-100" aria-hidden="true" />
      <span className="hidden sm:inline">{label}</span>
      <span className="sm:hidden">{lang === "ja" ? "EN" : "JA"}</span>
      <span className="sr-only" id={`${id}-hint`}>
        Switch page language
      </span>
    </button>
  );
}


