// HTMLの要素を取得
const partDisplay = document.getElementById('part-display');
const menuDisplay = document.getElementById('menu-display');
const rouletteBtn = document.getElementById('roulette-btn');

// 筋トレの「部位」のリスト（配列）
const bodyParts = ["胸", "背中", "脚", "肩"];

// それぞれの部位に紐付く「種目」のリスト（配列）
const chestMenus = ["ベンチプレス", "ダンベルフライ", "チェストプレス"];
const backMenus = ["ラットプルダウン", "シーテッドロー"];
const legMenus = ["スクワット", "レッグプレス", "レッグエクステンション"];
const shoulderMenus = ["ショルダープレス", "サイドレイズ", "フロントレイズ"];

// ボタンがクリックされたときの処理（アロー関数を設定）
rouletteBtn.addEventListener('click', () => {

    // 1. 「部位」をランダムに選択
    const randomPartIndex = Math.floor(Math.random() * bodyParts.length);
    const chosenPart = bodyParts[randomPartIndex];

    // 2. 選択された「部位」に紐付く「種目」をランダムも選択（ifを用いて分岐）
    let chosenMenu = "";

    if (chosenPart === "胸") {
        const index = Math.floor(Math.random() * chestMenus.length);
        chosenMenu = chestMenus[index];
    } else if (chosenPart === "背中") {
        const index = Math.floor(Math.random() * backMenus.length);
        chosenMenu = backMenus[index];
    } else if (chosenPart === "脚") {
        const index = Math.floor(Math.random() * legMenus.length);
        chosenMenu = legMenus[index];
    } else if (chosenPart === "肩") {
        const index = Math.floor(Math.random() * shoulderMenus.length);
        chosenMenu = shoulderMenus[index];
    }

    // 3. 画面の文字を書き換える
    partDisplay.textContent = chosenPart;
    menuDisplay.textContent = chosenMenu;
});
