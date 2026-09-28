'use strict';

// HTMLの要素を取得
const greetingText = document.getElementById('greeting-text');
const changeBtn = document.getElementById('change-btn');

// 切り替える挨拶のリスト（配列）
const greetings = [
    "こんにちは！私の部屋へ来てくれてありがとう！",
    "おなかすいてきたなー！",
    "最近涼しくなってきたなー!",
    "ゆっくりしていってねー！",
    "報告緊張しています。"
];


// ボタンをクリックした時の処理（アロー関数を設定）
changeBtn.addEventListener('click',() => {
    // 0からgreetings.lengthまでのランダムな整数を計算
    let randomIndex = Math.floor(Math.random() * greetings.length);

    // greetingsの配列の中からインデックス番号をrandomIndexから取得してきて画面のテキストを変更
    greetingText.textContent = greetings[randomIndex];
});