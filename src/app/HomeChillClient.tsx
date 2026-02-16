"use client";

import { useSyncExternalStore } from "react";
import { ArrowRight, Instagram, X } from "lucide-react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ToneToggle } from "@/components/ToneToggle";
import { Reveal } from "@/components/Reveal";
import { JoinSteps } from "@/components/JoinSteps";
import { FaqAccordion } from "@/components/FaqAccordion";
import { YouTubeGallery } from "@/components/YouTubeGallery";
import { ActivityNotice } from "@/components/ActivityNotice";
import {
  ACTIVITY_EN_NORMAL,
  ACTIVITY_EN_POYO,
  ACTIVITY_JA_NORMAL,
  ACTIVITY_JA_POYO,
} from "@/lib/activity";
import { getToneSnapshot, subscribeTone, type Tone } from "@/lib/tone";

type Lang = "ja" | "en";

function copy(lang: Lang, tone: Tone) {
  const isPoyo = tone === "poyo";
  if (lang === "en") {
    return {
      headerTitle: isPoyo ? "Aizu Poyo Dojo (mystery beings)" : "Aizu Univ. Kendo Club",
      headerCta: isPoyo ? "tiny peek… (poyo)" : "Drop-in visit",
      heroTitle: isPoyo ? "A fluffy creature’s gentle bonk time." : "Chill kendo, maybe?",
      heroLead: isPoyo
        ? "We’re the floaty, slightly mysterious beings of the forest… and somehow we started holding shinai. If your heart goes “huh?”, come say hi."
        : "If you just want to move your body a little, that’s totally fine. No uniform needed for a first visit — come say hi.",
      pills: isPoyo
        ? ["floaty pace ok", "beginners welcome", "drop-in friendly"]
        : ["go at your pace", "beginners welcome", "drop-in ok"],
      primaryCta: isPoyo ? "drop in… softly" : "Visit (welcome)",
      xCta: isPoyo ? "poke X (tiny updates)" : "Updates on X",
      igCta: isPoyo ? "poke Instagram (tiny photos)" : "Updates on Instagram",
      activityTitle: isPoyo ? "When / where we float" : "Schedule & location",
      videoTitle: isPoyo ? "Fluffy video nook" : "Cozy video corner",
      videoLead: isPoyo ? "Watching is totally fine. (very poyo)" : "Tap a thumbnail to switch the embed.",
      faqTitle: isPoyo ? "Little questions (poyo)" : "FAQ",
      faqLead: isPoyo ? "Tiny worries, tiny answers — gently." : "Frequently asked questions for first-time visitors.",
      visitTitle: isPoyo ? "Drop-in welcome (very gently)" : "Drop-in visits welcome",
      visitLead: isPoyo
        ? "Not too strict, not too hard. Just a warm place to float in and try."
        : "We keep it friendly and low-pressure. Come take a look first.",
      routeTitle: isPoyo ? "The tiniest route" : "Quick route",
      routeSteps: ["1) DM us on X / Instagram (optional)", "2) Come around 19:00 (Mon/Thu) to Gym 2F", "3) Watch practice — if you like it, you’re in"],
      routeNote: isPoyo
        ? "No message is fine. But if you send a tiny heads-up, we’ll be extra happy and ready to wave."
        : "Dropping in without messaging is fine, but since we sometimes take days off, a quick heads-up helps a lot.",
      snsTitle: isPoyo ? "DM us (softly)" : "SNS (DM)",
      xDm: isPoyo ? "DM on X (hello!)" : "Message on X",
      igDm: isPoyo ? "DM on Instagram (hello!)" : "Message on Instagram",
      copyrightLabel: "Aizu University Kendo Club",
      univLabel: "University of Aizu (Official)",
    };
  }

  return {
    headerTitle: isPoyo ? "会津大学剣道部 〜森のぽよ道場〜" : "会津大学剣道部",
    headerCta: isPoyo ? "ひょこっ…と見学" : "ふらっと見学",
    heroTitle: isPoyo ? "ぽよ…っと剣道、はじめよ。" : "ゆるっと剣道、はじめよ。",
    heroLead: isPoyo
      ? "ここは、ふわふわ浮遊してた不思議生物たちが、なぜか竹刀を持ち始めた森ぽよ。気になったら、ひょこっと来てぽよ。"
      : "「運動不足だからちょっと動きたい」でもOK。道着がなくてもOK。まずは見学で雰囲気だけ感じに来てください。",
    pills: isPoyo
      ? ["ぽよペースOK", "初心者ぽよ歓迎", "途中参加ぽよOK", "きゅんと来たらOK"]
      : ["のんびり運動", "友だち作り", "マイペースOK", "初心者OK", "途中参加OK"],
    primaryCta: isPoyo ? "見学ぽよ（ひょこ受付中）" : "見学する（受付中）",
    xCta: isPoyo ? "Xをちょん…（近況ぽよ）" : "Xでゆるっと近況",
    igCta: isPoyo ? "インスタをちょん…（写真ぽよ）" : "インスタでゆるっとも",
    activityTitle: isPoyo ? "活動日時・場所（ぽよ案内）" : "活動日時・場所",
    videoTitle: isPoyo ? "ぽよ動画のすみっこ" : "のんびり動画コーナー",
    videoLead: isPoyo ? "見るだけでも、ぽよっと空気わかるぽよ。" : "見るだけでも雰囲気がわかります",
    faqTitle: isPoyo ? "ぽよQ&A（やさしめ）" : "よくある質問",
    faqLead: isPoyo ? "ちいさな不安を、ちいさく解決ぽよ。ふわっとどうぞ。" : "初心者の方も安心して来られるように、よく聞かれることをまとめました。",
    visitTitle: isPoyo ? "ふらっと見学、歓迎ぽよ" : "ふらっと見学、歓迎です",
    visitLead: isPoyo
      ? "ガチガチじゃないけど、だらだらでもないぽよ。ふわっと、ひょこっと、どうぞ。"
      : "ガチガチの体育会系じゃなく、楽しく続ける感じでやってます。気軽にどうぞ。",
    routeTitle: isPoyo ? "最短ぽよルート（かるい）" : "最短ルート",
    routeSteps: isPoyo
      ? ["1) ぽよ…？となる", "2) SNSをちょんちょん（任意）", "3) 月・木 19:00ごろにひょこっと体育館2Fへ"]
      : ["1) X / Instagram のDMで連絡（任意）", "2) 月・木 19:00ごろに体育館2Fへ", "3) 見学して、気に入ったらそのままOK"],
    routeNote: isPoyo
      ? "連絡なしでもOKぽよ。けど、たまにお休みの日もあるから、ひとことあると…にこにこぽよ。"
      : "連絡なしでもOKですが、たまにお休みの日もあるので事前にひとことあると嬉しいです。",
    snsTitle: isPoyo ? "SNS（DMはこちら）ぽよ" : "SNS（DMはこちら）",
    xDm: isPoyo ? "Xでひとことぽよ" : "Xで連絡（DM）",
    igDm: isPoyo ? "インスタでひとことぽよ" : "Instagramで連絡（DM）",
    copyrightLabel: "Aizu University Kendo Club",
    univLabel: "会津大学 公式サイト",
  };
}

export function HomeChillClient({ lang }: { lang: Lang }) {
  const tone = useSyncExternalStore<Tone>(subscribeTone, getToneSnapshot, () => "normal");
  const c = copy(lang, tone);
  const activity =
    lang === "en"
      ? tone === "poyo"
        ? ACTIVITY_EN_POYO
        : ACTIVITY_EN_NORMAL
      : tone === "poyo"
        ? ACTIVITY_JA_POYO
        : ACTIVITY_JA_NORMAL;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-card focus:px-3 focus:py-2 focus:text-sm focus:shadow"
      >
        {lang === "en" ? "Skip to content" : "メインコンテンツへスキップ"}
      </a>

      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <a
            href={lang === "en" ? "/en" : "/"}
            className="min-w-0 truncate font-display text-xl font-extrabold sm:text-2xl"
          >
            {c.headerTitle}
          </a>
          <div className="flex shrink-0 items-center gap-2">
            <a href="#chill-visit" className="aukc-btn aukc-btn-soft">
              {c.headerCta}
              <ArrowRight className="ml-1 size-4" aria-hidden="true" />
            </a>
            <LanguageToggle />
            <ToneToggle />
          </div>
        </div>
      </header>

      <main id="main">
        <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:py-14">
          <Reveal>
            <div className="aukc-card overflow-hidden p-6 sm:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl">
                  <h1 className="mt-1 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
                    {c.heroTitle}
                  </h1>
                  <p className="mt-3 text-sm leading-7 text-muted sm:text-base">{c.heroLead}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {c.pills.map((p) => (
                      <span
                        key={p}
                        className="aukc-pill border border-border/70 bg-background/60 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex shrink-0 flex-col gap-3">
                  <a href="#chill-visit" className="aukc-btn aukc-btn-primary">
                    {c.primaryCta}
                    <ArrowRight className="ml-1 size-4" aria-hidden="true" />
                  </a>
                  <a
                    href="https://x.com/kendo_uoa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aukc-btn aukc-btn-ghost"
                  >
                    {c.xCta}
                    <ArrowRight className="ml-1 size-4" aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.instagram.com/uoa_kendo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aukc-btn aukc-btn-ghost"
                  >
                    {c.igCta}
                    <ArrowRight className="ml-1 size-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="mt-6">
                <ActivityNotice
                  title={c.activityTitle}
                  schedule={activity.schedule}
                  place={activity.place}
                  withXLink={false}
                />
              </div>
            </div>
          </Reveal>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4">
          <JoinSteps lang={lang} />
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-10">
          <div>
            <Reveal>
              <h2 className="font-display text-2xl font-extrabold tracking-tight">{c.videoTitle}</h2>
              <p className="mt-2 max-w-prose text-muted">{c.videoLead}</p>
            </Reveal>
            <div className="mt-6">
              <Reveal delay={0.05}>
                <YouTubeGallery lang={lang} />
              </Reveal>
            </div>
          </div>
        </section>

        <section id="chill-visit" className="mx-auto w-full max-w-6xl px-4 py-12">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <div className="aukc-card p-6 sm:p-10">
                <h2 className="font-display text-2xl font-extrabold tracking-tight">{c.faqTitle}</h2>
                <p className="mt-2 max-w-prose text-sm leading-7 text-muted">{c.faqLead}</p>
                <div className="mt-6">
                  <FaqAccordion lang={lang} compact hideHeader className="py-0" />
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="aukc-card p-6 sm:p-10">
                <h2 className="font-display text-2xl font-extrabold tracking-tight">{c.visitTitle}</h2>
                <p className="mt-2 max-w-prose text-muted">{c.visitLead}</p>

                <div className="mt-6 space-y-4">
                  <div className="aukc-card p-6">
                    <p className="font-display text-lg font-extrabold">{c.routeTitle}</p>
                    <ol className="mt-3 space-y-2 text-sm text-muted">
                      {c.routeSteps.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ol>
                    <p className="mt-4 text-sm leading-7 text-muted">{c.routeNote}</p>
                  </div>

                  <div id="chill-contact" className="aukc-card p-6">
                    <p className="font-display text-lg font-extrabold">{c.snsTitle}</p>
                    <div className="mt-3 flex w-full flex-col gap-2 md:flex-row">
                      <a
                        className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 text-sm font-semibold text-foreground shadow-sm shadow-shadow/10 transition will-change-transform hover:-translate-y-0.5 hover:bg-card hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent/35 md:flex-1"
                        href="https://x.com/kendo_uoa"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <X className="size-4" aria-hidden="true" />
                        {c.xDm}
                        <ArrowRight className="ml-1 size-4" aria-hidden="true" />
                      </a>
                      <a
                        className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 text-sm font-semibold text-foreground shadow-sm shadow-shadow/10 transition will-change-transform hover:-translate-y-0.5 hover:bg-card hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent/35 md:flex-1"
                        href="https://www.instagram.com/uoa_kendo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="size-4" aria-hidden="true" />
                        {c.igDm}
                        <ArrowRight className="ml-1 size-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70 bg-background">
        <div className="mx-auto w-full max-w-6xl px-4 py-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted">© {new Date().getFullYear()} {c.copyrightLabel}</p>
            <a
              href="https://www.u-aizu.ac.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted underline underline-offset-4 hover:text-foreground"
            >
              {c.univLabel}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}


