# UI About Like a TV  
手書きで作成した「テレビ風 UI」のフロントエンド実装です。  
電源ボタンで画面の ON/OFF を切り替え、数字ボタンで画像を切り替えるシンプルな UI を実装しています。

---

## 📁 ディレクトリ構造
tv_ui/
index.html
assets/
css/
style.css
js/
main.js



CodePen で作成したコードをローカルに移行し、  
CSS と JavaScript は `assets` ディレクトリで管理しています。  
画像は GitHub Pages 上のポートフォリオの画像を URL で参照しているため、  
ローカルに画像ファイルを置く必要はありません。

---

## 🎮 機能概要

### 🔌 電源 ON/OFF
- **ON ボタン**  
  - TV 画面に初期画像を表示  
  - ボタンの色が ON 状態に変化  
  - `isPowerOn = true` に切り替え

- **OFF ボタン**  
  - TV 画面を黒に戻す  
  - ボタンの色が OFF 状態に変化  
  - `isPowerPowerOn = false` に切り替え

### 🔢 数字ボタン（1〜9）
- 電源が ON のときのみ動作  
- 押したボタンの番号に対応した画像を表示  
- 画像は GitHub Pages の URL を使用

---

## 🖼 使用している画像
画像はすべて GitHub Pages 上のポートフォリオから参照しています。

```js
const images = [
  'https://hashio251.github.io/assets/images/gallery/flower.jpg',
  'https://hashio251.github.io/assets/images/gallery/fisshing&beer.jpg',
  'https://hashio251.github.io/assets/images/gallery/model.jpg',
  'https://hashio251.github.io/assets/images/gallery/aoi-coffe.jpg',
  'https://hashio251.github.io/assets/images/gallery/flower&butterfly.jpg',
  'https://hashio251.github.io/assets/images/gallery/aoi-cafe.jpg',
  'https://hashio251.github.io/assets/images/front/ai/gallery7.png',
  'https://hashio251.github.io/assets/images/production/production1.png',
  'https://hashio251.github.io/assets/images/production/production2.png'
];
```


---



## 🛠 使用技術
• HTML / CSS / JavaScript（Vanilla）
• GitHub Pages（画像ホスティング）
• 手書きコーディング


---


## 🚀 使い方
1. このリポジトリを cloneか、gitpageにアクセス
2. index.html をブラウザで開く
3. 	◦ ON ボタン → 画面がつく
	◦ OFF ボタン → 画面が消える
	◦ 数字ボタン → 画像が切り替わる


---



## ✏️ 補足
• すべてのコードは手書きで作成
• CodePen の構成をローカル用に最適化
• 画像は外部 URL で管理しているため、ローカルに画像フォルダは不要
• CSS と JS は assets に分離して管理性を向上