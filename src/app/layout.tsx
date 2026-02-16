import type { Metadata } from "next";
import { Inter, M_PLUS_Rounded_1c, Yuji_Syuku } from "next/font/google";
import "./globals.css";

import Script from "next/script";

const isGitHubPages =
  process.env.GITHUB_PAGES === "true" || process.env.GITHUB_ACTIONS === "true";
const basePath = isGitHubPages ? "/kendo-shokai" : "";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const yuji = Yuji_Syuku({
  variable: "--font-yuji",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const rounded = M_PLUS_Rounded_1c({
  variable: "--font-rounded",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "会津大学剣道部 - Aizu University Kendo Club",
  description:
    "会津大学の剣道部公式紹介ページ。活動内容・部員紹介・SNSリンクなど。",
  openGraph: {
    title: "会津大学剣道部 - Aizu University Kendo Club",
    description:
      "会津大学の剣道部公式紹介ページ。活動内容・部員紹介・SNSリンクなど。",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "会津大学剣道部 - Aizu University Kendo Club",
    description:
      "会津大学の剣道部公式紹介ページ。活動内容・部員紹介・SNSリンクなど。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" data-theme="chill" suppressHydrationWarning>
      <head>
        <link rel="icon" href={`${basePath}/favi.png`} type="image/png" />
        <link rel="apple-touch-icon" href={`${basePath}/favi.png`} />
        <Script id="lang-init" strategy="beforeInteractive">
          {`
(() => {
  try {
    const key = "aukc-lang";
    const stored = localStorage.getItem(key);
    const p = location.pathname;
    const byPath =
      p === "/en" || p.endsWith("/en") || p.includes("/en/") ? "en" : "ja";
    const lang = stored === "en" || stored === "ja" ? stored : byPath;
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;
  } catch (_) {
    document.documentElement.lang = "ja";
    document.documentElement.dataset.lang = "ja";
  }
})();
          `.trim()}
        </Script>
        <Script id="tone-init" strategy="beforeInteractive">
          {`
(() => {
  try {
    const key = "aukc-tone";
    const stored = localStorage.getItem(key);
    const tone = stored === "poyo" || stored === "normal" ? stored : "normal";
    document.documentElement.dataset.tone = tone;
  } catch (_) {
    document.documentElement.dataset.tone = "normal";
  }
})();
          `.trim()}
        </Script>
      </head>
      <body className={`${inter.variable} ${yuji.variable} ${rounded.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
