import type { Metadata } from "next";
import { Inter, Yuji_Syuku } from "next/font/google";
import "./globals.css";

import Script from "next/script";

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

export const metadata: Metadata = {
  title: "会津大学剣道部",
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
    <html lang="ja" suppressHydrationWarning>
      <Script id="theme-init" strategy="beforeInteractive">
        {`
(() => {
  try {
    const key = "aukc-theme";
    const stored = localStorage.getItem(key);
    const theme = stored === "kendo" || stored === "stylish" ? stored : "stylish";
    document.documentElement.dataset.theme = theme;
  } catch (_) {
    document.documentElement.dataset.theme = "stylish";
  }
})();
        `.trim()}
      </Script>
      <body className={`${inter.variable} ${yuji.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
