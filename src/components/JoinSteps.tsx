"use client";

import { Footprints, Handshake, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { getToneSnapshot, subscribeTone, type Tone } from "@/lib/tone";
import { useSyncExternalStore } from "react";

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
  const tone = getToneSnapshot();
  const isPoyo = tone === "poyo";
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
        quote: isPoyo
          ? "If your heart goes “poyo”, join. If you’re tired, just watch. Both are perfect."
          : "Join if you feel like it, watch if you’re tired. Your pace is perfect.",
      },
      {
        icon: "continue",
        title: "STEP 3 | Keep coming",
        bullets: ["No paperwork", "No roster", "No club fee"],
        quote: isPoyo
          ? "Before you know it… you’re one of us. Come whenever you feel like floating in."
          : "Before you know it, you’re one of us. Come whenever you want.",
      },
    ];

    return {
      title: isPoyo ? "Getting started is… gently easy." : "Getting started is easy.",
      steps,
    };
  }

  const steps: Step[] = [
    {
      icon: "visit",
      title: isPoyo ? "STEP 1｜ひょこっと見学" : "STEP 1｜ふらっと見学",
      bullets: isPoyo
        ? ["予約なしでOKぽよ", "体育館2F武道場へ、そのまま来てOKぽよ", "返信がなくても来て大丈夫ぽよ"]
        : ["予約なしでOK", "体育館2F武道場へそのまま来てOK", "返信がなくても来て大丈夫"],
      note: isPoyo
        ? "連絡なしでもOKぽよ。でも、たまにお休みもあるから、ひとことあると嬉しぽよ。"
        : "たまにお休みの日もあるので、事前に連絡をもらえると嬉しいです。",
    },
    {
      icon: "try",
      title: isPoyo ? "STEP 2｜ぽよっと、やってみる" : "STEP 2｜やってみる",
      bullets: isPoyo
        ? ["その日に竹刀を、ぽよっと振れるぽよ", "防具・胴着は貸し出しあるぽよ", "見学だけでもOKぽよ", "無理にやらせることはないぽよ"]
        : ["その日に竹刀を振れます", "防具・胴着は貸し出しあり", "見学だけでもOK", "無理にやらせることはありません"],
      note: isPoyo
        ? "気が向いたら参加ぽよ。疲れたら見学ぽよ。自分のペースのままでOKぽよ。"
        : "気が向いたら参加、疲れたら見学。自分のペースで大丈夫です。",
    },
    {
      icon: "continue",
      title: isPoyo ? "STEP 3｜そのまま、ぽよっと続ける" : "STEP 3｜そのまま続ける",
      bullets: isPoyo ? ["入部手続きなしぽよ", "名簿なしぽよ", "部費なしぽよ"] : ["入部手続きなし", "名簿なし", "部費なし"],
      note: isPoyo ? "気づけばもう仲間ぽよ。来たいときに、ふわっと来てぽよ。" : "気づけばもう仲間です。来たいときに来てください。",
    },
  ];

  return {
    title: isPoyo ? "はじめかたは、ぽよかんたん。" : "はじめかたは、かんたん。",
    steps,
  };
}

function cardClass() {
  return "aukc-card p-6";
}

function headerClass() {
  return "inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-bold text-muted";
}

export function JoinSteps({ lang }: { lang: Lang }) {
  // Subscribe so poyo toggle live-updates the copy.
  const tone = useSyncExternalStore<Tone>(subscribeTone, getToneSnapshot, () => "normal");
  const isPoyo = tone === "poyo";
  const c = copy(lang);

  return (
    <section className="py-14">
      <Reveal>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className={headerClass()}>{lang === "en" ? "Easy steps" : "入部までの流れ"}</p>
            <h2
              className={[
                "mt-3 font-display tracking-tight",
                "text-2xl font-extrabold text-foreground sm:text-3xl",
              ].join(" ")}
            >
              {c.title}
            </h2>
            <p
              className={[
                "mt-2 max-w-prose text-sm leading-7",
                "text-muted",
              ].join(" ")}
            >
              {lang === "en"
                ? isPoyo
                  ? "Low-pressure, but still real practice. Float in whenever you like."
                  : "Low-pressure, but we do practice properly. Start whenever you like."
                : isPoyo
                  ? "ゆるいけど、ちゃんと剣道してるぽよ。気軽に、でも、ふわっとまじめぽよ。"
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
                cardClass(),
                "transition will-change-transform hover:-translate-y-0.5",
              ].join(" ")}
            >
              <div className="flex items-center gap-3">
                <div
                  className={[
                    "grid size-10 place-items-center rounded-2xl",
                    "bg-accent/10 text-accent",
                  ].join(" ")}
                >
                  {iconFor(s.icon)}
                </div>
                <p
                  className={[
                    "font-display text-lg tracking-tight",
                    "font-extrabold",
                  ].join(" ")}
                >
                  {s.title}
                </p>
              </div>

              <ul
                className={[
                  "mt-4 space-y-2 text-sm leading-7",
                  "text-muted",
                ].join(" ")}
              >
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-muted">
                      ・
                    </span>
                    <span className="text-muted">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>

              {s.note ? (
                <p
                  className={[
                    "mt-4 rounded-2xl border p-3 text-xs leading-6",
                    "border-border bg-background text-muted",
                  ].join(" ")}
                >
                  {s.note}
                </p>
              ) : null}

              {s.quote ? (
                <p
                  className={[
                    "mt-4 border-l-2 pl-3 text-sm leading-7",
                    "border-border text-foreground",
                  ].join(" ")}
                >
                  {lang === "en" ? "“" : "「"}
                  {s.quote}
                  {lang === "en" ? "”" : "」"}
                </p>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}


