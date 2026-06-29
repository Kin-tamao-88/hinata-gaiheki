# 法人売却センター LP - プロジェクトルール

## デザイン原則（必ず守ること）

### カラー
- メインテキスト：#1e3a5f
- アクセント赤：#b03023
- ゴールド：#9a7a3a（#b8985aは使わない）
- カード背景：#ffffff または #fafafa のみ
- グレー系背景・グレー系テキスト（text-gray-*）禁止

### Shadow・Border
- box-shadow禁止
- 境界が必要な場合は border: 1px solid #e2e8f0 で代替

### Typography
- 見出し：font-weight 900（black）または 800（extrabold）
- 本文：font-weight 400（regular）のみ
- 中途半端なweight（500・600・700）は見出し以外に使わない

### 角丸
- rounded-lg（8px）以下に抑える
- rounded-2xl以上禁止

### その他
- Tailwindのデフォルトutilityをそのまま使わない
- 必ず上記カラー・ウェイトに上書きする
- shadow-sm / shadow-md などのデフォルトshadowクラスも禁止

---

## カラーパレット（全セクション共通）

| 用途 | カラーコード |
|---|---|
| 紺（メイン） | #1e3a5f |
| 赤（アクセント・CTA） | #b03023 |
| ゴールド | #9a7a3a |
| 背景白 | #ffffff |
| 背景オフホワイト | #fafafa |
| ゴールド背景（薄） | #fff8ee |
| ゴールドボーダー | #d4af37 |

---

## アイコン素材（GitHub raw URL）

ベースURL: `https://raw.githubusercontent.com/Kin-tamao-88/hojin-assets01/main/`

### Painセクション（紺 #1e3a5f）
- 維持費だけ掛かる：`icon-pain-cost.png`
- 赤字続き：`icon-pain-decline.png`
- 身動きが取れない：`icon-pain-restricted.png`
- 解散・清算が面倒：`icon-pain-procedure.png`

### 比較表・解散する場合（グレー #64748b）
- 清算費用が発生：`icon-compare-cost.png`
- 滞納税金の整理：`icon-compare-tax.png`
- 会社価値が消滅：`icon-compare-value-loss.png`

### 比較表・法人売却の場合（ゴールド #b8985a）
- 会社価値を無料診断：`icon-compare-diagnosis.png`
- 現金化できる可能性：`icon-compare-cash.png`
- 売却益が得られる可能性：`icon-compare-profit.png`

### セルフチェックセクション（ゴールド #b8985a）
- 法人口座を持っている：`icon-check-bank.png`
- 現在も法人が存続している：`icon-check-active.png`
- 維持費が負担になっている：`icon-check-cost.png`
- 休眠状態になっている：`icon-check-dormant.png`
- 少しでも現金化したい：`icon-check-cash.png`

---

## 技術スタック
- React + TypeScript + Vite + Tailwind CSS v3
- アイコンライブラリ：lucide-react

## デプロイ
- GitHub：Kin-tamao-88/hojin-urikae（main）
- Vercel：https://hojin-urikae.vercel.app
- mainへのpushで自動デプロイ
