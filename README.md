## 会津大学剣道部 - 紹介Webページ

会津大学剣道部の活動紹介・部員募集・SNS導線のための 1 ページ Web サイトです。

- **武士道モード**: 黒/紺/白基調＋滲みテクスチャ＋筆文字フォント（武道らしい雰囲気）
- **ゆるゆるモード**: パステル＋丸文字＋ふわっとした影＋のんびり構成（別サイト級に変化）

右上のトグルで切り替えできます（`localStorage` に保存）。

## Getting Started

開発サーバーを起動:

```bash
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。

## フォルダ構成（抜粋）

```
src/
  app/
    layout.tsx        # meta / theme init
    page.tsx          # 1ページ本体（Hero動画/YouTube/各セクション）
    globals.css       # テーマ変数（武士道/ゆるゆる）
  components/
    ThemeToggle.tsx   # モード切替
    YouTubeGallery.tsx# YouTube埋め込み切替（サムネ→iframe）
    ContactForm.tsx   # 見学/問い合わせ（mailto）
public/
  favi.png            # favicon（追加してください）
  hero/
    hero-mobile.svg   # モバイル静止画（ポスター）
    keiko.mp4         # Hero背景動画（差し替え対象）
  gallery/            # 写真ギャラリー（いまはSVGプレースホルダー）
  textures/
    sumi-noise.svg    # 武士道背景テクスチャ
    chill-doodles.svg # ゆるゆる背景テクスチャ
```

## 主な編集ポイント

- **ページ本体**: `src/app/page.tsx`
- **英語ページ**: `src/app/en/page.tsx`（`/en`）
- **メタ情報（TITLE/DESCRIPTION）**: `src/app/layout.tsx`
- **テーマ（色/フォント/テクスチャ）**: `src/app/globals.css`
- **モード切替UI**: `src/components/ThemeToggle.tsx`
- **言語切替UI**: `src/components/LanguageToggle.tsx`
- **活動日時・場所（共通定義）**: `src/lib/activity.ts`
- **YouTubeセクション**: `src/components/YouTubeGallery.tsx`
- **問い合わせフォーム**: `src/components/ContactForm.tsx`
- **画像（SVGプレースホルダー）**:
  - `public/hero/hero-kendo.svg`
  - `public/gallery/*.svg`
  - `public/textures/sumi-noise.svg`

## 画像・文言の差し替え

- **ギャラリー**: `public/gallery/*.svg` を実写真に差し替え可能（`next/image` で最適化）。
- **連絡先メール**: `src/components/ContactForm.tsx` 内の `DEFAULT_TO` を実際の宛先に変更してください。

## ファビコン（favicon）

- `public/favi.png` を配置してください。
- `src/app/layout.tsx` で `<link rel="icon" ...>` と `apple-touch-icon` を設定済みです。

## Hero動画の差し替え方法

- 動画ファイルを `public/hero/keiko.mp4` に置き換えます（推奨: 5〜8秒、H.264、音声なし or muted再生前提）。
- `<video>` は PC/タブレットで **autoplay / muted / loop / playsInline** で再生され、モバイルは軽量化のため静止画（`public/hero/hero-mobile.svg`）になります。

## YouTubeリンク（ID）の変更方法

`src/components/YouTubeGallery.tsx` の `DEFAULT_VIDEOS` を、各動画の **YouTube ID** に差し替えてください。

例: `https://www.youtube.com/watch?v=XXXXXXXXXXX` の `XXXXXXXXXXX` 部分が ID です。

## 英語版（留学生向け）の切り替え

- **日本語**: `/`
- **English**: `/en`

ヘッダーの地球アイコンのボタンで切り替えできます（選択は `localStorage` に保存され、`<html lang>` も更新します）。

## Build

```bash
npm run build
npm run start
```
