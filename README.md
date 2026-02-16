## 会津大学剣道部 - 紹介Webページ

会津大学剣道部の活動紹介・部員募集・SNS導線のための 1 ページ Web サイトです。

- **オシャレモード**: クリアなUI（ライト寄り、モダン）
- **剣道らしさ重視モード**: 黒/紺/白を基調＋滲みテクスチャ＋筆文字風フォント

右上のトグルで切り替えできます（`localStorage` に保存）。

## Getting Started

開発サーバーを起動:

```bash
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。

## 主な編集ポイント

- **ページ本体**: `src/app/page.tsx`
- **メタ情報（TITLE/DESCRIPTION）**: `src/app/layout.tsx`
- **テーマ（色/フォント/テクスチャ）**: `src/app/globals.css`
- **モード切替UI**: `src/components/ThemeToggle.tsx`
- **問い合わせフォーム**: `src/components/ContactForm.tsx`
- **画像（SVGプレースホルダー）**:
  - `public/hero/hero-kendo.svg`
  - `public/gallery/*.svg`
  - `public/textures/sumi-noise.svg`

## 画像・文言の差し替え

- **ギャラリー**: `public/gallery/*.svg` を実写真に差し替え可能（`next/image` で最適化）。
- **連絡先メール**: `src/components/ContactForm.tsx` 内の `DEFAULT_TO` を実際の宛先に変更してください。

## Build

```bash
npm run build
npm run start
```
