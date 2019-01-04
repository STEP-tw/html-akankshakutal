const createObject = function(kdex, ndex, name, MS, pokemon, type) {
  return { kdex, ndex, name, MS, pokemon, type };
};

const createTable = function(pokemondata) {
  let tableRow = "";
  for (let data of pokemondata) {
    let { kdex, ndex, MS, pokemon, name, type } = data;
    tableRow += "<tr>\n";
    tableRow += "<td>" + kdex + "</td>\n";
    tableRow += "<td>" + ndex + "</td>\n";
    tableRow += "<td><img src='" + MS + "'/></td>\n";
    tableRow += "<td><a href='" + pokemon + "'>" + name + "</a></td>\n";
    if (type.length == 2) {
      tableRow += "<td class = '" + type[0] + "'>" + type[0] + "</td>\n";
      tableRow += "<td class = '" + type[1] + "'>" + type[1] + "</td>\n";
    } else {
      tableRow +=
        "<td colspan = '2' class = '" + type[0] + "'>" + type[0] + "</td>\n";
    }
    tableRow += "</tr>\n";
  }
  return tableRow;
};

const main = function() {
  let result = "";
  let pokemonData = [];
  pokemonData.push(
    createObject(
      "#001",
      "#001",
      "Bulbasaur",
      "https://bit.ly/2t2aPXK",
      "http://bit.do/eEnNX",
      ["Grass", "Poison"]
    )
  );

  pokemonData.push(
    createObject(
      "#002",
      "#002",
      "Ivysaur",
      "https://bit.ly/2F2wKFU",
      "http://bit.do/eEnN9",
      ["Grass", "Poison"]
    )
  );

  pokemonData.push(
    createObject(
      "#003",
      "#003",
      "Venusaur",
      "http://bit.do/eEnPc",
      "http://bit.do/eEnPm",
      ["Grass", "Poison"]
    )
  );

  pokemonData.push(
    createObject(
      "#004",
      "#004",
      "Charmander",
      "http://bit.do/eEnPq",
      "http://bit.do/eEm6M",
      ["Fire"]
    )
  );

  pokemonData.push(
    createObject(
      "#005",
      "#005",
      "Charmeleon",
      "http://bit.do/eEnaz",
      "http://bit.do/eEnat",
      ["Fire"]
    )
  );

  pokemonData.push(
    createObject(
      "#006",
      "#006",
      "Charizard",
      "http://bit.do/eEncZ",
      "http://bit.do/eEnc5",
      ["Fire", "Flying"]
    )
  );

  pokemonData.push(
    createObject(
      "#007",
      "#007",
      "Squirtle",
      "http://bit.do/eEndM",
      "http://bit.do/eEndF",
      ["Water"]
    )
  );

  pokemonData.push(
    createObject(
      "#008",
      "#008",
      "Wartortle",
      "http://bit.do/eEnd9",
      "http://bit.do/eEnd3",
      ["Water"]
    )
  );

  pokemonData.push(
    createObject(
      "#009",
      "#009",
      "Blastoise",
      "http://bit.do/eEnev",
      "http://bit.do/eEnei",
      ["Water"]
    )
  );

  pokemonData.push(
    createObject(
      "#010",
      "#010",
      "Caterpie",
      "http://bit.do/eEneT",
      "http://bit.do/eEneN",
      ["Bug"]
    )
  );

  pokemonData.push(
    createObject(
      "#011",
      "#011",
      "Metapod",
      "http://bit.do/eEnfK",
      "http://bit.do/eEnfF",
      ["Bug"]
    )
  );

  pokemonData.push(
    createObject(
      "#012",
      "#012",
      "Butterfree",
      "http://bit.do/eEnh9",
      "http://bit.do/eEnh5",
      ["Bug", "Flying"]
    )
  );

  pokemonData.push(
    createObject(
      "#013",
      "#013",
      "Weedle",
      "http://bit.do/eEniq",
      "http://bit.do/eEnii",
      ["Bug", "Poison"]
    )
  );

  pokemonData.push(
    createObject(
      "#014",
      "#014",
      "Kakuna",
      "http://bit.do/eEni6",
      "http://bit.do/eEniS",
      ["Bug", "Poison"]
    )
  );

  pokemonData.push(
    createObject(
      "#015",
      "#015",
      "Beedrill",
      "http://bit.do/eEnkA",
      "http://bit.do/eEnkn",
      ["Bug", "Poison"]
    )
  );

  pokemonData.push(
    createObject(
      "#016",
      "#016",
      "Pidgey",
      "http://bit.do/eEnwM",
      "http://bit.do/eEnwF",
      ["Normal", "Flying"]
    )
  );

  pokemonData.push(
    createObject(
      "#017",
      "#017",
      "Pidgeotto",
      "http://bit.do/eEnwv",
      "http://bit.do/eEnv6",
      ["Normal", "Flying"]
    )
  );

  pokemonData.push(
    createObject(
      "#018",
      "#018",
      "Pidgeot",
      "http://bit.do/eEnv9",
      "http://bit.do/eEnv6",
      ["Normal", "Flying"]
    )
  );

  pokemonData.push(
    createObject(
      "#019",
      "#019",
      "Rattata",
      "http://bit.do/eEnvW",
      "http://bit.do/eEnvD",
      ["Normal"]
    )
  );

  pokemonData.push(
    createObject(
      "#019",
      "",
      "Rattata",
      "http://bit.do/eEnvR",
      "http://bit.do/eEnvD",
      ["Dark", "Normal"]
    )
  );

  pokemonData.push(
    createObject(
      "#020",
      "#020",
      "Raticate",
      "http://bit.do/eEnux",
      "http://bit.do/eEnuC",
      ["Normal"]
    )
  );

  pokemonData.push(
    createObject(
      "",
      "#020",
      "Raticate",
      "http://bit.do/eEnuJ",
      "http://bit.do/eEnuC",
      ["Dark", "Normal"]
    )
  );

  pokemonData.push(
    createObject(
      "#021",
      "#021",
      "Spearow",
      "http://bit.do/eEnui",
      "http://bit.do/eEnue",
      ["Normal", "Flying"]
    )
  );

  pokemonData.push(
    createObject(
      "#022",
      "#022",
      "Fearow",
      "https://bit.ly/2Vnnz7T",
      "http://bit.do/eEnt7",
      ["Normal", "Flying"]
    )
  );

  pokemonData.push(
    createObject(
      "#023",
      "#023",
      "Ekans",
      "https://bit.ly/2AqNQct",
      "http://bit.do/eEnts",
      ["Poison"]
    )
  );

  pokemonData.push(
    createObject(
      "#024",
      "#024",
      "Arbok",
      "http://bit.do/eEntx",
      "http://bit.do/eEnts",
      ["Poison"]
    )
  );

  pokemonData.push(
    createObject(
      "#026",
      "#026",
      "Raichu",
      "http://bit.do/eEnPw",
      "http://bit.do/eEnPy",
      ["Electric"]
    )
  );

  pokemonData.push(
    createObject(
      "",
      "#026",
      "Raichu",
      "http://bit.do/eEnPQ",
      "http://bit.do/eEnPT",
      ["Electric", "Psychic"]
    )
  );

  pokemonData.push(
    createObject(
      "027",
      "#027",
      "Sandshrew",
      "http://bit.do/eEnPV",
      "http://bit.do/eEnPX",
      ["Ground"]
    )
  );

  pokemonData.push(
    createObject(
      "",
      "#027",
      "Sandshrew",
      "http://bit.do/eEnP2",
      "http://bit.do/eEnP7",
      ["Ice", "Steel"]
    )
  );

  pokemonData.push(
    createObject(
      "#028",
      "#028",
      "Sandslash",
      "http://bit.do/eEnQb",
      "http://bit.do/eEnQi",
      ["Ground"]
    )
  );

  pokemonData.push(
    createObject(
      "",
      "#028",
      "Sandslash",
      "http://bit.do/eEnQm",
      "http://bit.do/eEnQp",
      ["Ice", "Steel"]
    )
  );

  pokemonData.push(
    createObject(
      "#29",
      "#029",
      "Nidoran",
      "http://bit.do/eEnQs",
      "http://bit.do/eEnQw",
      ["Poison"]
    )
  );

  pokemonData.push(
    createObject(
      "#30",
      "#030",
      "Nidorina",
      "http://bit.do/eEnQy",
      "http://bit.do/eEnQB",
      ["Poison"]
    )
  );

  result = createTable(pokemonData);
  console.log(result);
  document.getElementById("main").innerHTML = result;
  console.log(abc);

  abc.innerHTML = result;
};

window.onload = main();
