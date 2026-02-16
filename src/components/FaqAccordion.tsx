"use client";

import { useId, useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";

type Variant = "kendo" | "chill";
type Lang = "ja" | "en";

type Qa = { q: string; a: string };

function copy(lang: Lang) {
  if (lang === "en") {
    return {
      title: "FAQ",
      subtitle: "Frequently asked questions",
      items: [
        {
          q: "Q1. Is it really okay for complete beginners?",
          a: "Yes. We can lend shinai, armor, and uniform.",
        },
        {
          q: "Q2. Do I need to contact you first?",
          a: "Basically no reservation needed. But since we sometimes take days off, a quick heads-up beforehand helps a lot.",
        },
        {
          q: "Q3. I’m not confident in my athletic ability…",
          a: "No problem. You can join at your own pace.",
        },
        { q: "Q4. How much is the club fee?", a: "None." },
        {
          q: "Q5. I’m busy — is it still okay?",
          a: "Totally. Prioritize exams and part-time jobs. Once a week or even once a month is fine.",
        },
      ] satisfies Qa[],
    };
  }

  return {
    title: "よくある質問",
    subtitle: "初心者の方も安心して来られるように、よく聞かれることをまとめました。",
    items: [
      {
        q: "Q1. 本当に初心者でも大丈夫？",
        a: "大丈夫です。竹刀・防具・胴着は部で用意しています。",
      },
      {
        q: "Q2. 連絡しないとダメですか？",
        a: "基本は予約なしでOKです。ただ、たまにお休みの日もあるので、事前に連絡をもらえると嬉しいです。",
      },
      {
        q: "Q3. 運動神経に自信がありません…",
        a: "問題ありません。マイペースに参加できます。",
      },
      { q: "Q4. 部費はいくらですか？", a: "ありません。" },
      {
        q: "Q5. 忙しくても大丈夫？",
        a: "テスト前やバイト優先OKです。週1でも月1でも大丈夫です。",
      },
    ] satisfies Qa[],
  };
}

function wrapClass(variant: Variant) {
  if (variant === "kendo") {
    return "rounded-2xl border border-white/15 bg-black/25 text-white shadow-sm shadow-black/30 backdrop-blur";
  }
  return "aukc-card";
}

function buttonClass(variant: Variant) {
  if (variant === "kendo") {
    return "flex w-full items-center justify-between gap-3 px-5 py-4 text-left hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/30";
  }
  return "flex w-full items-center justify-between gap-3 px-5 py-4 text-left hover:bg-background focus:outline-none focus:ring-2 focus:ring-accent/35";
}

export function FaqAccordion({
  variant,
  lang,
  compact = false,
  hideHeader = false,
  className = "",
}: {
  variant: Variant;
  lang: Lang;
  compact?: boolean;
  hideHeader?: boolean;
  className?: string;
}) {
  const rid = useId();
  const c = copy(lang);
  const [open, setOpen] = useState<number | null>(0);

  const hint = useMemo(() => `${rid}-hint`, [rid]);

  return (
    <section className={[compact ? "py-0" : "py-14", className].join(" ")}>
      {hideHeader ? null : (
        <Reveal>
          <div>
            <h2
              className={[
                "font-display text-2xl tracking-tight sm:text-3xl",
                variant === "kendo" ? "font-semibold text-white" : "font-extrabold text-foreground",
              ].join(" ")}
            >
              {c.title}
            </h2>
            <p
              id={hint}
              className={[
                "mt-2 max-w-prose text-sm leading-7",
                variant === "kendo" ? "text-white/75" : "text-muted",
              ].join(" ")}
            >
              {c.subtitle}
            </p>
          </div>
        </Reveal>
      )}

      <div
        className={[
          "grid gap-3",
          compact ? (hideHeader ? "mt-0" : "mt-4") : "mt-6",
        ].join(" ")}
      >
        {c.items.map((it, i) => {
          const isOpen = open === i;
          const panelId = `${rid}-panel-${i}`;
          const btnId = `${rid}-btn-${i}`;
          return (
            <Reveal key={it.q} delay={0.04 * i}>
              <div className={wrapClass(variant)}>
                <button
                  id={btnId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  aria-describedby={hideHeader ? undefined : hint}
                  onClick={() => setOpen((v) => (v === i ? null : i))}
                  className={buttonClass(variant)}
                >
                  <span className={variant === "kendo" ? "font-semibold text-white/95" : "font-semibold"}>
                    {it.q}
                  </span>
                  <ChevronDown
                    className={[
                      "size-5 shrink-0 transition-transform",
                      isOpen ? "rotate-180" : "rotate-0",
                      variant === "kendo" ? "text-white/70" : "text-muted",
                    ].join(" ")}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={[
                    "grid overflow-hidden transition-[grid-template-rows] duration-200 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  ].join(" ")}
                >
                  <div className="min-h-0">
                    <div
                      className={[
                        "border-t px-5 py-4 text-sm leading-7",
                        variant === "kendo"
                          ? "border-white/10 text-white/85"
                          : "border-border text-foreground",
                      ].join(" ")}
                    >
                      {it.a}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}


