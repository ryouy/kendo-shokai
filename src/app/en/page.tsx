import { ArrowRight, Instagram, X } from "lucide-react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Reveal } from "@/components/Reveal";
import { JoinSteps } from "@/components/JoinSteps";
import { FaqAccordion } from "@/components/FaqAccordion";
import { YouTubeGallery } from "@/components/YouTubeGallery";
import { ActivityNotice } from "@/components/ActivityNotice";
import { ACTIVITY_EN } from "@/lib/activity";

export const metadata = {
  title: "Aizu University Kendo Club",
  description:
    "Official introduction page for Aizu University Kendo Club: relaxed practice, videos, and contact.",
};

export default function HomeEn() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-card focus:px-3 focus:py-2 focus:text-sm focus:shadow"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <a href="/en" className="min-w-0 truncate font-display text-xl font-extrabold sm:text-2xl">
            Aizu Univ. Kendo Club
          </a>
          <div className="flex shrink-0 items-center gap-2">
            <a href="#chill-visit" className="aukc-btn aukc-btn-soft">
              Drop-in visit
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
                    chill exercise • beginners welcome • go at your pace
                  </p>
                  <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
                    Chill kendo, maybe?
                  </h1>
                  <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                    If you just want to move your body a little, that’s totally fine.
                    No uniform needed for a first visit — come say hi.
                  </p>
                </div>

                <div className="flex shrink-0 flex-col gap-3">
                  <a href="#chill-visit" className="aukc-btn aukc-btn-primary">
                    Visit (welcome)
                    <ArrowRight className="ml-1 size-4" aria-hidden="true" />
                  </a>
                  <a
                    href="https://x.com/kendo_uoa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aukc-btn aukc-btn-ghost"
                  >
                    Updates on X
                    <ArrowRight className="ml-1 size-4" aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.instagram.com/uoa_kendo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aukc-btn aukc-btn-ghost"
                  >
                    Updates on Instagram
                    <ArrowRight className="ml-1 size-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="mt-6">
                <ActivityNotice
                  title="Schedule & location"
                  schedule={ACTIVITY_EN.schedule}
                  place={ACTIVITY_EN.place}
                  withXLink={false}
                />
              </div>
            </div>
          </Reveal>
        </section>

        {/* Steps */}
        <section className="mx-auto w-full max-w-6xl px-4">
          <JoinSteps variant="chill" lang="en" />
        </section>

        {/* Video corner */}
        <section className="mx-auto w-full max-w-6xl px-4 py-10">
          <div>
            <Reveal>
              <h2 className="font-display text-2xl font-extrabold tracking-tight">
                Cozy video corner
              </h2>
              <p className="mt-2 max-w-prose text-muted">Tap a thumbnail to switch the embed.</p>
            </Reveal>
            <div className="mt-6">
              <Reveal delay={0.05}>
                <YouTubeGallery lang="en" />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Bottom: FAQ + Visit */}
        <section id="chill-visit" className="mx-auto w-full max-w-6xl px-4 py-12">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <div className="aukc-card p-6 sm:p-10">
                <h2 className="font-display text-2xl font-extrabold tracking-tight">FAQ</h2>
                <p className="mt-2 max-w-prose text-sm leading-7 text-muted">
                  Frequently asked questions for first-time visitors.
                </p>
                <div className="mt-6">
                  <FaqAccordion variant="chill" lang="en" compact hideHeader className="py-0" />
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="aukc-card p-6 sm:p-10">
                <h2 className="font-display text-2xl font-extrabold tracking-tight">
                  Drop-in visits welcome
                </h2>
                <p className="mt-2 max-w-prose text-muted">
                  We keep it friendly and low-pressure. Come take a look first.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="aukc-card p-6">
                    <p className="font-display text-lg font-extrabold">Quick route</p>
                    <ol className="mt-3 space-y-2 text-sm text-muted">
                      <li>1) DM us on X / Instagram (optional)</li>
                      <li>2) Come around 19:00 (Mon/Thu) to Gym 2F</li>
                      <li>3) Watch practice — if you like it, you’re in</li>
                    </ol>
                    <p className="mt-4 text-sm leading-7 text-muted">
                      Dropping in without messaging is fine,
                      <br />
                      but since we sometimes take days off,
                      <br />
                      a quick heads-up helps a lot.
                    </p>
                  </div>

                  <div id="chill-contact" className="aukc-card p-6">
                    <p className="font-display text-lg font-extrabold">SNS (DM)</p>
                    <div className="mt-3 flex w-full flex-col gap-2 md:flex-row">
                      <a
                        className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 text-sm font-semibold text-foreground shadow-sm shadow-shadow/10 transition will-change-transform hover:-translate-y-0.5 hover:bg-card hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent/35 md:flex-1"
                        href="https://x.com/kendo_uoa"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <X className="size-4" aria-hidden="true" />
                        Message on X
                        <ArrowRight className="ml-1 size-4" aria-hidden="true" />
                      </a>
                      <a
                        className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 text-sm font-semibold text-foreground shadow-sm shadow-shadow/10 transition will-change-transform hover:-translate-y-0.5 hover:bg-card hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent/35 md:flex-1"
                        href="https://www.instagram.com/uoa_kendo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="size-4" aria-hidden="true" />
                        Message on Instagram
                        <ArrowRight className="ml-1 size-4" aria-hidden="true" />
                      </a>
                    </div>
                    <p className="mt-3 text-xs text-muted">
                      Latest updates are available via the buttons above.
                    </p>
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
              University of Aizu (Official)
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}


