"use client";

import { useId, useMemo, useState, useSyncExternalStore } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { getToneSnapshot, subscribeTone, type Tone } from "@/lib/tone";

type Lang = "ja" | "en";

type Qa = { q: string; a: string };

function copy(lang: Lang) {
  const tone = getToneSnapshot();
  const isPoyo = tone === "poyo";
  if (lang === "en") {
    return {
      title: isPoyo ? "Poyo FAQ" : "FAQ",
      subtitle: isPoyo ? "Tiny worries, tiny answers — gently." : "Frequently asked questions",
      items: [
        {
          q: "Q1. Is it really okay for complete beginners?",
          a: isPoyo
            ? "Yes. We can lend shinai, armor, and uniform (softly)."
            : "Yes. We can lend shinai, armor, and uniform.",
        },
        {
          q: "Q2. Do I need to contact you first?",
          a: isPoyo
            ? "No reservation needed. A tiny heads-up makes us extra happy (and ready to wave)."
            : "Basically no reservation needed. But since we sometimes take days off, a quick heads-up beforehand helps a lot.",
        },
        {
          q: "Q3. I’m not confident in my athletic ability…",
          a: isPoyo ? "No problem. Your pace is perfect." : "No problem. You can join at your own pace.",
        },
        { q: "Q4. How much is the club fee?", a: "None." },
        {
          q: "Q5. I’m busy — is it still okay?",
          a: isPoyo
            ? "Totally. Exams and part-time jobs first. Once a week or even once a month is fine."
            : "Totally. Prioritize exams and part-time jobs. Once a week or even once a month is fine.",
        },
      ] satisfies Qa[],
    };
  }

  return {
    title: isPoyo ? "ぽよQ&A" : "よくある質問",
    subtitle: isPoyo
      ? "ちいさな不安を、ちいさく解決ぽよ。"
      : "初心者の方も安心して来られるように、よく聞かれることをまとめました。",
    items: [
      {
        q: isPoyo ? "Q1. ほんとに初心者でも大丈夫ぽよ？" : "Q1. 本当に初心者でも大丈夫？",
        a: isPoyo
          ? "大丈夫ぽよ。竹刀・防具・胴着は、ぽよっと用意してあるぽよ。"
          : "大丈夫です。竹刀・防具・胴着は部で用意しています。",
      },
      {
        q: isPoyo ? "Q2. 連絡しないとダメぽよ？" : "Q2. 連絡しないとダメですか？",
        a: isPoyo
          ? "基本は予約なしでOKぽよ。でも、たまにお休みもあるから、ひとことあると…にこにこぽよ。"
          : "基本は予約なしでOKです。ただ、たまにお休みの日もあるので、事前に連絡をもらえると嬉しいです。",
      },
      {
        q: isPoyo ? "Q3. 体力がぽよぽよで不安ぽよ…" : "Q3. 運動神経に自信がありません…",
        a: isPoyo ? "問題ないぽよ。マイペースに、ふわっと参加できるぽよ。" : "問題ありません。マイペースに参加できます。",
      },
      { q: isPoyo ? "Q4. 部費ってあるぽよ？" : "Q4. 部費はいくらですか？", a: isPoyo ? "ないぽよ。" : "ありません。" },
      {
        q: isPoyo ? "Q5. 忙しくても大丈夫ぽよ？" : "Q5. 忙しくても大丈夫？",
        a: isPoyo
          ? "大丈夫ぽよ。テスト前やバイト優先OKぽよ。週1でも月1でも、ふわっとOKぽよ。"
          : "テスト前やバイト優先OKです。週1でも月1でも大丈夫です。",
      },
    ] satisfies Qa[],
  };
}

function wrapClass() {
  return "aukc-card";
}

function buttonClass() {
  return "flex w-full items-center justify-between gap-3 px-5 py-4 text-left hover:bg-background focus:outline-none focus:ring-2 focus:ring-accent/35";
}

export function FaqAccordion({
  lang,
  compact = false,
  hideHeader = false,
  className = "",
}: {
  lang: Lang;
  compact?: boolean;
  hideHeader?: boolean;
  className?: string;
}) {
  // Subscribe so poyo toggle live-updates the copy.
  useSyncExternalStore<Tone>(subscribeTone, getToneSnapshot, () => "normal");
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
                "font-extrabold text-foreground",
              ].join(" ")}
            >
              {c.title}
            </h2>
            <p
              id={hint}
              className={[
                "mt-2 max-w-prose text-sm leading-7",
                "text-muted",
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
              <div className={wrapClass()}>
                <button
                  id={btnId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  aria-describedby={hideHeader ? undefined : hint}
                  onClick={() => setOpen((v) => (v === i ? null : i))}
                  className={buttonClass()}
                >
                  <span className="font-semibold">
                    {it.q}
                  </span>
                  <ChevronDown
                    className={[
                      "size-5 shrink-0 transition-transform",
                      isOpen ? "rotate-180" : "rotate-0",
                      "text-muted",
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
                        "border-border text-foreground",
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


