"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { Play } from "lucide-react";
import { getToneSnapshot, subscribeTone, type Tone } from "@/lib/tone";

type VideoItem = {
  id: string; // YouTube video id
  title: string;
  label: string;
};

type YouTubeCopy = {
  description: string;
  thumbAltSuffix: string;
  switchHint: string;
  footerHint: string;
};

function copy(lang: "ja" | "en", tone: Tone): YouTubeCopy {
  const isPoyo = tone === "poyo";
  if (lang === "en") {
    return {
      description: isPoyo
        ? "Feel the air… the timing… the tiny *bonk*. Very poyo."
        : "Feel the intensity, maai (distance), and the atmosphere through video.",
      thumbAltSuffix: "thumbnail",
      switchHint: "",
      footerHint: "",
    };
  }

  return {
    description: isPoyo
      ? "稽古の空気感・間合い・打突の迫力を、ぽよっと映像で体感してぽよ。"
      : "稽古の空気感・間合い・打突の迫力を、映像で体感してください。",
    thumbAltSuffix: "のサムネイル",
    switchHint: "",
    footerHint: "",
  };
}

const DEFAULT_VIDEOS: VideoItem[] = [
  // id には YouTube の「動画ID」（watch?v= の後ろ）を入れてください
  { id: "qYfj-Hn77BM", title: "稽古ダイジェスト", label: "稽古ダイジェスト" },
  { id: "yr9A7JnoYiY", title: "地稽古映像", label: "地稽古映像" },
  { id: "C-RhVubGblA", title: "初心者向け紹介動画（１本集）", label: "初心者向け紹介動画（１本集）" },
];

export function YouTubeGallery({
  videos = DEFAULT_VIDEOS,
  lang = "ja",
}: {
  videos?: VideoItem[];
  lang?: "ja" | "en";
}) {
  // Subscribe so poyo toggle live-updates the copy.
  const tone = useSyncExternalStore<Tone>(subscribeTone, getToneSnapshot, () => "normal");
  const copyText = copy(lang, tone);
  const [active, setActive] = useState(videos[0]?.id ?? DEFAULT_VIDEOS[0].id);
  const activeItem = useMemo(
    () => videos.find((v) => v.id === active) ?? videos[0],
    [active, videos],
  );

  const embedSrc = useMemo(() => {
    const params = new URLSearchParams({
      rel: "0",
      modestbranding: "1",
      playsinline: "1",
    });
    return `https://www.youtube-nocookie.com/embed/${activeItem.id}?${params.toString()}`;
  }, [activeItem.id]);

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="lg:col-span-3">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm shadow-shadow/10">
          <div className="aspect-video w-full bg-background">
            <iframe
              className="h-full w-full"
              src={embedSrc}
              title={activeItem.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="border-t border-border p-4">
            <p className="font-display text-base font-semibold">
              {activeItem.label}
            </p>
            <p className="mt-1 text-sm text-muted">
              {copyText.description}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-3 lg:col-span-2">
        {videos.map((v) => {
          const isActive = v.id === active;
          const thumb = `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`;
          return (
            <button
              key={`${v.id}-${v.label}`}
              type="button"
              onClick={() => setActive(v.id)}
              className={[
                "group flex items-center gap-3 rounded-2xl border bg-card p-3 text-left shadow-sm shadow-shadow/10 transition focus:outline-none focus:ring-2 focus:ring-accent/40",
                isActive
                  ? "border-accent/60"
                  : "border-border hover:-translate-y-0.5 hover:shadow-md hover:shadow-shadow/15",
              ].join(" ")}
              aria-pressed={isActive}
            >
              <div className="relative overflow-hidden rounded-xl border border-border bg-background">
                {/* Use <img> to avoid configuring next/image remote patterns for thumbnails */}
                <img
                  src={thumb}
                  alt={`${v.label} ${copyText.thumbAltSuffix}`}
                  width={240}
                  height={135}
                  loading="lazy"
                  className="h-[72px] w-[128px] object-cover transition duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="grid size-9 place-items-center rounded-full bg-background/80 text-foreground backdrop-blur">
                    <Play className="size-4" aria-hidden="true" />
                  </span>
                </div>
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-foreground">
                  {v.label}
                </p>
                <p className="mt-1 line-clamp-2 text-xs text-muted">
                  {copyText.switchHint}
                </p>
              </div>
            </button>
          );
        })}
        <p className="text-xs text-muted">
          {copyText.footerHint}
        </p>
      </div>
    </div>
  );
}


