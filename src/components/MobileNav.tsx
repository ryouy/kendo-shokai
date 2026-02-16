"use client";

import { useEffect, useId, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";

type Item = { href: string; label: string };

export function MobileNav({
  items,
  title,
}: {
  items: Item[];
  title: string;
}) {
  const id = useId();
  const [open, setOpen] = useState(false);

  const label = useMemo(() => `${title} navigation`, [title]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={label}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-10 items-center justify-center rounded-xl border border-white/15 bg-zinc-900/70 px-3 text-sm font-semibold text-zinc-100 shadow-sm shadow-black/30 backdrop-blur transition hover:bg-zinc-900/85 focus:outline-none focus:ring-2 focus:ring-white/35"
      >
        {open ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
        <span className="ml-2">Menu</span>
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50"
          role="dialog"
          aria-modal="true"
          aria-label={label}
        >
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />
          <div
            id={`${id}-panel`}
            className="absolute left-3 right-3 top-16 overflow-hidden rounded-2xl border border-white/15 bg-zinc-950/85 p-2 text-zinc-100 shadow-xl shadow-black/50 backdrop-blur"
          >
            <div className="flex items-center justify-between gap-3 px-3 py-2">
              <p className="font-display text-sm font-semibold">{title}</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 items-center justify-center rounded-xl border border-white/10 bg-zinc-900/70 px-3 text-xs font-semibold text-zinc-100 transition hover:bg-zinc-900/85 focus:outline-none focus:ring-2 focus:ring-white/35"
              >
                Close
              </button>
            </div>
            <div className="mt-1 grid">
              {items.map((it) => (
                <a
                  key={it.href}
                  href={it.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-semibold text-zinc-100 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  {it.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}


