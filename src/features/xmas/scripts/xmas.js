
const asciiArtList = [
      `
  Merry Christmas
       2025

        ★
      ／&＼
     ／ @ ＼
    ／     ＼
   ／       ＼
  ／         ＼
  ^^^^^| |^^^^^
       | |
     ＿＿＿
    / ,  ⊃ヽ＿＿
   ｜, 3/        ヽ
  ／\`ー/＿＿＿＿／
      `,
      `
  Merry Christmas
       2025

        ★
      ／&＼
     ／p@i＼
    ／  &  ＼
   ／       ＼
  ／         ＼
  ^^^^^| |^^^^^
       | |
     ＿＿＿
    / ,  ⊃ヽ＿＿
   ｜, 3/        ヽ
  ／\`ー/＿＿＿＿／
      `,
      `
  Merry Christmas
       2025

        ★
      ／&＼
     ／p@i＼
    ／ ｡&i*＼
   ／   @   ＼
  ／         ＼
  ^^^^^| |^^^^^
       | |
     ＿＿＿
    / ,  ⊃ヽ＿＿
   ｜, 3/        ヽ
  ／\`ー/＿＿＿＿／
      `
      ,
      `
  Merry Christmas
       2025

        ★
      ／&＼
     ／p@i＼
    ／ ｡&i*＼
   ／i  @  *＼
  ／  @ ** i ＼
  ^^^^^| |^^^^^
       | |
     ＿＿＿
    / ,  ⊃ヽ＿＿
   ｜, 3/        ヽ
  ／\`ー/＿＿＿＿／
      `
];

const asciiArtElement = document.getElementById('ascii-art');
let currentIndex = 0;

export function displayNextAsciiArt() {
  asciiArtElement.textContent = asciiArtList[currentIndex];
  currentIndex = (currentIndex + 1) % asciiArtList.length;
}
