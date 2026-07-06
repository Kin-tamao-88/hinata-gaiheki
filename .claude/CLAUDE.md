# CLAUDE.md — hinata-gaiheki（レストレーション 外壁塗装LP）

## プロジェクト概要

- **会社名**: レストレーション（住宅総合メンテナンス）
- **サービス**: 外壁塗装・住宅メンテナンス（山梨県密着）
- **目的**: 問い合わせ獲得（無料お見積り・LINE相談・電話）
- **リポジトリ**: Kin-tamao-88/hinata-gaiheki（main）
- **スタック**: React + TypeScript + Tailwind CSS v3 + Vite
- **アイコン**: lucide-react

---

## 制作フロー

① ChatGPT → マーケティング設計・コピー・完成イメージ作成  
② **Claude（チャット）** → CC向け実装プロンプト作成  
③ **Claude Code** → React / TypeScript / Tailwind 実装  
④ 目視確認 → 問題があればClaudeがdiff形式の修正指示を作成  
⑤ Claude Code → 修正適用  
⑥ git push → Vercel自動デプロイ  

---

## ブランドカラー（モックアップから実測値）

| 用途 | カラーコード | Tailwindトークン |
|---|---|---|
| 紺（見出し・ロゴ・バッジ背景） | `#102A4A` | `navy` |
| オレンジ（CTA・アンダーライン・アクセント） | `#FC5900` | `brandorange` |
| 赤（実績数字の大きい数字のみ） | `#E92523` | `accentred` |
| 黄（実績帯チップ背景のみ） | `#FCE283` | `chip` |
| 本文 | `#1a1a1a` | `ink` |
| 補足文字 | `#666666` | `ink-muted` |
| 背景クリーム | `#F5F2EC` | `cream` |

---

## セクション構成（実装順）

1. **Hero** ✅ 実装済み（暫定写真あり、本番写真差し替え要）
   - Header: ロゴ / 電話番号 / オレンジCTA
   - Hero: バッジ・見出し（紺+オレンジ）・本文・写真（右42%出血）
   - 実績帯: 地域密着15年 / 施工実績1,200件以上 / 追加費用0円 / アフターケア3年間
2. **Pain** 🔲 スタブのみ
   - 業者選びの不安5項目（横線区切り）
3. **Strength（選ばれる3つの理由）** 🔲 スタブのみ
   - 01地域密着だから迅速対応 / 02現地調査から施工まで一貫対応 / 03明朗安心の適正価格
4. **CaseStudy（施工事例）** 🔲 スタブのみ
   - Case01〜03: Before/After写真 + お客様の声 + コストダウン実績
5. **Price（適正価格へのこだわり）** 🔲 コンポーネント未作成
6. **Message（代表メッセージ）** 🔲 コンポーネント未作成
7. **FAQ** 🔲 中身をJCAOから差し替え要
8. **FinalCta（CTA）** 🔲 中身をJCAOから差し替え要

※対応エリアはクライアント確認待ち → 実装不要

---

## C-2 デザインシステム（LP全体の世界観基準）

> 参照元: `C:\Users\Mr.FX\Downloads\実績モック.png`（C-2 単品モック）
> 
> これは実績帯だけの参考ではなく、**LP全セクションに適用する世界観・質感・装飾・情報強弱の基準**。
> 「雰囲気を似せる」のではなく、以下の各要素を再現すること。

---

### 背景

- 完全な白背景は禁止。全セクションに質感を持たせる
- ネイビー帯のセクション: `bg-navy` + `brush-cream-texture`（`opacity-[0.08]`前後、`mix-blend-overlay`）でコンクリート感
- クリーム帯のセクション: `bg-cream` + `brush-cream-texture`（`opacity-[0.06]`前後）で塗装テクスチャ
- セクション境界にブラシストロークを挟む（`brush-navy` または `brush-orange-short` をフルワイドで配置）

### 見出し

- ウェイト: `font-black`（900）必須。`font-bold`（700）は本文・キャプションのみ
- サイズ: セクション見出しは `text-[36px] md:text-[52px]` 以上。現状より1段階大きく
- 色: ネイビー背景 → 白文字。クリーム背景 → ネイビー文字
- キャッチコピーは2行に分け、1行目よりも2行目を大きくする（視線誘導）
- 「力強さ」が優先。字間 `tracking-tight`、行間 `leading-tight`

### 数字（実績・年数・価格）

- 数値本体: `text-[64px] md:text-[96px] font-black text-brandorange`（オレンジが主役）
- 単位: `text-[20px] md:text-[24px] font-bold text-white`（ネイビー背景時）または `text-navy`
- 数値の下に黄色アンダーライン: `brush-orange-short`（`h-[4px]`、`opacity-80`）または `bg-chip h-[3px]`
- 数値の上に小さいアイコン + カテゴリラベル（`text-[12px] font-semibold`）

### アクセント装飾

毎セクションに以下のいずれかを必ず入れる:

| 種類 | 実装方法 | 用途 |
|---|---|---|
| 養生テープ帯 | `bg-chip` + `font-bold text-navy` の斜め or 水平帯 | セクションキャッチ・ラベル |
| ブラシストローク | `.brush-navy` / `.brush-orange-short` / `.brush-orange-long` | 境界・数値背景・下線 |
| ペイントスプラッター | `brush-cream-texture` + `mix-blend-multiply` | 背景テクスチャ全般 |
| オレンジ下線 | `.brush-orange-long` `h-[8px]` | 見出しアクセントライン |

養生テープ帯の実装例:
```tsx
<div className="inline-block bg-chip px-4 py-1.5 -rotate-1 font-bold text-navy text-[14px] tracking-wide">
  選ばれ続ける理由は
</div>
```

### カード・ボックス

- 白い影付きカードは禁止（`shadow-*` 禁止）
- 背景に質感を持たせる: `bg-white/90` + `border border-gray-300/60` + テクスチャオーバーレイ
- ラフな枠感: `border-2 border-navy/20` + 内側に `brush-cream-texture` を `opacity-[0.12]`
- コンクリート調カードの実装例:
```tsx
<div className="relative overflow-hidden bg-white border border-gray-300/70 p-6">
  <div aria-hidden="true" className="absolute inset-0 brush-cream-texture opacity-[0.10] mix-blend-multiply pointer-events-none" />
  <div className="relative z-10">{/* 内容 */}</div>
</div>
```

### アイコン

- 線画アイコン単体は弱い。必ず以下のいずれかと組み合わせる:
  - ネイビー小帯（`bg-navy` 角丸なし `p-2`）の中に白アイコン
  - オレンジ下線 + アイコン上部配置
  - 養生テープ帯と並列配置
- サイズ: `h-6 w-6 md:h-8 md:w-8`（現在より一回り大きく）
- `strokeWidth={1.5}` 統一

### 余白・密度

- 現場ポスター密度: セクション縦余白 `py-12 md:py-20`（`py-16 md:py-24`以上は使わない）
- 要素間余白 `gap-4 md:gap-6`（スカスカ禁止）
- 情報量は多くするが読みやすく整理: グリッドで区切り、ラベル/数値/キャプションの3層構造を守る

### カラー運用ルール

```
■ 基本3色
  ネイビー  #102A4A  → 背景・見出し・ボーダー
  オレンジ  #FC5900  → 数値・CTA・アクセントライン（主役）
  ホワイト  #FFFFFF  → ネイビー背景上のテキスト

■ サポート
  クリーム  #F5F2EC  → 背景（白の代替）
  黄        #FCE283  → 養生テープ帯・アクセントのみ
  赤        #E92523  → 数字の強調（最大の数値1カ所のみ使用可）
  
■ 禁止
  グレー背景（#f5f5f5 等）の単独使用
  青系グラデーション
  半透明ガラス（backdrop-blur）
```

### 使用可能な CSS ユーティリティ一覧

| クラス | 内容 |
|---|---|
| `.brush-navy` | 全幅ネイビーブラシストローク |
| `.brush-orange-long` | 全幅オレンジブラシ下線 |
| `.brush-orange-short` | 短いオレンジブラシ（数値背景） |
| `.brush-cream-texture` | クリーム塗装テクスチャ |

全て `mix-blend-multiply` + `opacity-*` で強度調整すること。

---

## 品質基準

**目標**: 士業サイト / M&Aサイト / 大手企業LP と並ぶクオリティ

**禁止（AI感・SaaS感が出るもの）**:
- チップUI・ピル型ラベル・バッジ大量配置
- 影付きカード（box-shadow原則禁止）
- ガラス風UI・過度なグラデーション・ぼかし円・グロー効果
- 丸背景アイコンの多用・意味のない装飾アイコン
- 参考画像にないカード / アイコン / ロゴ / バッジの追加

---

## コーディングルール

### 絶対に守ること

- `style={{}}` インラインstyle **禁止** → 必ずTailwindクラスで実装
- `!important` **禁止**
- box-shadow **原則禁止**（使う場合も極薄）
- 未使用import **禁止**
- TypeScriptエラー **禁止**
- JSXタグ省略・途中省略（「…」「以下同様」）**禁止**

### タイポグラフィ

- 本文16px未満 **禁止**（11〜13pxの本文は絶対禁止）
- 薄いグレー本文 **禁止**（補足文字でも`#666`程度まで）
- 優先順位: 文字サイズ → font-weight → line-height → 文字色 → 余白

### 修正範囲

- 指示された箇所以外は変更しない
- コピー・色・レイアウト・セクション構成を勝手に変更しない
- 「少し大きく」は見た目で変化が分かるレベルに（1〜2pxだけの変更禁止）

---

## レスポンシブ方針

- モバイルファースト（Tailwindの`md:`プレフィックスでPC拡張）
- **SPはPCの単純な縦積みではない** → 情報順序・可読性・CV導線を最優先で再設計
- SPで本文幅を犠牲にしてアイコンを残さない
- 1文字だけ次行に送らない
- Hero写真はSPで背景画像化（Design Bible §5準拠）

---

## ファイル構成

```
src/
  components/
    sections/       ← 各セクションコンポーネント
    ui/             ← 共通UIパーツ
    Footer.tsx
  assets/
    hero/           ← hero-worker.png（本番写真）
    icons/          ← lucide-react優先、画像アイコンは最小限
```

---

## CCへの指示原則

1. 実装前にプロジェクト構造・対象ファイルの存在を確認する
2. 推測・記憶で作業しない。必ず現在のファイルを読んでから編集する
3. 複数ファイルにまたがる変更はdiff/search-replace形式で指示する
4. 実装後に `npm run build` でエラー0を確認してから完了報告する
5. 完了報告は「編集ファイル / Build結果 / デプロイ先URL」のみ簡潔に

---

## 注意事項（過去の失敗から）

- **クロスプロジェクト汚染リスク**: 別LPのフォルダをコピーして作ったため、JCAOコンテンツが混入していた（解決済み）
- **インラインstyle**: SP対応時に`!important`でも上書きできず大規模修正が必要になった事例あり
- **CCの暴走**: 指示外のファイルを勝手に編集するケースあり → Escで中断 → `git status` → `git checkout [file]`

---

## CC承認設定

作業中の yes/no 確認を最小限にする。以下の操作は確認なしで実行してよい。

- ファイルの読み込み・内容確認
- 指示されたファイルの編集・上書き
- `npm run build` / `npm run lint` / `npm run dev` の実行
- `git status` / `git diff` の実行

以下は必ず確認を取る:

- 指示されていないファイルの編集
- ファイルの削除
- `git add` / `git commit` / `git push`
- 新規ファイル・コンポーネントの作成（指示にない場合）

---

## アセット構造

```
src/assets/
  hero/
    hero-worker.png        ← Hero写真
  reason/
    reason-01-vehicle.png  ← Strength 01（車両・地域密着）
    reason-02-inspection.png ← Strength 02（現地調査・一貫対応）
    reason-03-estimate.png ← Strength 03（お見積り・適正価格）
  background/
    bg-paint-subtle.png    ← Pain・FAQ・代表メッセージ共通背景テクスチャ
  president/
    president-hinata.png   ← 代表メッセージ人物写真（未追加）
  case/
    case-before-01.png     ← 施工事例 Before写真（未追加）
    case-after-01.png      ← 施工事例 After写真（未追加）
```
