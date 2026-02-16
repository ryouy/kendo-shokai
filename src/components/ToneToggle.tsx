"use client";

import { useId, useMemo, useSyncExternalStore } from "react";
import { Sparkles } from "lucide-react";
import { getToneSnapshot, setTone, subscribeTone, type Tone } from "@/lib/tone";

function nextTone(current: Tone): Tone {
  return current === "normal" ? "poyo" : "normal";
}

export function ToneToggle() {
  const id = useId();
  const tone = useSyncExternalStore<Tone>(subscribeTone, getToneSnapshot, () => "normal");

  const label = useMemo(() => (tone === "poyo" ? "ぽよON" : "ぽよOFF"), [tone]);

  return (
    <button
      type="button"
      aria-label="Toggle poyo copy"
      aria-describedby={`${id}-hint`}
      aria-pressed={tone === "poyo"}
      onClick={() => setTone(nextTone(tone))}
      className="group inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-2 text-sm font-medium text-foreground shadow-sm shadow-shadow/10 transition hover:-translate-y-0.5 hover:bg-background hover:shadow-md hover:shadow-shadow/15 focus:outline-none focus:ring-2 focus:ring-accent/40 sm:px-3"
    >
      <Sparkles className="size-4 text-accent group-hover:text-foreground" aria-hidden="true" />
      <span className="hidden sm:inline">{label}</span>
      <span className="sm:hidden">ぽよ</span>
      <span className="sr-only" id={`${id}-hint`}>
        Switch between normal copy and poyo copy
      </span>
    </button>
  );
}


