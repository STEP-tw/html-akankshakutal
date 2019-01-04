const colors = ["red", "blue", "green", "yellow"];
let score = 10;
let colorNameIndex = 1;

const changeColorName = function(box) {
  updateScore(box.id, colors[colorNameIndex]);
  if (score < 0) {
    document.getElementById("main").innerHTML =
      "<h1 style = 'margin-top:10%; color:red'> GAME OVER......! </h1>";
  }
  colorNameIndex = Math.floor(Math.random() * 4);
  const colorIndex = Math.floor(Math.random() * 4);

  document.getElementById("heading").innerText = colors[
    colorNameIndex
  ].toUpperCase();
  document.getElementById("heading").style.color = colors[colorIndex];
};

const updateScore = function(id, color) {
  if (id == color) {
    score = score + 10;
    document.getElementById("score").innerText = score;
  } else {
    score = score - 10;
    document.getElementById("score").innerText = score;
  }
};
