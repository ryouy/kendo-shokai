import Image from "next/image";
import Script from "next/script";
import { ArrowRight, CalendarDays, MapPin, Trophy, Users } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";

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

  const seniors = [
    {
      name: "OB（2022卒）",
      quote:
        "研究で詰まった日も稽古に行くと頭がクリアになりました。勝ち負け以上に、続ける力が身につきます。",
    },
    {
      name: "OG（2023卒）",
      quote:
        "先輩後輩の距離が近く、面倒見の良い雰囲気。遠征や交流戦で全国に仲間が増えました。",
    },
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
          <div className="flex items-baseline gap-3">
            <a href="#" className="font-display text-base font-semibold">
              会津大学剣道部
            </a>
            <span className="hidden text-xs text-muted sm:inline">
              Aizu University Kendo Club
            </span>
          </div>
          <nav className="hidden items-center gap-4 text-sm text-muted md:flex">
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
            <a
              href="#contact"
              className="hidden h-10 items-center justify-center rounded-xl bg-accent px-4 text-sm font-semibold text-white shadow-sm shadow-shadow/15 transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent/40 sm:inline-flex"
            >
              Join Us / 入部案内
              <ArrowRight className="ml-2 size-4" aria-hidden="true" />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="main" className="mx-auto w-full max-w-6xl px-4">
        {/* Hero */}
        <section className="grid items-center gap-8 py-14 md:grid-cols-2 md:py-20">
          <Reveal>
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted">
                <span className="size-1.5 rounded-full bg-accent" />
                部員募集中｜初心者・経験者どちらも歓迎
              </p>
              <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                会津大学剣道部
                <span className="mt-2 block text-lg font-medium text-muted sm:text-xl">
                  Aizu University Kendo Club
                </span>
              </h1>
              <p className="mt-4 max-w-prose leading-8 text-muted">
                基本を大切に、一本の重みを磨く。学業と両立しながら、稽古・大会・交流戦を通して
                「強さ」と「礼」を育てます。
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-accent px-5 text-sm font-semibold text-white shadow-sm shadow-shadow/15 transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent/40"
                >
                  Join Us / 入部案内
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </a>
                <a
                  href="#activities"
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-border bg-card px-5 text-sm font-semibold text-foreground transition hover:bg-background focus:outline-none focus:ring-2 focus:ring-accent/35"
                >
                  活動内容を見る
                </a>
              </div>

              <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-border bg-card p-4 shadow-sm shadow-shadow/10">
                  <dt className="text-xs text-muted">稽古</dt>
                  <dd className="mt-1 text-sm font-semibold">
                    週3回（例）平日夕方
                  </dd>
                </div>
                <div className="rounded-2xl border border-border bg-card p-4 shadow-sm shadow-shadow/10">
                  <dt className="text-xs text-muted">場所</dt>
                  <dd className="mt-1 text-sm font-semibold">学内 道場（例）</dd>
                </div>
                <div className="rounded-2xl border border-border bg-card p-4 shadow-sm shadow-shadow/10">
                  <dt className="text-xs text-muted">雰囲気</dt>
                  <dd className="mt-1 text-sm font-semibold">熱量 × 和やか</dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm shadow-shadow/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-accent-2/10 to-transparent" />
              <Image
                src="/hero/hero-kendo.svg"
                alt="剣道の構えをイメージしたビジュアル"
                width={960}
                height={720}
                priority
                className="relative h-auto w-full"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-border/70 bg-background/80 p-4 backdrop-blur">
                <p className="font-display text-sm font-semibold">
                  Motto: 「正しく、強く、礼を尽くす」
                </p>
                <p className="mt-1 text-xs text-muted">
                  オシャレ / 剣道モード切替で雰囲気が変わります
                </p>
              </div>
            </div>
          </Reveal>
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
              現役部員の紹介と、先輩の声を掲載します（例）。
            </p>
          </Reveal>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="grid gap-4">
              {members.map((m, idx) => (
                <Reveal key={m.name} delay={0.04 * idx}>
                  <div className="flex items-start justify-between gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm shadow-shadow/10">
                    <div>
                      <p className="font-display text-lg font-semibold">
                        {m.name}
                      </p>
                      <p className="mt-1 text-sm text-muted">{m.role}</p>
                      <p className="mt-3 text-sm leading-7 text-foreground">
                        {m.note}
                      </p>
                    </div>
                    <div className="grid size-11 place-items-center rounded-2xl bg-background">
                      <Users className="size-5 text-accent" aria-hidden="true" />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm shadow-shadow/10">
                <p className="font-display text-xl font-semibold">先輩の声</p>
                <div className="mt-4 space-y-4">
                  {seniors.map((s) => (
                    <figure
                      key={s.name}
                      className="rounded-2xl border border-border bg-background p-4"
                    >
                      <blockquote className="text-sm leading-7 text-foreground">
                        “{s.quote}”
                      </blockquote>
                      <figcaption className="mt-2 text-xs text-muted">
                        — {s.name}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </Reveal>
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
                      className="inline-flex h-10 items-center justify-center rounded-xl bg-background px-3 text-sm font-semibold text-foreground ring-1 ring-border transition hover:bg-card focus:outline-none focus:ring-2 focus:ring-accent/35"
                    >
                      @kendo_uoa を開く
                      <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                    </a>
                    <a
                      href="mailto:kendo_uoa@example.com?subject=%E3%80%90%E4%BC%9A%E6%B4%A5%E5%A4%A7%E5%AD%A6%E5%89%A3%E9%81%93%E9%83%A8%E3%80%91%E8%A6%8B%E5%AD%A6%E7%94%B3%E8%BE%BC%E3%81%BF"
                      className="inline-flex h-10 items-center justify-center rounded-xl bg-accent px-3 text-sm font-semibold text-white shadow-sm shadow-shadow/15 transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent/40"
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
              <ContactForm />
            </Reveal>
          </div>
        </section>
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
