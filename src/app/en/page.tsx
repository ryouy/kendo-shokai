import Image from "next/image";
import Script from "next/script";
import { ArrowRight, CalendarDays, MapPin, Trophy, Users } from "lucide-react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { YouTubeGallery } from "@/components/YouTubeGallery";

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
    { name: "Kaito Sato", role: "Captain", note: "“Build the weight of one ippon, every day.”" },
    { name: "Nana Suzuki", role: "Vice Captain", note: "“Beginners welcome. We start from the basics.”" },
    { name: "Yuma Takahashi", role: "Manager", note: "“Balance study and practice—be strong in both.”" },
    { name: "Rena Ito", role: "Treasurer", note: "“Kirikaeshi clears the mind.”" },
  ] as const;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-card focus:px-3 focus:py-2 focus:text-sm focus:shadow"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <div className="flex min-w-0 items-baseline gap-3">
            <a href="/en" className="font-display text-base font-semibold whitespace-nowrap">
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
            <LanguageToggle />
          </div>
        </div>
      </header>

      <main id="main">
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
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
                <span className="size-1.5 rounded-full bg-accent" />
                Recruiting new members — beginners welcome
              </p>
              <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                Aizu University Kendo Club
              </h1>
              <p className="mt-2 text-sm text-white/75 sm:text-base">
                会津大学剣道部
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                “Live by the sword, refine your technique.”<br />
                “Put your soul into every strike.”
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#youtube"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 bg-zinc-900/65 px-6 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-zinc-900/80 focus:outline-none focus:ring-2 focus:ring-white/35"
                >
                  Watch videos
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </a>
              </div>

              <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded-2xl border border-white/15 bg-black/25 p-4 text-white backdrop-blur">
                  <dt className="text-xs text-white/70">Practice</dt>
                  <dd className="mt-1 text-sm font-semibold">
                    3x/week (example)
                  </dd>
                </div>
                <div className="rounded-2xl border border-white/15 bg-black/25 p-4 text-white backdrop-blur">
                  <dt className="text-xs text-white/70">Location</dt>
                  <dd className="mt-1 text-sm font-semibold">Campus dojo (example)</dd>
                </div>
                <div className="rounded-2xl border border-white/15 bg-black/25 p-4 text-white backdrop-blur">
                  <dt className="text-xs text-white/70">Purpose</dt>
                  <dd className="mt-1 text-sm font-semibold">Intro & recruiting</dd>
                </div>
                <div className="rounded-2xl border border-white/15 bg-black/25 p-4 text-white backdrop-blur">
                  <dt className="text-xs text-white/70">Vibe</dt>
                  <dd className="mt-1 text-sm font-semibold">Intensity × Respect</dd>
                </div>
              </dl>

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
                    A quick introduction to our philosophy, history, and 특징.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Reveal delay={0.05}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm shadow-shadow/10">
                  <p className="font-display text-lg font-semibold">Philosophy</p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    We value etiquette and fundamentals. Through consistent practice, we build the resilience that also supports study and research.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm shadow-shadow/10">
                  <p className="font-display text-lg font-semibold">What makes us us</p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    High-density practice even with a small team. Experienced members sharpen their skills; beginners learn step-by-step from the basics.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm shadow-shadow/10">
                  <p className="font-display text-lg font-semibold">Motto</p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    “Be correct, be strong, and show respect.” We face the value of each strike, every day.
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
                Practice schedule/location, camps, matches, and exchanges (examples).
              </p>
            </Reveal>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Reveal delay={0.05}>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm shadow-shadow/10">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="size-5 text-accent" aria-hidden="true" />
                    <p className="font-display text-lg font-semibold">Schedule</p>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-muted">
                    <li>3x/week (example): Mon/Wed/Fri 18:00–20:00</li>
                    <li>Basics → keiko → focused drills</li>
                    <li>Beginners follow a fundamentals-first program</li>
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
                    <li>On-campus dojo (example)</li>
                    <li>Equipment storage available (depending on situation)</li>
                    <li>Visits welcome (message us first if possible)</li>
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
                <ContactForm lang="en" />
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
            University of Aizu (Official)
          </a>
        </div>
      </footer>
    </div>
  );
}


