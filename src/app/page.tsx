import { ArrowRight, Instagram, X } from "lucide-react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Reveal } from "@/components/Reveal";
import { JoinSteps } from "@/components/JoinSteps";
import { FaqAccordion } from "@/components/FaqAccordion";
import { YouTubeGallery } from "@/components/YouTubeGallery";
import { ActivityNotice } from "@/components/ActivityNotice";
import { ACTIVITY_JA } from "@/lib/activity";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-card focus:px-3 focus:py-2 focus:text-sm focus:shadow"
      >
        メインコンテンツへスキップ
      </a>

      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <a href="/" className="min-w-0 truncate font-display text-xl font-extrabold sm:text-2xl">
            会津大学剣道部
          </a>
          <div className="flex shrink-0 items-center gap-2">
            <a href="#chill-visit" className="aukc-btn aukc-btn-soft">
              ふらっと見学
              <ArrowRight className="ml-1 size-4" aria-hidden="true" />
            </a>
            <LanguageToggle />
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:py-14">
          <Reveal>
            <div className="aukc-card overflow-hidden p-6 sm:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl">
                  <p className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-1 text-xs font-bold text-muted backdrop-blur">
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
                    <span className="aukc-pill border border-border/70 bg-background/60 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                      マイペースOK
                    </span>
                    <span className="aukc-pill border border-border/70 bg-background/60 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                      初心者OK
                    </span>
                    <span className="aukc-pill border border-border/70 bg-background/60 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                      途中参加OK
                    </span>
                  </div>
                </div>

                <div className="flex shrink-0 flex-col gap-3">
                  <a href="#chill-visit" className="aukc-btn aukc-btn-primary">
                    見学する（受付中）
                    <ArrowRight className="ml-1 size-4" aria-hidden="true" />
                  </a>
                  <a
                    href="https://x.com/kendo_uoa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aukc-btn aukc-btn-ghost"
                  >
                    Xでゆるっと近況
                    <ArrowRight className="ml-1 size-4" aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.instagram.com/uoa_kendo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aukc-btn aukc-btn-ghost"
                  >
                    インスタでゆるっとも
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

        {/* Mini cards */}
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
                  道具は全部貸せます！見学だけなら動きやすい服でOK。防具がある方は持ってきても大丈夫です。
                </p>
              </div>
              <div className="aukc-card p-6">
                <p className="font-display text-lg font-extrabold">Q&A</p>
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

        {/* Video corner */}
        <section className="mx-auto w-full max-w-6xl px-4 py-10">
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
        </section>

        {/* Bottom: FAQ + Visit */}
        <section id="chill-visit" className="mx-auto w-full max-w-6xl px-4 py-12">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <div className="aukc-card p-6 sm:p-10">
                <h2 className="font-display text-2xl font-extrabold tracking-tight">よくある質問</h2>
                <p className="mt-2 max-w-prose text-sm leading-7 text-muted">
                  初心者の方も安心して来られるように、よく聞かれることをまとめました。
                </p>
                <div className="mt-6">
                  <FaqAccordion variant="chill" lang="ja" compact hideHeader className="py-0" />
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="aukc-card p-6 sm:p-10">
                <h2 className="font-display text-2xl font-extrabold tracking-tight">
                  ふらっと見学、歓迎です
                </h2>
                <p className="mt-2 max-w-prose text-muted">
                  ガチガチの体育会系じゃなく、楽しく続ける感じでやってます。気軽にどうぞ。
                </p>

                <div className="mt-6 space-y-4">
                  <div className="aukc-card p-6">
                    <p className="font-display text-lg font-extrabold">最短ルート</p>
                    <ol className="mt-3 space-y-2 text-sm text-muted">
                      <li>1) X / Instagram のDMで連絡（任意）</li>
                      <li>2) 月・木 19:00ごろに体育館2Fへ</li>
                      <li>3) 見学して、気に入ったらそのままOK</li>
                    </ol>
                    <p className="mt-4 text-sm leading-7 text-muted">
                      連絡なしでもOKですが、
                      <br />
                      たまにお休みの日もあるので
                      <br />
                      事前にひとことあると嬉しいです。
                    </p>
                  </div>

                  <div id="chill-contact" className="aukc-card p-6">
                    <p className="font-display text-lg font-extrabold">SNS（DMはこちら）</p>
                    <div className="mt-3 flex w-full flex-col gap-2 md:flex-row">
                      <a
                        className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 text-sm font-semibold text-foreground shadow-sm shadow-shadow/10 transition will-change-transform hover:-translate-y-0.5 hover:bg-card hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent/35 md:flex-1"
                        href="https://x.com/kendo_uoa"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <X className="size-4" aria-hidden="true" />
                        Xで連絡（DM）
                        <ArrowRight className="ml-1 size-4" aria-hidden="true" />
                      </a>
                      <a
                        className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 text-sm font-semibold text-foreground shadow-sm shadow-shadow/10 transition will-change-transform hover:-translate-y-0.5 hover:bg-card hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent/35 md:flex-1"
                        href="https://www.instagram.com/uoa_kendo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="size-4" aria-hidden="true" />
                        Instagramで連絡（DM）
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
            <p className="text-sm text-muted">© {new Date().getFullYear()} Aizu University Kendo Club</p>
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


