import { CalendarDays, MapPin, X } from "lucide-react";

export function ActivityNotice({
  title,
  schedule,
  place,
  withXLink = true,
  xLabel = "Xで最新情報",
  variant = "default",
}: {
  title?: string;
  schedule: string;
  place: string;
  withXLink?: boolean;
  xLabel?: string;
  variant?: "default" | "hero";
}) {
  const isHero = variant === "hero";
  return (
    <div
      className={[
        isHero ? "rounded-2xl border p-3 shadow-sm sm:p-4" : "aukc-card p-3 sm:p-4",
        isHero
          ? "border-white/15 bg-black/25 text-white shadow-black/30 backdrop-blur"
          : "",
      ].join(" ")}
    >
      {(title || withXLink) && (
        <div className="flex flex-wrap items-center justify-between gap-3">
          {title ? (
            <p
              className={[
                "font-display text-sm font-semibold tracking-tight",
                isHero ? "text-white/90" : "",
              ].join(" ")}
            >
              {title}
            </p>
          ) : (
            <span />
          )}
          {withXLink ? (
          <a
            href="https://x.com/kendo_uoa"
            target="_blank"
            rel="noopener noreferrer"
            className={[
              "inline-flex h-9 items-center justify-center gap-2 rounded-xl border px-3 text-xs font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2",
              isHero
                ? "border-white/15 bg-black/25 text-white/90 shadow-black/30 hover:bg-black/35 focus:ring-white/35"
                : "border-border bg-background text-foreground shadow-shadow/10 hover:bg-card focus:ring-accent/35",
            ].join(" ")}
          >
            <X className="size-4" aria-hidden="true" />
            {xLabel}
          </a>
          ) : null}
        </div>
      )}

      <div
        className={[
          title || withXLink ? "mt-2" : "",
          "grid gap-2 text-sm sm:grid-cols-2 sm:gap-3",
        ].join(" ")}
      >
        <div className="flex items-start gap-2">
          <CalendarDays
            className={["mt-0.5 size-4", isHero ? "text-white/85" : "text-accent"].join(" ")}
            aria-hidden="true"
          />
          <p className={["leading-5 sm:leading-6", isHero ? "text-white" : ""].join(" ")}>
            <span className="text-sm font-semibold sm:text-base">{schedule}</span>
          </p>
        </div>
        <div className="flex items-start gap-2">
          <MapPin
            className={["mt-0.5 size-4", isHero ? "text-white/85" : "text-accent"].join(" ")}
            aria-hidden="true"
          />
          <p className={["leading-5 sm:leading-6", isHero ? "text-white/90" : ""].join(" ")}>
            <span className="text-sm font-semibold sm:text-base">{place}</span>
          </p>
        </div>
      </div>
    </div>
  );
}


