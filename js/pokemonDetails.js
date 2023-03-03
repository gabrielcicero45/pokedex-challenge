const pokemonState = JSON.stringify(history.state);
const pokemon = JSON.parse(pokemonState);
const main = document.getElementById("stats");
const header = document.getElementById("pokemon-header");
const body = document.getElementsByTagName("body");
const typeDiv = document.createElement("div");
const aboutDiv = document.createElement("div");
const aboutTitle = document.createElement("h2");
const weight = document.createElement("div");
const height = document.createElement("div");
const moves = document.createElement("div");
const baseStatsDiv = document.createElement("div");
const baseStats = document.createElement("h2");
const hp = document.createElement("p");
const atk = document.createElement("p");
const def = document.createElement("p");
const stak = document.createElement("p");
const sdef = document.createElement("p");
const spd = document.createElement("p");

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

pokemon.types.map((type) => {
  const span = document.createElement("span");
  span.innerText = type.type.name;
  span.classList.add("pokemon-card__type");
  span.classList.add(`${type.type.name}`);
  typeDiv.appendChild(span);
});

typeDiv.classList.add("pokemon-card__type-wrapper");

aboutDiv.classList.add("pokemon-card__about-wrapper")
aboutTitle.classList.add("pokemon-card__about");
aboutTitle.innerText = "About";

weight.innerHTML = `<p class="pokemon-card__weight">${pokemon.weight/10}</p>
<p class="pokemon-card__attribute-title">Weight</p>
`
height.innerHTML = `<p class="pokemon-card__height">${pokemon.height/10}</p>
<p class="pokemon-card__attribute-title">Height</p>
`

moves.innerHTML +=`
  <p class="pokemon-card__moves">${pokemon.moves[getRandomInt(0, pokemon.moves.length)].move.name}</p>
  <p class="pokemon-card__moves">${pokemon.moves[getRandomInt(0, pokemon.moves.length)].move.name}</p>
  <p class="pokemon-card__attribute-title">Height</p>
  `

weight.classList.add("pokemon-card__attribute")
height.classList.add("pokemon-card__attribute--center")
moves.classList.add("pokemon-card__attribute")

aboutDiv.appendChild(aboutTitle);
aboutDiv.appendChild(weight);
aboutDiv.appendChild(height);
aboutDiv.appendChild(moves);

baseStats.classList.add("pokemon-card__about");
baseStats.innerText = "Base Stats";

baseStatsDiv.appendChild(baseStats)

hp.innerText = pokemon.stats[0].base_stat;
atk.innerText = pokemon.stats[1].base_stat;
def.innerText = pokemon.stats[2].base_stat;
stak.innerText = pokemon.stats[3].base_stat;
sdef.innerText = pokemon.stats[4].base_stat;
spd.innerText = pokemon.stats[5].base_stat;

main.appendChild(typeDiv);
main.appendChild(aboutDiv);
main.appendChild(baseStatsDiv);

body[0].classList.add(`${pokemon.types[0].type.name}`);

header.innerHTML += `<div class="pokemon__image"><img src=${pokemon.sprites.other["official-artwork"].front_default} alt="" srcset=""> </div>`;
