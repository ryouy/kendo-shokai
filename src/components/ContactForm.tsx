"use client";

import { useMemo, useState } from "react";
import { Mail, Send } from "lucide-react";

const DEFAULT_TO = "kendo_uoa@example.com";

function buildMailto(to: string, subject: string, body: string) {
  const params = new URLSearchParams();
  params.set("subject", subject);
  params.set("body", body);
  return `mailto:${to}?${params.toString()}`;
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const subject = "【会津大学剣道部】入部・見学のお問い合わせ";
  const mailtoHref = useMemo(() => {
    const body = [
      "お名前:",
      name || "(未入力)",
      "",
      "メールアドレス:",
      email || "(未入力)",
      "",
      "本文:",
      message || "(未入力)",
      "",
      "※このフォームはメールアプリを起動して送信します。",
    ].join("\n");
    return buildMailto(DEFAULT_TO, subject, body);
  }, [name, email, message]);

  return (
    <form
      className="rounded-2xl border border-border bg-card p-5 shadow-sm shadow-shadow/10"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailtoHref;
      }}
      aria-label="お問い合わせフォーム"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Mail className="size-5 text-accent" aria-hidden="true" />
          <p className="font-display text-lg font-semibold tracking-tight">
            お問い合わせ
          </p>
        </div>
        <a
          className="text-xs text-muted underline underline-offset-4 hover:text-foreground"
          href={`mailto:${DEFAULT_TO}`}
        >
          メールで直接連絡
        </a>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1 text-sm">
          <span className="text-muted">お名前</span>
          <input
            className="h-11 rounded-xl border border-border bg-background px-3 outline-none focus:ring-2 focus:ring-accent/35"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="例）山田 太郎"
            autoComplete="name"
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="text-muted">メールアドレス</span>
          <input
            className="h-11 rounded-xl border border-border bg-background px-3 outline-none focus:ring-2 focus:ring-accent/35"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="例）you@example.com"
            type="email"
            autoComplete="email"
          />
        </label>
        <label className="grid gap-1 text-sm sm:col-span-2">
          <span className="text-muted">メッセージ</span>
          <textarea
            className="min-h-32 resize-y rounded-xl border border-border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-accent/35"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="例）初心者ですが見学できますか？"
          />
        </label>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-accent px-4 text-sm font-semibold text-white shadow-sm shadow-shadow/15 transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent/40"
        >
          <Send className="size-4" aria-hidden="true" />
          メール作成して送る
        </button>
        <p className="text-xs text-muted">
          ※送信はサーバーに保存されず、メールアプリが開きます（宛先は仮：{DEFAULT_TO}
          ）。
        </p>
      </div>
    </form>
  );
}


