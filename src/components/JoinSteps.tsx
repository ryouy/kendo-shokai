"use client";

import { Footprints, Handshake, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";

type Variant = "kendo" | "chill";
type Lang = "ja" | "en";

type Step = {
  title: string;
  bullets: string[];
  note?: string;
  quote?: string;
  icon: "visit" | "try" | "continue";
};

function iconFor(kind: Step["icon"]) {
  switch (kind) {
    case "visit":
      return <Footprints className="size-5" aria-hidden="true" />;
    case "try":
      return <Sparkles className="size-5" aria-hidden="true" />;
    case "continue":
      return <Handshake className="size-5" aria-hidden="true" />;
  }
}

function copy(lang: Lang) {
  if (lang === "en") {
    const steps: Step[] = [
      {
        icon: "visit",
        title: "STEP 1 | Drop in for a visit",
        bullets: [
          "No reservation needed",
          "Just come to the gym 2F dojo",
          "Even without a reply, it’s okay to come",
        ],
        note: "Sometimes we take days off, so a quick heads-up beforehand helps a lot.",
      },
      {
        icon: "try",
        title: "STEP 2 | Try it",
        bullets: [
          "You can swing a shinai that day",
          "We can lend armor and uniform",
          "Watching only is totally fine",
          "No pressure — we won’t force you",
        ],
        quote: "Join if you feel like it, watch if you’re tired. Your pace is perfect.",
      },
      {
        icon: "continue",
        title: "STEP 3 | Keep coming",
        bullets: ["No paperwork", "No roster", "No club fee"],
        quote: "Before you know it, you’re one of us. Come whenever you want.",
      },
    ];

    return {
      title: "Getting started is easy.",
      steps,
    };
  }

  const steps: Step[] = [
    {
      icon: "visit",
      title: "STEP 1｜ふらっと見学",
      bullets: ["予約なしでOK", "体育館2F武道場へそのまま来てOK", "返信がなくても来て大丈夫"],
      note: "たまにお休みの日もあるので、事前に連絡をもらえると嬉しいです。",
    },
    {
      icon: "try",
      title: "STEP 2｜やってみる",
      bullets: [
        "その日に竹刀を振れます",
        "防具・胴着は貸し出しあり",
        "見学だけでもOK",
        "無理にやらせることはありません",
      ],
      note: "気が向いたら参加、疲れたら見学。自分のペースで大丈夫です。",
    },
    {
      icon: "continue",
      title: "STEP 3｜そのまま続ける",
      bullets: ["入部手続きなし", "名簿なし", "部費なし"],
      note: "気づけばもう仲間です。来たいときに来てください。",
    },
  ];

  return {
    title: "はじめかたは、かんたん。",
    steps,
  };
}

function cardClass(variant: Variant) {
  if (variant === "kendo") {
    return "rounded-2xl border border-white/15 bg-black/25 p-6 text-white shadow-sm shadow-black/30 backdrop-blur";
  }
  return "aukc-card p-6";
}

function headerClass(variant: Variant) {
  if (variant === "kendo") {
    return "inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-semibold text-white/90";
  }
  return "inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-bold text-muted";
}

export function JoinSteps({ variant, lang }: { variant: Variant; lang: Lang }) {
  const c = copy(lang);
  const deco =
    variant === "kendo"
      ? "bg-[linear-gradient(to_right,rgba(255,255,255,0.06),rgba(255,255,255,0.02),rgba(255,255,255,0.06))]"
      : "bg-[linear-gradient(to_right,rgba(0,0,0,0.06),rgba(0,0,0,0.02),rgba(0,0,0,0.06))]";

  return (
    <section className={["py-14", variant === "kendo" ? "relative overflow-hidden" : ""].join(" ")}>
      {variant === "kendo" ? (
        <div className={["pointer-events-none absolute inset-x-0 top-0 h-px", deco].join(" ")} />
      ) : null}

      <Reveal>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className={headerClass(variant)}>
              {lang === "en" ? "Easy steps" : "入部までの流れ"}
            </p>
            <h2
              className={[
                "mt-3 font-display tracking-tight",
                variant === "kendo"
                  ? "text-2xl font-semibold text-white sm:text-3xl"
                  : "text-2xl font-extrabold text-foreground sm:text-3xl",
              ].join(" ")}
            >
              {c.title}
            </h2>
            <p
              className={[
                "mt-2 max-w-prose text-sm leading-7",
                variant === "kendo" ? "text-white/75" : "text-muted",
              ].join(" ")}
            >
              {lang === "en"
                ? "Low-pressure, but we do practice properly. Start whenever you like."
                : "ゆるいけど、ちゃんと剣道してます。気軽に、でもまじめに。"}
            </p>
          </div>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {c.steps.map((s, idx) => (
          <Reveal key={s.title} delay={0.05 * idx}>
            <div
              className={[
                cardClass(variant),
                "transition will-change-transform hover:-translate-y-0.5",
              ].join(" ")}
            >
              <div className="flex items-center gap-3">
                <div
                  className={[
                    "grid size-10 place-items-center rounded-2xl",
                    variant === "kendo"
                      ? "border border-white/15 bg-black/35 text-white/90"
                      : "bg-accent/10 text-accent",
                  ].join(" ")}
                >
                  {iconFor(s.icon)}
                </div>
                <p
                  className={[
                    "font-display text-lg tracking-tight",
                    variant === "kendo" ? "font-semibold" : "font-extrabold",
                  ].join(" ")}
                >
                  {s.title}
                </p>
              </div>

              <ul
                className={[
                  "mt-4 space-y-2 text-sm leading-7",
                  variant === "kendo" ? "text-white/85" : "text-muted",
                ].join(" ")}
              >
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className={variant === "kendo" ? "text-white/60" : "text-muted"}>
                      ・
                    </span>
                    <span className={variant === "kendo" ? "text-white/85" : "text-muted"}>
                      {b}
                    </span>
                  </li>
                ))}
              </ul>

              {s.note ? (
                <p
                  className={[
                    "mt-4 rounded-2xl border p-3 text-xs leading-6",
                    variant === "kendo"
                      ? "border-white/15 bg-black/20 text-white/75"
                      : "border-border bg-background text-muted",
                  ].join(" ")}
                >
                  {s.note}
                </p>
              ) : null}

              {s.quote ? (
                <p
                  className={[
                    "mt-4 border-l-2 pl-3 text-sm leading-7",
                    variant === "kendo"
                      ? "border-white/25 text-white/80"
                      : "border-border text-foreground",
                  ].join(" ")}
                >
                  {variant === "kendo" ? "「" : "“"}
                  {s.quote}
                  {variant === "kendo" ? "」" : "”"}
                </p>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}


