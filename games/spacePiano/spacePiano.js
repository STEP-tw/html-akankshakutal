let score = 0;
let coordinates = 10000;
let count = 0;

window.onload = function() {
  let tableRow = "";
  for (let index = 0; index < 50; index++) {
    tableRow += addRow();
  }
  document.getElementById("table").innerHTML = tableRow;
  setRandomBackground();
  updateScore();
};

const randomNumberGenerator = function(add) {
  return Math.floor(Math.random() * 4 + add);
};

const setRandomBackground = function() {
  for (let index = 0; index < 50; index++) {
    randomNumber = randomNumberGenerator(index * 4);
    document.getElementById(randomNumber).style = "background:black";
  }
};

const updateScore = function(event) {
  let a = window.getComputedStyle(event.target, null).backgroundColor;
  if (a == "rgb(0, 0, 0)") {
    score += 10;
  } else {
    document.getElementById("main").innerHTML = "<h1>GAME OVER......!</h1>";
  }
  scrollWindow();
};

const scrollWindow = function() {
  coordinates -= 200;
  window.scrollTo(coordinates, coordinates);
};

const addRow = function() {
  let tableRow = "";
  tableRow += "<tr>\n";
  tableRow += "<td id = '" + count + "' onclick = 'updateScore(event)'></td>\n";
  count++;
  tableRow += "<td id = '" + count + "' onclick = 'updateScore(event)'></td>\n";
  count++;
  tableRow += "<td id = '" + count + "' onclick = 'updateScore(event)'></td>\n";
  count++;
  tableRow += "<td id = '" + count + "' onclick = 'updateScore(event)'></td>\n";
  count++;
  tableRow += "</tr>\n";
  return tableRow;
};
