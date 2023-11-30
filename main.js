const SHEET_ID = "15BcUVRYA9tN-vqOeSb654OZQM6Epq_clys1i84bfvWI";
const SHEET_TITLE = "GSDB";
const SHEET_RANGE = "A6:G60";

const FULL_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_TITLE}!${SHEET_RANGE}?key=AIzaSyDt-Npa-gC9_au9DCMAUeGMpKAvtySvYPY`;

fetch(FULL_URL)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    let player_Name_title = document.getElementById("player_Name_title");
    let player_Shoe_title = document.getElementById("player_Shoe_title");
    let player_Name = document.getElementById("player_Name");
    let player_Shoe = document.getElementById("player_Shoe");
    let Grid2 = document.getElementById("Grid2");

    let length = data.values.length - 1;
    console.log(length);

    // 1つ目の企業のデータを取得
    const firstRow = data.values[3];
    const playerName1 = firstRow[6];

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

    // const maleEntrepreneurs = data.values.filter(
    //   (row) => row[4].toLowerCase() === "男"
    // );

    // let Grid2 = document.getElementById("Grid2");
    // Grid2.innerHTML = "";

    // for (let i = 0; i < maleEntrepreneurs.length; i++) {
    //   let NewBox = document.createElement("div");
    //   NewBox.id = "box" + i;
    //   NewBox.className = "Some_Style";
    //   Grid2.append(NewBox);
    //   NewBox.innerHTML = maleEntrepreneurs[i][5]; // 起業家の名前はスプレッドシートの6列目
    // }
  });
