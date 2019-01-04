let pokemons = ["pikachu", "meowth", "bulbasaur", "togepi"];
let score = 10;
let pokemonNameIndex = 1;

const changePokemonName = function(box) {
  updateScore(box.id, pokemons[pokemonNameIndex]);
  if (score < -10) {
    document.getElementById("main").innerHTML = "<h1>GAME OVER ....!</h1>";
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
