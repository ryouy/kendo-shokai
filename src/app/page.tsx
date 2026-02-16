import Image from "next/image";
import Script from "next/script";
import { ArrowRight, CalendarDays, MapPin, Trophy, Users } from "lucide-react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { YouTubeGallery } from "@/components/YouTubeGallery";

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
    { name: "佐藤 海斗", role: "主将", note: "「一本の重みを、毎日積み上げる。」" },
    { name: "鈴木 菜々", role: "副将", note: "「初心者歓迎。基本から一緒に。」" },
    { name: "高橋 悠真", role: "主務", note: "「文武両道、支える側も強く。」" },
    { name: "伊藤 玲奈", role: "会計", note: "「切り返しで心も整う。」" },
  ] as const;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-card focus:px-3 focus:py-2 focus:text-sm focus:shadow"
      >
        メインコンテンツへスキップ
      </a>

      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <div className="flex min-w-0 items-baseline gap-3">
            <a href="#" className="font-display text-base font-semibold whitespace-nowrap">
              会津大学剣道部
            </a>
            <span className="hidden whitespace-nowrap text-xs text-muted sm:inline">
              Aizu University Kendo Club
            </span>
          </div>
          <nav className="hidden items-center gap-4 text-sm text-muted md:flex">
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
          <div className="flex items-center gap-3">
            <LanguageToggle />
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero (Video background on desktop, static poster on mobile) */}
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

            {/* Desktop video overlay (relative path => works with GitHub Pages basePath) */}
            <video
              className="hidden h-full w-full object-cover md:block"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="hero/hero-mobile.svg"
              aria-hidden="true"
            >
              <source src="hero/keiko.mp4" type="video/mp4" />
            </video>

            {/* Dark overlay for legibility */}
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-black/55" />
          </div>

          <div className="mx-auto w-full max-w-6xl px-4 py-16 md:py-24">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
                <span className="size-1.5 rounded-full bg-accent" />
                新入部員募集中｜初心者・経験者歓迎
              </p>
              <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                会津大学剣道部
              </h1>
              <p className="mt-2 text-sm text-white/75 sm:text-base">
                Aizu University Kendo Club
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                「剣に生きる、技に磨きを。」<br />
                「一打に魂を込めて。」
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#youtube"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 bg-zinc-900/65 px-6 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-zinc-900/80 focus:outline-none focus:ring-2 focus:ring-white/35"
                >
                  動画を見る（稽古・大会）
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </a>
              </div>

              <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded-2xl border border-white/15 bg-black/25 p-4 text-white backdrop-blur">
                  <dt className="text-xs text-white/70">稽古</dt>
                  <dd className="mt-1 text-sm font-semibold">
                    週3回（例）平日夕方
                  </dd>
                </div>
                <div className="rounded-2xl border border-white/15 bg-black/25 p-4 text-white backdrop-blur">
                  <dt className="text-xs text-white/70">場所</dt>
                  <dd className="mt-1 text-sm font-semibold">学内 道場（例）</dd>
                </div>
                <div className="rounded-2xl border border-white/15 bg-black/25 p-4 text-white backdrop-blur">
                  <dt className="text-xs text-white/70">目的</dt>
                  <dd className="mt-1 text-sm font-semibold">活動紹介・募集</dd>
                </div>
                <div className="rounded-2xl border border-white/15 bg-black/25 p-4 text-white backdrop-blur">
                  <dt className="text-xs text-white/70">雰囲気</dt>
                  <dd className="mt-1 text-sm font-semibold">迫力 × 礼節</dd>
                </div>
              </dl>

              <p className="mt-6 text-xs text-white/60">
                ※モバイルは軽量化のため静止画表示になります。PC/タブレットは動画ループ再生。
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
                  会津大学剣道部の理念・歴史・特徴を、端的に紹介します。
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Reveal delay={0.05}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm shadow-shadow/10">
                <p className="font-display text-lg font-semibold">活動理念</p>
                <p className="mt-2 text-sm leading-7 text-muted">
                  礼節を大切にし、基本に忠実な稽古を積み重ねることで、学業・研究にも通じる
                  「やり切る力」を育てます。
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm shadow-shadow/10">
                <p className="font-display text-lg font-semibold">歴史・特徴</p>
                <p className="mt-2 text-sm leading-7 text-muted">
                  少人数でも密度の高い稽古。経験者はもちろん、初心者も基礎から丁寧に。大会・交流戦・
                  合宿を通して、仲間と共に成長します。
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm shadow-shadow/10">
                <p className="font-display text-lg font-semibold">モットー</p>
                <p className="mt-2 text-sm leading-7 text-muted">
                  「正しく、強く、礼を尽くす」——日々の稽古を通じて、一本の価値と向き合います。
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
              稽古日程・場所、大会や合宿、交流戦などの活動を紹介します（例）。
            </p>
          </Reveal>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Reveal delay={0.05}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm shadow-shadow/10">
                <div className="flex items-center gap-2">
                  <CalendarDays className="size-5 text-accent" aria-hidden="true" />
                  <p className="font-display text-lg font-semibold">稽古日程</p>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  <li>週3回（例）：月・水・金 18:00–20:00</li>
                  <li>基礎（素振り・切り返し）→ 地稽古 → 研究稽古</li>
                  <li>初心者は基礎メニューを重点的に</li>
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
                  <li>会津大学 学内 道場（例）</li>
                  <li>更衣・防具置き場あり（状況により）</li>
                  <li>見学はいつでも歓迎（事前連絡推奨）</li>
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
              最新情報は X（旧Twitter）で発信中。見学申し込み・質問もお気軽に。
            </p>
          </Reveal>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <Reveal delay={0.05}>
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm shadow-shadow/10">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-display text-lg font-semibold">X（旧Twitter）</p>
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href="https://x.com/kendo_uoa"
                      target="_blank"
                      rel="noopener noreferrer"
                        className="inline-flex h-10 items-center justify-center rounded-xl border border-border bg-card px-3 text-sm font-semibold text-foreground shadow-sm shadow-shadow/10 transition hover:-translate-y-0.5 hover:bg-background hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent/35"
                    >
                      @kendo_uoa を開く
                      <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                    </a>
                    <a
                      href="mailto:kendo_uoa@example.com?subject=%E3%80%90%E4%BC%9A%E6%B4%A5%E5%A4%A7%E5%AD%A6%E5%89%A3%E9%81%93%E9%83%A8%E3%80%91%E8%A6%8B%E5%AD%A6%E7%94%B3%E8%BE%BC%E3%81%BF"
                        className="inline-flex h-10 items-center justify-center rounded-xl border border-white/15 bg-zinc-900/70 px-3 text-sm font-semibold text-zinc-100 shadow-sm shadow-black/30 backdrop-blur transition hover:-translate-y-0.5 hover:bg-zinc-900/85 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white/35"
                    >
                      部活見学申し込み
                      <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>

                <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-background">
                  <div className="p-3 text-xs text-muted">
                    埋め込みがブロックされる環境では、上のボタンからご覧ください。
                  </div>
                  <div className="h-[540px] overflow-auto px-3 pb-3">
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
              <ContactForm lang="ja" />
            </Reveal>
          </div>
          </section>
        </div>
      </main>

      <footer className="mt-10 border-t border-border/70 bg-background">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
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
      </footer>
    </div>
  );
}
