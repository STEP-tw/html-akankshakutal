let pokemons = ["pikachu", "meowth", "bulbasaur", "togepi"];
let imageAdd = [
  "https://bit.ly/2C1qH0i",
  "https://bit.ly/2QnRau4",
  "https://bit.ly/2t2aPXK",
  "https://bit.ly/2Otl8N8"
];
let score = -10;
let pokemonNameIndex = 0;
let timer = 10;

const changeImage = function(id, pokemonImgIndex) {
  document.getElementById(id).innerHTML =
    "<img id = '" +
    pokemons[pokemonImgIndex] +
    "'onclick='changePokemonName(this)' src='" +
    imageAdd[pokemonImgIndex] +
    "'/>";
};

const updateTable = function() {
  let indexes = [0, 1, 2, 3];
  pokemonImgIndex = Math.floor(Math.random() * 3);
  indexes = indexes.filter(x => x != pokemonImgIndex);
  changeImage("0", pokemonImgIndex);
  changeImage("1", indexes[0]);
  changeImage("2", indexes[1]);
  changeImage("3", indexes[2]);
};

const changePokemonName = function(box) {
  updateScore(box.id, pokemons[pokemonNameIndex]);
  updateTable();
  if (score == -10) {
    document.getElementById("main").innerHTML =
      "<h1 style = 'color:red'>GAME OVER ....!</h1>";
  }
  pokemonNameIndex = Math.floor(Math.random() * 4);
  document.getElementById("heading").innerText = pokemons[
    pokemonNameIndex
  ].toUpperCase();
};

const updateScore = function(id, pokemon) {
  if (id == pokemon) {
    score = score + 10;
    document.getElementById("score").innerText = score;
  } else {
    score = score - 10;
    document.getElementById("score").innerText = score;
  }
};
