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
    document.getElementById("score").innerText = score;
  } else {
    document.getElementById("main").innerHTML =
      "<h1 style = 'text-align: center; color:red'>GAME OVER......!</h1>";
  }
  scrollWindow();
};

const scrollWindow = function() {
  coordinates -= 150;
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

function setTimer() {
  let id = setInterval(frame, 1000);
  timer = 10;
  function frame() {
    timer--;
    document.getElementById("timer").innerText = timer;
    if (timer == 0 || score == -10) {
      clearInterval(id);
      document.getElementById("main").innerHTML =
        "<h1 style = 'color:red'>GAME OVER ....!</h1>";
    }
  }
}
