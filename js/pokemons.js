import { getPokemonData, getPokemons } from "./api.js";

const fetchPokemons = async () => {
  try {
    const data = await getPokemons();
    const promises = data.results.map(async (pokemon) => {
      return await getPokemonData(pokemon.url);
    });
    const results = await Promise.all(promises);
    return results;
  } catch (error) {
    console.error("fetchPokemons error:", error);
  }
};

const pokemons = await fetchPokemons();

pokemons.map((pokemon) => {
  const appDiv = document.getElementById("pokemon-list");
  const pokemonDiv = document.createElement("div");
  pokemonDiv.innerHTML = `<a href="/${pokemon.id}"><div class="pokemon-card">
<span class="pokemon-card__id">#${pokemon.id}</span>
<img class="pokemon-card__image" src=${pokemon.sprites.other["official-artwork"].front_default} alt=${pokemon.name} srcset="">
<p class="pokemon-card__title">${pokemon.name}</p>
</div></a>`;
  appDiv.appendChild(pokemonDiv);
});
