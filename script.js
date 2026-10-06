
// ==============================
// おみくじデータ
// ==============================

const fortunes = [

    {
        result: "超大吉",
        message: "今日はまさに絶好調。思い切った行動が幸運を呼びます。",
        love: "最高の出会いがあるかも。",
        work: "才能が一気に開花する日。",
        money: "思わぬ臨時収入の予感。",
        health: "絶好調！その勢いを楽しもう。",
        color: "ゴールド",
        item: "お気に入りのアクセサリー"
    },

    {
        result: "大大吉",
        message: "めったに出ない大吉中の大吉。今日は特別な一日です。",
        love: "勇気を出すと大きな進展がありそう。",
        work: "周囲から高く評価されそう。",
        money: "欲しかったものが手に入るかも。",
        health: "元気いっぱい！",
        color: "レッド",
        item: "腕時計"
    },

    {
        result: "大吉",
        message: "すべてが良い方向へ進みそう。積極的に動こう。",
        love: "笑顔が最大の武器。",
        work: "努力が結果につながる日。",
        money: "お金の流れが良好。",
        health: "体調ばっちり。",
        color: "ホワイト",
        item: "スマートフォン"
    },

    {
        result: "中吉",
        message: "良い流れが来ています。焦らず進んでいこう。",
        love: "自然体でいることが幸運のカギ。",
        work: "コツコツ努力すると評価されそう。",
        money: "計画的に使えば◎",
        health: "規則正しい生活を。",
        color: "ブルー",
        item: "イヤホン"
    },

    {
        result: "小吉",
        message: "小さな幸せがたくさん見つかる一日。",
        love: "身近な人を大切に。",
        work: "一つずつ丁寧に。",
        money: "無駄遣いには注意。",
        health: "少し休憩しよう。",
        color: "ピンク",
        item: "お菓子"
    },

    {
        result: "吉",
        message: "落ち着いて行動すれば、良い一日になりそう。",
        love: "笑顔が魅力を引き出します。",
        work: "周囲との協力がカギ。",
        money: "大きな出費は控えめに。",
        health: "睡眠を大切に。",
        color: "グリーン",
        item: "水筒"
    },

    {
        result: "半吉",
        message: "運気は上向き。焦らず少しずつ進もう。",
        love: "ゆっくり距離を縮めよう。",
        work: "新しいことに挑戦すると◎",
        money: "節約すると運気アップ。",
        health: "軽い運動がおすすめ。",
        color: "オレンジ",
        item: "スニーカー"
    },

    {
        result: "末吉",
        message: "今は準備の時期。チャンスはもうすぐ。",
        love: "焦らないことが大切。",
        work: "勉強が未来につながる。",
        money: "財布のひもを少し固く。",
        health: "無理をしないように。",
        color: "ネイビー",
        item: "ノート"
    },

    {
        result: "末大吉",
        message: "最後には大きな幸運が待っています。",
        love: "時間をかけて良い関係に。",
        work: "努力が後から実を結びます。",
        money: "今は貯める時期。",
        health: "生活リズムを整えよう。",
        color: "パープル",
        item: "財布"
    },

    {
        result: "吉凶未分",
        message: "運勢はまだ決まっていません。あなたの行動次第。",
        love: "自分から動くことが大切。",
        work: "挑戦する気持ちを忘れずに。",
        money: "慎重に判断しよう。",
        health: "疲れたら休もう。",
        color: "シルバー",
        item: "鏡"
    },

    {
        result: "平吉",
        message: "穏やかな一日。小さな幸せを見つけてみよう。",
        love: "友達から恋が始まるかも。",
        work: "いつも通りが一番。",
        money: "安定した運勢。",
        health: "のんびり過ごそう。",
        color: "ベージュ",
        item: "本"
    },

    {
        result: "吉上",
        message: "いつもより少しだけ運気が高め。",
        love: "嬉しい連絡が来るかも。",
        work: "アイデアが冴える日。",
        money: "小さな得がありそう。",
        health: "気分もスッキリ。",
        color: "イエロー",
        item: "ペン"
    },

    {
        result: "大吉",
        message: "幸運があなたの味方をしてくれそう。",
        love: "素直な気持ちを伝えよう。",
        work: "積極的な行動が吉。",
        money: "欲しいものを買うなら今日。",
        health: "元気に動けそう。",
        color: "ゴールド",
        item: "時計"
    },

    {
        result: "凶",
        message: "今日は少し慎重に。焦らなければ大丈夫。",
        love: "相手の気持ちを考えよう。",
        work: "確認を忘れずに。",
        money: "大きな買い物は延期。",
        health: "早めに休もう。",
        color: "グレー",
        item: "ハンカチ"
    },

    {
        result: "小凶",
        message: "小さなミスに注意。でも気にしすぎなくて大丈夫。",
        love: "言葉選びを大切に。",
        work: "確認作業をしっかり。",
        money: "衝動買いに注意。",
        health: "疲れを溜めないように。",
        color: "ブラウン",
        item: "お茶"
    },

    {
        result: "末凶",
        message: "今は少し運気が低め。でもここから上がっていきます。",
        love: "焦らず自分磨きを。",
        work: "地道な努力が大切。",
        money: "節約モードがおすすめ。",
        health: "しっかり睡眠を。",
        color: "ブラック",
        item: "枕"
    },

    {
        result: "大凶",
        message: "今日は無理をしない日。明日はきっと良くなる。",
        love: "自分の時間を大切に。",
        work: "大切なことは何度も確認。",
        money: "財布のひもを固く。",
        health: "ゆっくり休もう。",
        color: "ダークブルー",
        item: "傘"
    },

    {
        result: "凶後大吉",
        message: "今は少し大変。でも最後には大きな幸運が待っています。",
        love: "諦めなければチャンスあり。",
        work: "最後まで頑張ることが大切。",
        money: "後半に運気アップ。",
        health: "無理は禁物。",
        color: "レッド",
        item: "お守り"
    },

    {
        result: "吉中吉",
        message: "安定した良い運勢。普段通りに過ごせば◎",
        love: "優しさが伝わる日。",
        work: "周囲から頼られそう。",
        money: "安定しています。",
        health: "調子は良好。",
        color: "ミント",
        item: "香水"
    },

    {
        result: "福吉",
        message: "思いがけないところから幸せがやってきそう。",
        love: "偶然の出会いに注目。",
        work: "新しいアイデアが幸運を呼ぶ。",
        money: "嬉しいプレゼントがあるかも。",
        health: "気分爽快。",
        color: "ローズ",
        item: "アクセサリー"
    }

];


// ==============================
// HTMLの要素を取得
// ==============================

const drawButton = document.getElementById("drawButton");

const result = document.getElementById("result");

const message = document.getElementById("message");

const details = document.getElementById("details");

const love = document.getElementById("love");

const work = document.getElementById("work");

const money = document.getElementById("money");

const health = document.getElementById("health");

const color = document.getElementById("color");

const item = document.getElementById("item");

const date = document.getElementById("date");


// ==============================
// 今日の日付を表示
// ==============================

const today = new Date();

date.textContent =
    today.getFullYear() +
    "." +
    String(today.getMonth() + 1).padStart(2, "0") +
    "." +
    String(today.getDate()).padStart(2, "0");


// ==============================
// おみくじを引く
// ==============================

drawButton.addEventListener("click", function () {

    // ランダムな数字を作る
    const randomNumber =
        Math.floor(Math.random() * fortunes.length);


    // おみくじを選ぶ
    const fortune =
        fortunes[randomNumber];


    // 結果を表示
    result.textContent = fortune.result;

    message.textContent =
        fortune.message;


    // 詳細を表示
    love.textContent =
        fortune.love;

    work.textContent =
        fortune.work;

    money.textContent =
        fortune.money;

    health.textContent =
        fortune.health;

    color.textContent =
        fortune.color;

    item.textContent =
        fortune.item;


    // 詳細部分を表示
    details.classList.remove("hidden");


    // アニメーションをリセット
    result.classList.remove("result-animation");

    void result.offsetWidth;

    result.classList.add("result-animation");


    // ボタンの文字を変更
    drawButton.querySelector("span").textContent =
        "もう一度引く";

});
