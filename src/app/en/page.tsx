import Image from "next/image";
import Script from "next/script";
import { ArrowRight, CalendarDays, MapPin, Trophy, Users } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { MobileNav } from "@/components/MobileNav";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { YouTubeGallery } from "@/components/YouTubeGallery";
import { ActivityNotice } from "@/components/ActivityNotice";
import { ACTIVITY_EN } from "@/lib/activity";

export const metadata = {
  title: "Aizu University Kendo Club",
  description:
    "Official introduction page for Aizu University Kendo Club: activities, members, and social links.",
};

export default function HomeEn() {
  const gallery = [
    { src: "/gallery/01.svg", alt: "Kendo practitioner silhouette" },
    { src: "/gallery/02.svg", alt: "Footwork and dojo floor impression" },
    { src: "/gallery/03.svg", alt: "A strike moment illustration" },
    { src: "/gallery/04.svg", alt: "Team lineup impression" },
    { src: "/gallery/05.svg", alt: "Training camp impression" },
    { src: "/gallery/06.svg", alt: "Armor and shinai icon" },
  ] as const;

  const members = [
    { name: "Kaito Sato", role: "Captain", note: "“Fun and serious — let’s improve together.”" },
    { name: "Nana Suzuki", role: "Vice Captain", note: "“Beginners welcome! We go slowly from the basics.”" },
    { name: "Yuma Takahashi", role: "Manager", note: "“Your pace is okay. Come visit anytime.”" },
    { name: "Rena Ito", role: "Treasurer", note: "“Great for getting back into exercise.”" },
  ] as const;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-card focus:px-3 focus:py-2 focus:text-sm focus:shadow"
      >
        Skip to content
      </a>

      {/* Header (Kendo/Bushido) */}
      <header className="mode-kendo sticky top-0 z-40 border-b border-border/70 bg-background/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <div className="flex min-w-0 items-baseline gap-3">
            <a
              href="/en"
              className="min-w-0 max-w-[52vw] truncate font-display text-base font-semibold"
            >
              Aizu Univ. Kendo Club
            </a>
            <span className="hidden whitespace-nowrap text-xs text-muted sm:inline">
              会津大学剣道部
            </span>
          </div>
          <nav className="hidden items-center gap-4 text-sm text-muted md:flex">
            <a className="hover:text-foreground" href="#youtube">
              Videos
            </a>
            <a className="hover:text-foreground" href="#about">
              About
            </a>
            <a className="hover:text-foreground" href="#activities">
              Activities
            </a>
            <a className="hover:text-foreground" href="#members">
              Members
            </a>
            <a className="hover:text-foreground" href="#contact">
              SNS & Contact
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden md:inline-flex aukc-btn aukc-btn-primary">
              Join / Visit
              <ArrowRight className="ml-2 size-4" aria-hidden="true" />
            </a>
            <MobileNav
              title="Aizu University Kendo Club"
              items={[
                { href: "#youtube", label: "Videos" },
                { href: "#about", label: "About" },
                { href: "#activities", label: "Activities" },
                { href: "#members", label: "Members" },
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
              ch
            </span>
            <a href="/en" className="min-w-0 truncate font-display text-base font-bold">
              Chill Kendo @ Aizu
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a href="#chill-visit" className="aukc-btn aukc-btn-soft">
              Drop-in visit
              <ArrowRight className="ml-1 size-4" aria-hidden="true" />
            </a>
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
            <Image
              src="/hero/hero-mobile.svg"
              alt=""
              width={1600}
              height={900}
              priority
              className="h-full w-full object-cover"
            />
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
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-black/55" />
          </div>

          <div className="mx-auto w-full max-w-6xl px-4 py-16 md:py-24">
            <Reveal>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur">
                  <span className="size-1.5 rounded-full bg-accent" />
                  Visits welcome
                </span>
                <span className="inline-flex items-center rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-medium text-white/75 backdrop-blur">
                  Beginners welcome • go at your own pace
                </span>
              </div>
              <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                Aizu University Kendo Club
              </h1>
              <p className="mt-2 text-sm text-white/75 sm:text-base">
                会津大学剣道部
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                Fun and serious — both. <br />
                First time is totally fine. Learn kendo at your own pace.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="aukc-btn aukc-btn-primary"
                >
                  Join / Schedule a visit
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </a>
                <a
                  href="#youtube"
                  className="aukc-btn aukc-btn-soft"
                >
                  Watch videos
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </a>
                <a
                  href="https://x.com/kendo_uoa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aukc-btn aukc-btn-ghost"
                >
                  X (Twitter)
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </a>
              </div>

              <div className="mt-10 max-w-3xl">
                <ActivityNotice
                  variant="hero"
                  title="Schedule & location"
                  schedule={ACTIVITY_EN.schedule}
                  place={ACTIVITY_EN.place}
                  withXLink={false}
                />
              </div>

              <p className="mt-6 text-xs text-white/60">
                *Mobile shows a lightweight poster image. Desktop/tablet plays the looping video.
              </p>
            </Reveal>
          </div>
        </section>

        <div className="mx-auto w-full max-w-6xl px-4">
          {/* YouTube */}
          <section id="youtube" className="py-14">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                Practice & match videos
              </h2>
              <p className="mt-2 max-w-prose text-muted">
                Click a thumbnail to switch the embedded video.
              </p>
            </Reveal>
            <div className="mt-6">
              <Reveal delay={0.05}>
                <YouTubeGallery lang="en" />
              </Reveal>
            </div>
          </section>

          {/* About */}
          <section id="about" className="py-14">
            <Reveal>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h2 className="font-display text-2xl font-semibold tracking-tight">
                    About
                  </h2>
                  <p className="mt-2 max-w-prose text-muted">
                    Friendly atmosphere with solid fundamentals. Beginners and experienced members are both welcome.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Reveal delay={0.05}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm shadow-shadow/10">
                  <p className="font-display text-lg font-semibold">Philosophy</p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    We aim for fun practice sessions. It’s totally okay if you just want to move your body—no pressure.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm shadow-shadow/10">
                  <p className="font-display text-lg font-semibold">What makes us us</p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    Beginners welcome, and you can go at your own pace. No experience required—come visit first!
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm shadow-shadow/10">
                  <p className="font-display text-lg font-semibold">Motto</p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    “Fun, but serious.” Small steps, steady improvement.
                  </p>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Activities */}
          <section id="activities" className="py-14">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                Activities
              </h2>
              <p className="mt-2 max-w-prose text-muted">
                Our schedule/location is fixed as below. Visitors are welcome.
              </p>
            </Reveal>

            <div className="mt-6">
              <Reveal delay={0.05}>
                <ActivityNotice
                  title="Schedule & location"
                  schedule={ACTIVITY_EN.schedule}
                  place={ACTIVITY_EN.place}
                  xLabel="Updates on X"
                />
              </Reveal>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Reveal delay={0.05}>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm shadow-shadow/10">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="size-5 text-accent" aria-hidden="true" />
                    <p className="font-display text-lg font-semibold">Schedule</p>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-muted">
                    <li>{ACTIVITY_EN.schedule}</li>
                    <li>Fun practice with solid fundamentals</li>
                    <li>Beginners start step-by-step</li>
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm shadow-shadow/10">
                  <div className="flex items-center gap-2">
                    <MapPin className="size-5 text-accent" aria-hidden="true" />
                    <p className="font-display text-lg font-semibold">Location</p>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-muted">
                    <li>{ACTIVITY_EN.place}</li>
                    <li>Come in comfortable clothes for a visit</li>
                    <li>A quick message helps us coordinate</li>
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm shadow-shadow/10">
                  <div className="flex items-center gap-2">
                    <Trophy className="size-5 text-accent" aria-hidden="true" />
                    <p className="font-display text-lg font-semibold">Camps / Matches</p>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-muted">
                    <li>Seasonal training camps (example)</li>
                    <li>Regional and student tournaments</li>
                    <li>Exchange practice with nearby universities & adults</li>
                  </ul>
                </div>
              </Reveal>
            </div>

            <Reveal>
              <div className="mt-10">
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  Photo gallery
                </h3>
                <p className="mt-1 text-sm text-muted">
                  *Placeholder images — replace with real photos anytime.
                </p>
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
                Members
              </h2>
              <p className="mt-2 max-w-prose text-muted">
                Current members (examples).
              </p>
            </Reveal>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {members.map((m, idx) => (
                <Reveal key={m.name} delay={0.04 * idx}>
                  <div className="flex items-start justify-between gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm shadow-shadow/10">
                    <div className="min-w-0">
                      <p className="font-display text-lg font-semibold">{m.name}</p>
                      <p className="mt-1 text-sm text-muted">{m.role}</p>
                      <p className="mt-3 text-sm leading-7 text-foreground">{m.note}</p>
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
                We post updates on X (Twitter). Feel free to contact us for joining or visits.
              </p>
            </Reveal>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <Reveal delay={0.05}>
                <div className="rounded-2xl border border-border bg-card p-5 shadow-sm shadow-shadow/10">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-display text-lg font-semibold">X (Twitter)</p>
                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href="https://x.com/kendo_uoa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 items-center justify-center rounded-xl border border-border bg-card px-3 text-sm font-semibold text-foreground shadow-sm shadow-shadow/10 transition hover:-translate-y-0.5 hover:bg-background hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent/35"
                      >
                        Open @kendo_uoa
                        <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                      </a>
                      <a
                        href="mailto:kendo_uoa@example.com?subject=%5BAizu%20University%20Kendo%20Club%5D%20Visit%20request"
                        className="inline-flex h-10 items-center justify-center rounded-xl border border-white/15 bg-zinc-900/70 px-3 text-sm font-semibold text-zinc-100 shadow-sm shadow-black/30 backdrop-blur transition hover:-translate-y-0.5 hover:bg-zinc-900/85 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white/35"
                      >
                        Request a visit
                        <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>

                  <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-background">
                    <div className="p-3 text-xs text-muted">
                      If the embed is blocked, please use the buttons above.
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
                <ContactForm lang="en" />
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

          <section className="mx-auto w-full max-w-6xl px-4 pb-10">
            <Reveal>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="aukc-card p-6">
                  <p className="font-display text-lg font-extrabold">Chill menu</p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    Light warm-up, footwork, basic drills, and relaxed keiko — pick what fits your day.
                  </p>
                </div>
                <div className="aukc-card p-6">
                  <p className="font-display text-lg font-extrabold">What to bring</p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    For a visit: comfortable clothes are enough. If you have your gear, feel free to bring it.
                  </p>
                </div>
                <div className="aukc-card p-6">
                  <p className="font-display text-lg font-extrabold">Mini FAQ</p>
                  <ul className="mt-2 space-y-1 text-sm text-muted">
                    <li>Q: No experience? → A: Perfectly fine.</li>
                    <li>Q: Only once a week? → A: Also fine.</li>
                    <li>Q: Low stamina? → A: Let’s start there.</li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </section>

          <section className="mx-auto w-full max-w-6xl px-4 py-10">
            <Reveal>
              <h2 className="font-display text-2xl font-extrabold tracking-tight">
                Cozy video corner
              </h2>
              <p className="mt-2 max-w-prose text-muted">
                Tap a thumbnail to switch the embed.
              </p>
            </Reveal>
            <div className="mt-6">
              <Reveal delay={0.05}>
                <YouTubeGallery lang="en" />
              </Reveal>
            </div>
          </section>

          <section id="chill-visit" className="mx-auto w-full max-w-6xl px-4 py-12">
            <Reveal>
              <div className="aukc-card p-6 sm:p-10">
                <h2 className="font-display text-2xl font-extrabold tracking-tight">
                  Drop-in visits welcome
                </h2>
                <p className="mt-2 max-w-prose text-muted">
                  We keep it friendly and low-pressure. Come take a look first.
                </p>
                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  <ContactForm lang="en" />
                  <div className="aukc-card p-6">
                    <p className="font-display text-lg font-extrabold">Quick steps</p>
                    <ol className="mt-3 space-y-2 text-sm text-muted">
                      <li>1) Message us (form or X)</li>
                      <li>2) Come around 19:00 (Mon/Thu)</li>
                      <li>3) Watch / join lightly — if you like it, you’re in</li>
                    </ol>
                    <a
                      className="mt-5 inline-flex aukc-btn aukc-btn-soft"
                      href="https://x.com/kendo_uoa"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open X
                      <ArrowRight className="ml-1 size-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          <footer className="border-t border-border/70 bg-background">
            <div className="mx-auto w-full max-w-6xl px-4 py-10">
              <div className="aukc-card p-5">
                <p className="text-sm font-bold text-foreground">This week</p>
                <p className="mt-1 text-sm text-muted">{ACTIVITY_EN.combined}</p>
              </div>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted">
                  © {new Date().getFullYear()} Aizu University Kendo Club
                </p>
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
      </main>

      <footer className="mode-kendo mt-10 border-t border-border/70 bg-background">
        <div className="mx-auto w-full max-w-6xl px-4 py-8">
          <div className="mb-4">
            <ActivityNotice
              title="Schedule (quick)"
              schedule={ACTIVITY_EN.schedule}
              place={ACTIVITY_EN.place}
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
              University of Aizu (Official)
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}


