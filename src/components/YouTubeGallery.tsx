"use client";

import { useMemo, useState } from "react";
import { Play } from "lucide-react";

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

const COPY_JA: YouTubeCopy = {
  description: "稽古の空気感・間合い・打突の迫力を、映像で体感してください。",
  thumbAltSuffix: "のサムネイル",
  switchHint: "クリックで埋め込みを切り替え",
  footerHint: "※ YouTube ID は `src/components/YouTubeGallery.tsx` で差し替えできます。",
};

const COPY_EN: YouTubeCopy = {
  description: "Feel the intensity, maai (distance), and the atmosphere through video.",
  thumbAltSuffix: "thumbnail",
  switchHint: "Click to switch the embed",
  footerHint: "*You can change YouTube IDs in `src/components/YouTubeGallery.tsx`.",
};

const DEFAULT_VIDEOS: VideoItem[] = [
  { id: "dQw4w9WgXcQ", title: "稽古ダイジェスト", label: "稽古ダイジェスト" },
  { id: "dQw4w9WgXcQ", title: "大会映像", label: "大会映像" },
  { id: "dQw4w9WgXcQ", title: "初心者向け紹介動画", label: "初心者向け紹介動画" },
];

export function YouTubeGallery({
  videos = DEFAULT_VIDEOS,
  lang = "ja",
}: {
  videos?: VideoItem[];
  lang?: "ja" | "en";
}) {
  const copy = lang === "en" ? COPY_EN : COPY_JA;
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
              {copy.description}
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
                  alt={`${v.label} ${copy.thumbAltSuffix}`}
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
                  {copy.switchHint}
                </p>
              </div>
            </button>
          );
        })}
        <p className="text-xs text-muted">
          {copy.footerHint}
        </p>
      </div>
    </div>
  );
}


