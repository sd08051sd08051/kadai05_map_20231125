const SHEET_ID = "15BcUVRYA9tN-vqOeSb654OZQM6Epq_clys1i84bfvWI";
const SHEET_TITLE = "GSDB";
const SHEET_RANGE = "A6:G15";

const FULL_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_TITLE}!${SHEET_RANGE}?key=AIzaSyDt-Npa-gC9_au9DCMAUeGMpKAvtySvYPY`;

fetch(FULL_URL)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let player_Name_title = document.getElementById("player_Name_title");
    let player_Shoe_title = document.getElementById("player_Shoe_title");
    let player_Name = document.getElementById("player_Name");
    let player_Shoe = document.getElementById("player_Shoe");

    // 1つ目の企業のデータを取得
    const firstRow = data.values[1];
    const playerName1 = firstRow[4];

    // 2番目の企業のデータを取得
    const secondRow = data.values[2];
    const playerName2 = secondRow[4];

    // 3番目の企業のデータを取得
    const thirdRow = data.values[3];
    const playerName3 = thirdRow[4];

    // 4番目の企業のデータを取得
    const fourthRow = data.values[4];
    const playerName4 = fourthRow[4];

    // 必要に応じて他のデータも取得

    player_Name_title.innerHTML = playerName1;
    player_Shoe_title.innerHTML = playerName2;
    player_Name.innerHTML = playerName3;
    player_Shoe.innerHTML = playerName4;
  })

  .catch((error) => {
    console.error("Fetch error:", error);
  });
