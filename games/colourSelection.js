const colors = ["red", "blue", "green", "yellow"];
let positiveScore = 0;
let colorNameIndex = 1;

const changeColorName = function(box) {
  updateScore(box.id, colors[colorNameIndex]);
  colorNameIndex = Math.floor(Math.random() * 4);
  const colorIndex = Math.floor(Math.random() * 4);

  document.getElementById("heading").innerText = colors[
    colorNameIndex
  ].toUpperCase();
  document.getElementById("heading").style.color = colors[colorIndex];
};

const updateScore = function(id, color) {
  if (id == color) {
    positiveScore = positiveScore + 10;
    document.getElementById("score").innerText = positiveScore;
  } else {
    positiveScore = positiveScore - 10;
    document.getElementById("score").innerText = positiveScore;
  }
};
