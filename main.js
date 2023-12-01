const SHEET_ID = "15BcUVRYA9tN-vqOeSb654OZQM6Epq_clys1i84bfvWI";
const SHEET_TITLE = "GSDB";
const SHEET_RANGE = "A6:G60";
const FULL_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_TITLE}!${SHEET_RANGE}?key=AIzaSyDt-Npa-gC9_au9DCMAUeGMpKAvtySvYPY`;

function gender_select() {
  var gender = document.getElementsByName("gender");
  for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      console.log(gender[i].value);
    }
  }
}

fetch(FULL_URL)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    const femaleEntrepreneurs = data.values.filter((row) => row[4] === "男");

    for (let i = 0; i < femaleEntrepreneurs.length; i++) {
      let NewBox = document.createElement("div");
      NewBox.id = "box" + i;
      NewBox.className = "Some_Style";
      Grid2.append(NewBox);
      NewBox.innerHTML = `
    <strong>企業名:</strong> ${femaleEntrepreneurs[i][0]}<br>
    <strong>起業家:</strong> ${femaleEntrepreneurs[i][1]}<br>
    <strong>ジャンル:</strong> ${femaleEntrepreneurs[i][2]}<br>
    <strong>起業時の年代:</strong> ${femaleEntrepreneurs[i][3]}<br>
    <strong>性別:</strong> ${femaleEntrepreneurs[i][4]}<br>
    <strong>URL:</strong> <a href="${femaleEntrepreneurs[i][5]}" target="_blank">${femaleEntrepreneurs[i][5]}</a><br>
    <strong>本社:</strong> ${femaleEntrepreneurs[i][6]}<br>
  `;
    }
  });
