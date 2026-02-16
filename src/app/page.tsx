import Image from "next/image";
import Script from "next/script";
import { ArrowRight, CalendarDays, Instagram, MapPin, Trophy, Users } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { MobileNav } from "@/components/MobileNav";
import { Reveal } from "@/components/Reveal";
import { JoinSteps } from "@/components/JoinSteps";
import { FaqAccordion } from "@/components/FaqAccordion";
import { YouTubeGallery } from "@/components/YouTubeGallery";
import { ActivityNotice } from "@/components/ActivityNotice";
import { ACTIVITY_JA } from "@/lib/activity";

export default function Home() {
  const gallery = [
    { src: "/gallery/01.svg", alt: "面をつけた剣士のシルエット" },
    { src: "/gallery/02.svg", alt: "稽古場の床と足さばきのイメージ" },
    { src: "/gallery/03.svg", alt: "打突の瞬間のイラスト" },
    { src: "/gallery/04.svg", alt: "団体戦の整列イメージ" },
    { src: "/gallery/05.svg", alt: "合宿の風景イメージ" },
    { src: "/gallery/06.svg", alt: "防具（竹刀と胴）のアイコン" },
  ] as const;

  const members = [
    { name: "佐藤 海斗", role: "主将", note: "「楽しく、真剣に。みんなで上達しましょう！」" },
    { name: "鈴木 菜々", role: "副将", note: "「初心者歓迎！基礎からゆっくりやります。」" },
    { name: "高橋 悠真", role: "主務", note: "「マイペースOK。気軽に見学に来てください。」" },
    { name: "伊藤 玲奈", role: "会計", note: "「運動不足解消にもぴったりです。」" },
  ] as const;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-card focus:px-3 focus:py-2 focus:text-sm focus:shadow"
      >
        メインコンテンツへスキップ
      </a>

      {/* Header (Kendo/Bushido) */}
      <header className="mode-kendo sticky top-0 z-40 border-b border-border/70 bg-background/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-nowrap items-center justify-between gap-3 px-4 py-3">
          <div className="flex min-w-0 items-center gap-3">
            <a
              href="/"
              className="min-w-0 max-w-[52vw] truncate font-display text-base font-semibold"
            >
              会津大学剣道部
            </a>
            <span className="hidden whitespace-nowrap text-xs text-muted sm:inline">
              Aizu University Kendo Club
            </span>
          </div>
          <nav className="hidden items-center gap-4 text-sm text-muted lg:flex lg:whitespace-nowrap">
            <a className="hover:text-foreground" href="#youtube">
              動画
            </a>
            <a className="hover:text-foreground" href="#about">
              About
            </a>
            <a className="hover:text-foreground" href="#activities">
              活動内容
            </a>
            <a className="hover:text-foreground" href="#members">
              部員紹介
            </a>
            <a className="hover:text-foreground" href="#contact">
              SNS & Contact
            </a>
          </nav>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a href="#contact" className="hidden lg:inline-flex aukc-btn aukc-btn-primary">
              見学・入部案内
              <ArrowRight className="ml-2 size-4" aria-hidden="true" />
            </a>
            <MobileNav
              title="会津大学剣道部"
              items={[
                { href: "#youtube", label: "動画" },
                { href: "#about", label: "About" },
                { href: "#activities", label: "活動内容" },
                { href: "#members", label: "部員紹介" },
                { href: "#contact", label: "SNS & Contact" },
              ]}
            />
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Header (Chill) */}
      <header className="mode-chill sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <div className="flex min-w-0 items-center gap-2">
            <span className="grid size-9 place-items-center rounded-2xl bg-accent/10 text-accent">
              ゆ
            </span>
            <a href="/" className="min-w-0 truncate font-display text-base font-bold">
              ゆるゆる剣道部（会津大学）
            </a>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <a href="#chill-visit" className="aukc-btn aukc-btn-soft">
              ふらっと見学
              <ArrowRight className="ml-1 size-4" aria-hidden="true" />
            </a>
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="main">
        {/* ========================= */}
        {/* Kendo/Bushido composition */}
        {/* ========================= */}
        <div className="mode-kendo">
        {/* Hero */}
        <section className="relative isolate overflow-hidden border-b border-border/70">
          <div className="absolute inset-0 -z-10">
            {/* Base poster image (always visible; also acts as fallback if video fails) */}
            <Image
              src="/hero/hero-mobile.svg"
              alt=""
              width={1600}
              height={900}
              priority
              className="h-full w-full object-cover"
            />

            {/* Dark overlay for legibility */}
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-black/55" />
          </div>

          <div className="mx-auto w-full max-w-6xl px-4 py-16 md:py-24">
            <Reveal>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur">
                  <span className="size-1.5 rounded-full bg-accent" />
                  見学受付中
                </span>
                <span className="inline-flex items-center rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-medium text-white/75 backdrop-blur">
                  初心者歓迎・マイペースOK
                </span>
              </div>
              <h1 className="mt-5 break-words text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                会津大学剣道部
              </h1>
              <p className="mt-2 text-sm text-white/75 sm:text-base">
                Aizu University Kendo Club
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                楽しく、真剣に。<br />
                はじめてでも大丈夫。自分のペースで剣道を学べます。
              </p>

              <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                <a
                  href="#contact"
                  className="w-full aukc-btn aukc-btn-primary sm:w-auto"
                >
                  入部案内 / 見学申し込み
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </a>
                <a
                  href="#youtube"
                  className="w-full aukc-btn aukc-btn-soft sm:w-auto"
                >
                  動画を見る（稽古・大会）
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </a>
                <div className="flex items-center justify-center gap-2 sm:justify-start">
                  <a
                    href="https://x.com/kendo_uoa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aukc-btn aukc-btn-ghost"
                  >
                    X（旧Twitter）
                    <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.instagram.com/uoa_kendo"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram（@uoa_kendo）"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-black/25 text-white/90 shadow-sm shadow-black/30 backdrop-blur transition hover:-translate-y-0.5 hover:bg-black/35 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white/35"
                  >
                    <Instagram className="size-5" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="mt-10 max-w-3xl">
                <ActivityNotice
                  variant="hero"
                  title="活動日時・場所"
                  schedule={ACTIVITY_JA.schedule}
                  place={ACTIVITY_JA.place}
                  withXLink={false}
                />
              </div>

              <p className="mt-6 text-xs text-white/60">
                ※軽量化のため、背景は静止画で表示しています。
              </p>
            </Reveal>
          </div>
        </section>

        <div className="mx-auto w-full max-w-6xl px-4">
          {/* YouTube */}
          <section id="youtube" className="py-14">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                過去の稽古風景・大会動画
              </h2>
              <p className="mt-2 max-w-prose text-muted">
                稽古の迫力・間合い・空気感を映像で。サムネイルをクリックすると埋め込みが切り替わります。
              </p>
            </Reveal>
            <div className="mt-6">
              <Reveal delay={0.05}>
                <YouTubeGallery lang="ja" />
              </Reveal>
            </div>
          </section>

          {/* About */}
          <section id="about" className="py-14">
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight">
                  About 剣道部
                </h2>
                <p className="mt-2 max-w-prose text-muted">
                  楽しく続けられる雰囲気を大切にしつつ、基本もしっかり。初心者も経験者も歓迎です。
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Reveal delay={0.05}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm shadow-shadow/10">
                <p className="font-display text-lg font-semibold">活動理念</p>
                <p className="mt-2 text-sm leading-7 text-muted">
                  「楽しい稽古を目指しています！」運動不足解消でもOK。無理なく続けながら、
                  剣道の基本と礼儀も自然に身につけます。
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm shadow-shadow/10">
                <p className="font-display text-lg font-semibold">歴史・特徴</p>
                <p className="mt-2 text-sm leading-7 text-muted">
                  初心者や、マイペースに運動したいという方も大歓迎です。経験の有無は問いません。
                  まずは気軽に見学へ！
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm shadow-shadow/10">
                <p className="font-display text-lg font-semibold">モットー</p>
                <p className="mt-2 text-sm leading-7 text-muted">
                  「楽しく、真剣に。」——それぞれのペースで、少しずつ上達していきます。
                </p>
              </div>
            </Reveal>
          </div>
          </section>

          {/* Activities */}
          <section id="activities" className="py-14">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              活動内容
            </h2>
            <p className="mt-2 max-w-prose text-muted">
              活動日時・場所は以下で統一しています。見学もお気軽にどうぞ。
            </p>
          </Reveal>

          <div className="mt-6">
            <Reveal delay={0.05}>
              <ActivityNotice
                schedule={ACTIVITY_JA.schedule}
                place={ACTIVITY_JA.place}
              />
            </Reveal>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Reveal delay={0.05}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm shadow-shadow/10">
                <div className="flex items-center gap-2">
                  <CalendarDays className="size-5 text-accent" aria-hidden="true" />
                  <p className="font-display text-lg font-semibold">稽古日程</p>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  <li>{ACTIVITY_JA.schedule}</li>
                  <li>楽しく稽古しつつ、基本もしっかり</li>
                  <li>初心者は基礎メニューから丁寧に</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm shadow-shadow/10">
                <div className="flex items-center gap-2">
                  <MapPin className="size-5 text-accent" aria-hidden="true" />
                  <p className="font-display text-lg font-semibold">場所</p>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  <li>{ACTIVITY_JA.place}</li>
                  <li>動きやすい服装で見学OK</li>
                  <li>事前連絡があるとスムーズです</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm shadow-shadow/10">
                <div className="flex items-center gap-2">
                  <Trophy className="size-5 text-accent" aria-hidden="true" />
                  <p className="font-display text-lg font-semibold">
                    合宿／大会／交流戦
                  </p>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  <li>夏・春の合宿（例）：基本＋試合形式</li>
                  <li>地区大会・学生大会への出場</li>
                  <li>近隣大学・社会人との交流稽古</li>
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-10 flex items-end justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  写真ギャラリー
                </h3>
                <p className="mt-1 text-sm text-muted">
                  ※デモ用のプレースホルダー画像です。実写真に差し替え可能。
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <Reveal key={g.src} delay={0.02 * i}>
                <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm shadow-shadow/10">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    width={960}
                    height={720}
                    className="h-56 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          </section>

          {/* Steps */}
          <JoinSteps variant="kendo" lang="ja" />

          {/* FAQ */}
          <FaqAccordion variant="kendo" lang="ja" />

          {/* Members */}
          <section id="members" className="py-14">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              部員紹介
            </h2>
            <p className="mt-2 max-w-prose text-muted">
              現役部員の紹介を掲載します（例）。
            </p>
          </Reveal>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {members.map((m, idx) => (
              <Reveal key={m.name} delay={0.04 * idx}>
                <div className="flex items-start justify-between gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm shadow-shadow/10">
                  <div className="min-w-0">
                    <p className="font-display text-lg font-semibold">
                      {m.name}
                    </p>
                    <p className="mt-1 text-sm text-muted">{m.role}</p>
                    <p className="mt-3 text-sm leading-7 text-foreground">
                      {m.note}
                    </p>
                  </div>
                  <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-background">
                    <Users className="size-5 text-accent" aria-hidden="true" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          </section>

          {/* SNS & Contact */}
          <section id="contact" className="py-14">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              SNS & Contact
            </h2>
            <p className="mt-2 max-w-prose text-muted">
              最新情報はSNSで発信中。見学や質問も、お気軽にどうぞ。
            </p>
          </Reveal>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <Reveal delay={0.05}>
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm shadow-shadow/10">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-display text-lg font-semibold">SNS</p>
                  <div className="flex flex-col items-end gap-2">
                    <p className="text-xs text-muted">最短ルート：SNSのDM → ふらっと見学</p>
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href="https://x.com/kendo_uoa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-full items-center justify-center rounded-xl border border-border bg-card px-3 text-sm font-semibold text-foreground shadow-sm shadow-shadow/10 transition hover:-translate-y-0.5 hover:bg-background hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent/35"
                      >
                        X
                        <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                      </a>
                      <a
                        href="https://www.instagram.com/uoa_kendo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-3 text-sm font-semibold text-foreground shadow-sm shadow-shadow/10 transition hover:-translate-y-0.5 hover:bg-background hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent/35"
                      >
                        <Instagram className="size-4" aria-hidden="true" />
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-border bg-background p-4 text-sm text-muted">
                  <p className="font-semibold text-foreground">初心者の方へ</p>
                  <p className="mt-2 leading-7">
                    竹刀や防具、胴着は部で用意しています。初心者の方でもすぐに参加できます！
                    特にSNSで連絡しなくても、ふらっと見学に来てくれて大丈夫です。
                    ただ、たまにお休みの日もあるので、事前にひとこと連絡をもらえると嬉しいです。
                  </p>
                  <p className="mt-3 text-xs">
                    見学の相談や質問は、X/InstagramのDMからどうぞ。
                  </p>
                </div>

                <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-background">
                  <div className="p-3 text-xs text-muted">
                    埋め込みがブロックされる環境では、上のボタンからご覧ください。
                  </div>
                  <div className="h-[420px] overflow-auto px-3 pb-3 sm:h-[540px]">
                    <a
                      className="twitter-timeline"
                      data-height="520"
                      data-dnt="true"
                      href="https://x.com/kendo_uoa"
                    >
                      Tweets by kendo_uoa
                    </a>
                  </div>
                </div>

                <Script
                  src="https://platform.twitter.com/widgets.js"
                  strategy="lazyOnload"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm shadow-shadow/10">
                <p className="font-display text-lg font-semibold tracking-tight">連絡方法</p>
                <p className="mt-2 text-sm leading-7 text-muted">
                  メールでの問い合わせは受け付けていません。見学の相談や質問は、SNSのDMから気軽にご連絡ください。
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href="https://x.com/kendo_uoa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center rounded-xl border border-border bg-background px-3 text-sm font-semibold text-foreground shadow-sm shadow-shadow/10 transition hover:-translate-y-0.5 hover:bg-card hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent/35"
                  >
                    Xで連絡
                    <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.instagram.com/uoa_kendo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background px-3 text-sm font-semibold text-foreground shadow-sm shadow-shadow/10 transition hover:-translate-y-0.5 hover:bg-card hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent/35"
                  >
                    <Instagram className="size-4" aria-hidden="true" />
                    Instagramで連絡
                    <ArrowRight className="ml-1 size-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
          </section>
        </div>
        </div>

        {/* ========================= */}
        {/* Chill composition (new)    */}
        {/* ========================= */}
        <div className="mode-chill">
          <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:py-14">
            <Reveal>
              <div className="aukc-card p-6 sm:p-10">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="max-w-2xl">
                    <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-bold text-muted">
                      のんびり運動 / 友だち作り / 初心者歓迎
                    </p>
                    <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
                      ゆるっと剣道、はじめよ。
                    </h1>
                    <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                      「運動不足だからちょっと動きたい」でもOK。道着がなくてもOK。
                      まずは見学で雰囲気だけ感じに来てください。
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      <span className="aukc-pill border border-border bg-background px-3 py-1 text-xs font-semibold text-foreground">
                        マイペースOK
                      </span>
                      <span className="aukc-pill border border-border bg-background px-3 py-1 text-xs font-semibold text-foreground">
                        初心者OK
                      </span>
                      <span className="aukc-pill border border-border bg-background px-3 py-1 text-xs font-semibold text-foreground">
                        途中参加OK
                      </span>
                    </div>
                  </div>

                  <div className="flex shrink-0 flex-col gap-3">
                    <a href="#chill-visit" className="aukc-btn aukc-btn-primary">
                      見学する（受付中）
                      <ArrowRight className="ml-1 size-4" aria-hidden="true" />
                    </a>
                    <a href="https://x.com/kendo_uoa" target="_blank" rel="noopener noreferrer" className="aukc-btn aukc-btn-ghost">
                      Xでゆるっと近況
                      <ArrowRight className="ml-1 size-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>

                <div className="mt-6">
                  <ActivityNotice
                    title="活動日時・場所"
                    schedule={ACTIVITY_JA.schedule}
                    place={ACTIVITY_JA.place}
                    withXLink={false}
                  />
                </div>
              </div>
            </Reveal>
          </section>

          <section className="mx-auto w-full max-w-6xl px-4 pb-10">
            <Reveal>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="aukc-card p-6">
                  <p className="font-display text-lg font-extrabold">ゆるメニュー</p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    その日の気分と体力に合わせて。素振り・足さばき・軽い打ち込み・のんびり地稽古など。
                  </p>
                </div>
                <div className="aukc-card p-6">
                  <p className="font-display text-lg font-extrabold">持ち物</p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    見学だけなら動きやすい服でOK。経験者で防具がある方は持ってきても大丈夫です。
                  </p>
                </div>
                <div className="aukc-card p-6">
                  <p className="font-display text-lg font-extrabold">よくあるやつ</p>
                  <ul className="mt-2 space-y-1 text-sm text-muted">
                    <li>Q: 未経験でも？ → A: もちろん！</li>
                    <li>Q: 週1しか無理… → A: 全然OK！</li>
                    <li>Q: 体力に自信ない… → A: そこから！</li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </section>

          {/* Steps */}
          <section className="mx-auto w-full max-w-6xl px-4">
            <JoinSteps variant="chill" lang="ja" />
          </section>

          {/* FAQ + Video (side-by-side on desktop) */}
          <section className="mx-auto w-full max-w-6xl px-4 py-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
              <div>
                <Reveal>
                  <h2 className="font-display text-2xl font-extrabold tracking-tight">
                    のんびり動画コーナー
                  </h2>
                  <p className="mt-2 max-w-prose text-muted">
                    見るだけでも雰囲気がわかります（サムネを押すと切り替わります）。
                  </p>
                </Reveal>
                <div className="mt-6">
                  <Reveal delay={0.05}>
                    <YouTubeGallery lang="ja" />
                  </Reveal>
                </div>
              </div>
              <div>
                <FaqAccordion variant="chill" lang="ja" compact />
              </div>
            </div>
          </section>

          <section id="chill-visit" className="mx-auto w-full max-w-6xl px-4 py-12">
            <Reveal>
              <div className="aukc-card p-6 sm:p-10">
                <h2 className="font-display text-2xl font-extrabold tracking-tight">
                  ふらっと見学、歓迎です
                </h2>
                <p className="mt-2 max-w-prose text-muted">
                  ガチガチの体育会系じゃなく、楽しく続ける感じでやってます。気軽にどうぞ。
                </p>
                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  <div id="chill-contact" className="aukc-card p-6">
                    <p className="font-display text-lg font-extrabold">SNS</p>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      見学の相談や質問は、X/InstagramのDMでOKです。ふらっと来ても大丈夫ですが、
                      たまにお休みの日もあるので事前にひとことあると嬉しいです。
                    </p>
                    <p className="mt-4 text-xs font-bold text-foreground">
                      最短ルート：SNSのDM → 見学
                    </p>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <a
                        className="inline-flex h-11 items-center justify-center rounded-xl border border-border bg-background px-3 text-sm font-semibold text-foreground shadow-sm shadow-shadow/10 transition hover:-translate-y-0.5 hover:bg-card hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent/35"
                        href="https://x.com/kendo_uoa"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        X
                        <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                      </a>
                      <a
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background px-3 text-sm font-semibold text-foreground shadow-sm shadow-shadow/10 transition hover:-translate-y-0.5 hover:bg-card hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent/35"
                        href="https://www.instagram.com/uoa_kendo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="size-4" aria-hidden="true" />
                        Instagram
                      </a>
                    </div>

                    <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-background">
                      <div className="p-3 text-xs text-muted">
                        埋め込みがブロックされる環境では、上のボタンからご覧ください。
                      </div>
                      <div className="h-[420px] overflow-auto px-3 pb-3 sm:h-[540px]">
                        <a
                          className="twitter-timeline"
                          data-height="520"
                          data-dnt="true"
                          href="https://x.com/kendo_uoa"
                        >
                          Tweets by kendo_uoa
                        </a>
                      </div>
                    </div>

                    <Script
                      src="https://platform.twitter.com/widgets.js"
                      strategy="lazyOnload"
                    />
                  </div>
                  <div className="aukc-card p-6">
                    <p className="font-display text-lg font-extrabold">最短ルート</p>
                    <ol className="mt-3 space-y-2 text-sm text-muted">
                      <li>1) X / InstagramのDMで連絡</li>
                      <li>2) 月/木の19:00ごろに体育館2Fへ</li>
                      <li>3) 見学して、気に入ったらそのままOK</li>
                    </ol>
                    <p className="mt-4 text-xs text-muted">
                      連絡なしで見学もOKですが、たまにお休みの日もあるので事前にひとことあると嬉しいです。
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          <footer className="border-t border-border/70 bg-background">
            <div className="mx-auto w-full max-w-6xl px-4 py-10">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted">
                  © {new Date().getFullYear()} Aizu University Kendo Club
                </p>
                <a
                  href="https://www.u-aizu.ac.jp/"
            target="_blank"
            rel="noopener noreferrer"
                  className="text-sm text-muted underline underline-offset-4 hover:text-foreground"
                >
                  会津大学 公式サイト
                </a>
              </div>
            </div>
          </footer>
        </div>
      </main>

      <footer className="mode-kendo mt-10 border-t border-border/70 bg-background">
        <div className="mx-auto w-full max-w-6xl px-4 py-8">
          <div className="mb-4">
            <ActivityNotice
              title="活動日時・場所（簡易）"
              schedule={ACTIVITY_JA.schedule}
              place={ACTIVITY_JA.place}
              withXLink={false}
            />
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Aizu University Kendo Club
          </p>
          <a
            href="https://www.u-aizu.ac.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted underline underline-offset-4 hover:text-foreground"
          >
            会津大学 公式サイト
          </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
