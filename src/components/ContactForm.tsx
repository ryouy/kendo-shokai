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

type ContactCopy = {
  ariaLabel: string;
  title: string;
  directMail: string;
  name: string;
  email: string;
  message: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  submit: string;
  notePrefix: string;
  subject: string;
  mailBodyLabels: {
    name: string;
    email: string;
    message: string;
    empty: string;
    footerNote: string;
  };
};

const COPY_JA: ContactCopy = {
  ariaLabel: "お問い合わせフォーム",
  title: "お問い合わせ",
  directMail: "メールで直接連絡",
  name: "お名前",
  email: "メールアドレス",
  message: "メッセージ",
  namePlaceholder: "例）山田 太郎",
  emailPlaceholder: "例）you@example.com",
  messagePlaceholder: "例）初心者ですが見学できますか？",
  submit: "メール作成して送る",
  notePrefix:
    "※送信はサーバーに保存されず、メールアプリが開きます（宛先は仮：",
  subject: "【会津大学剣道部】入部・見学のお問い合わせ",
  mailBodyLabels: {
    name: "お名前:",
    email: "メールアドレス:",
    message: "本文:",
    empty: "(未入力)",
    footerNote: "※このフォームはメールアプリを起動して送信します。",
  },
};

const COPY_EN: ContactCopy = {
  ariaLabel: "Contact form",
  title: "Contact",
  directMail: "Email directly",
  name: "Name",
  email: "Email",
  message: "Message",
  namePlaceholder: "e.g. Taro Yamada",
  emailPlaceholder: "e.g. you@example.com",
  messagePlaceholder: "e.g. Can beginners visit a practice?",
  submit: "Compose email",
  notePrefix:
    "*This does not submit to a server. It opens your email app (temporary address: ",
  subject: "[Aizu University Kendo Club] Joining / Visit inquiry",
  mailBodyLabels: {
    name: "Name:",
    email: "Email:",
    message: "Message:",
    empty: "(empty)",
    footerNote: "*This form opens your email app to send the message.",
  },
};

export function ContactForm({ lang = "ja" }: { lang?: "ja" | "en" }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const copy = lang === "en" ? COPY_EN : COPY_JA;
  const subject = copy.subject;
  const mailtoHref = useMemo(() => {
    const body = [
      copy.mailBodyLabels.name,
      name || copy.mailBodyLabels.empty,
      "",
      copy.mailBodyLabels.email,
      email || copy.mailBodyLabels.empty,
      "",
      copy.mailBodyLabels.message,
      message || copy.mailBodyLabels.empty,
      "",
      copy.mailBodyLabels.footerNote,
    ].join("\n");
    return buildMailto(DEFAULT_TO, subject, body);
  }, [copy, name, email, message, subject]);

  return (
    <form
      className="rounded-2xl border border-border bg-card p-5 shadow-sm shadow-shadow/10"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailtoHref;
      }}
      aria-label={copy.ariaLabel}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Mail className="size-5 text-accent" aria-hidden="true" />
          <p className="font-display text-lg font-semibold tracking-tight">
            {copy.title}
          </p>
        </div>
        <a
          className="text-xs text-muted underline underline-offset-4 hover:text-foreground"
          href={`mailto:${DEFAULT_TO}`}
        >
          {copy.directMail}
        </a>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1 text-sm">
          <span className="text-muted">{copy.name}</span>
          <input
            className="h-11 rounded-xl border border-border bg-background px-3 outline-none focus:ring-2 focus:ring-accent/35"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={copy.namePlaceholder}
            autoComplete="name"
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="text-muted">{copy.email}</span>
          <input
            className="h-11 rounded-xl border border-border bg-background px-3 outline-none focus:ring-2 focus:ring-accent/35"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={copy.emailPlaceholder}
            type="email"
            autoComplete="email"
          />
        </label>
        <label className="grid gap-1 text-sm sm:col-span-2">
          <span className="text-muted">{copy.message}</span>
          <textarea
            className="min-h-32 resize-y rounded-xl border border-border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-accent/35"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={copy.messagePlaceholder}
          />
        </label>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-accent px-4 text-sm font-semibold text-white shadow-sm shadow-shadow/15 transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent/40"
        >
          <Send className="size-4" aria-hidden="true" />
          {copy.submit}
        </button>
        <p className="text-xs text-muted">
          {copy.notePrefix}
          {DEFAULT_TO}
          {lang === "en" ? ")." : "）。"}
        </p>
      </div>
    </form>
  );
}


