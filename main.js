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
    let Grid2 = document.getElementById("Grid2");

    let length = data.values.length - 1;

    // const [playerName1, playerName2, playerName3, playerName4] = data.values
    //   .slice(1, 5)
    //   .map((row) => row[4]);

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

    for (let i = 0; i < length; i++) {
      let NewBox = document.createElement("div");
      NewBox.id = "box" + i;
      NewBox.className = "Some_Style";
      Grid2.append(NewBox);
      NewBox.innerHTML = data.values[i].c[4].v;
    }
  })

  .catch((error) => {
    console.error("Fetch error:", error);
  });

///////////////検索部分のコード////////////////////////////////////////
let searchUi = ".search_ui"; // 絞り込み検索条件設定エリア
let listItem = ".item"; // 検索対象アイテム
let hideItem = "hide_item"; // 対象外アイテムに付与されるclass名
let checkBox = 'input[name="size"]'; //チェックボックスのnameを指定

// 絞り込み条件の変更
$(function () {
  $(document).on("change", searchUi + " input", function () {
    search_filter();
  });
});

function search_filter() {
  // 非表示状態を解除
  $(listItem).removeClass(hideItem);
  for (let i = 0; i < $(searchUi).length; i++) {
    let name = $(searchUi).eq(i).find("input").attr("name");
    // チェックされた検索条件を取得
    let searchData = get_selected_input_items(name);
    // チェック項目無し or 全てを選択している場合
    if (searchData.length === 0 || searchData[0] === "") {
      continue;
    }
    // リスト内の各アイテムをチェック
    for (let j = 0; j < $(listItem).length; j++) {
      // アイテムに設定している項目を取得
      let itemData = get_setting_values_in_item($(listItem).eq(j), name);
      // 絞り込み対象かどうかを調べる
      let check = array_match_check(itemData, searchData);
      if (!check) {
        $(listItem).eq(j).addClass(hideItem);
      }
    }
  }
}

// チェックの入った値の一覧を取得する
function get_selected_input_items(name) {
  let searchData = [];
  $("[name=" + name + "]:checked").each(function () {
    searchData.push($(this).val());
  });
  return searchData;
}

// リスト内のアイテムに設定している値の一覧を取得する
function get_setting_values_in_item(target, data) {
  let itemData = target.data(data);
  if (!Array.isArray(itemData)) {
    itemData = [itemData];
  }
  return itemData;
}

// 2つの配列内で一致する文字列があるかどうかを調べる
function array_match_check(arr1, arr2) {
  // 絞り込み対象かどうかを調べる
  let arrCheck = false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) >= 0) {
      arrCheck = true;
      break;
    }
  }
  return arrCheck;
}

// 全サイズ選択解除
$(function () {
  $("#checkAll").on("click", function () {
    $(".size_sort").prop("checked", this.checked);
  });
  $(".size_sort").on("click", function () {
    if ($("#sizeBox :checked").length == $("#sizeBox :input").length) {
      $("#checkAll").prop("checked", "checked");
    } else {
      $("#checkAll").prop("checked", false);
    }
  });
});

// ...

// for (let i = 0; i < length; i++) {
//   let NewBox = document.createElement("div");
//   NewBox.id = "box" + i;
//   NewBox.className = "Some_Style";
//   Grid2.append(NewBox);
//   NewBox.innerHTML = data.values[i].c[4].v; // Access the 4th column value
// }

// ...
