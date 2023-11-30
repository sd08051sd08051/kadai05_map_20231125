const SHEET_ID = "15BcUVRYA9tN-vqOeSb654OZQM6Epq_clys1i84bfvWI";
const SHEET_TITLE = "GSDB";
const SHEET_RANGE = "A6:G60";

const FULL_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_TITLE}!${SHEET_RANGE}?key=AIzaSyDt-Npa-gC9_au9DCMAUeGMpKAvtySvYPY`;

fetch(FULL_URL)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    let length = data.values.length - 1;
    console.log(length);

    // Filter rows where gender is '女'

    const femaleEntrepreneurs = data.values.filter((row) => row[4] === "男");

    let Grid3 = document.getElementById("Grid2");
    Grid2.innerHTML = "";

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

    const genderRadioButtons = document.querySelectorAll(
      'input[name="gender"]'
    );
    genderRadioButtons.forEach((radioButton) => {
      radioButton.addEventListener("change", () => {
        const selectedGender = radioButton.value;
        const selectedGenderElement = document.getElementById("selectedGender");
        selectedGenderElement.textContent = `選択された性別: ${selectedGender}`;

        // Filter rows based on selected gender
        const filteredEntrepreneurs = data.values.filter(
          (row) => row[4] === selectedGender
        );

        // Display filtered entrepreneurs
        displayEntrepreneurs(filteredEntrepreneurs);
      });
    });

    // Function to display entrepreneurs
    function displayEntrepreneurs(entrepreneurs) {
      let Grid3 = document.getElementById("Grid3");
      Grid3.innerHTML = "";

      for (let i = 0; i < entrepreneurs.length; i++) {
        let NewBox = document.createElement("div");
        NewBox.id = "box" + i;
        NewBox.className = "Some_Style";
        Grid3.append(NewBox);
        NewBox.innerHTML = `
      <strong>企業名:</strong> ${entrepreneurs[i][0]}<br>
      <strong>起業家:</strong> ${entrepreneurs[i][1]}<br>
      <strong>ジャンル:</strong> ${entrepreneurs[i][2]}<br>
      <strong>起業時の年代:</strong> ${entrepreneurs[i][3]}<br>
      <strong>性別:</strong> ${entrepreneurs[i][4]}<br>
      <strong>URL:</strong> <a href="${entrepreneurs[i][5]}" target="_blank">${entrepreneurs[i][5]}</a><br>
      <strong>本社:</strong> ${entrepreneurs[i][6]}<br>
    `;
      }
    }

    // ...
  });
