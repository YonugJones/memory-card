export function getRandomPokemonIds(count, max) {
  const ids = new Set();
  while (ids.size < count) {
    const randomId = Math.floor(Math.random() * max) + 1;
    ids.add(randomId)
  }
  return Array.from(ids)
}

export async function fetchPokemonData(ids) {
  const requests = ids.map(id => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response => response.json()));
  const pokemonData = await Promise.all(requests);
  return pokemonData.map(pokemon => ({
    id: pokemon.id,
    name: pokemon.name,
    image: pokemon.sprites.front_default
  }));
}

export function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5)
}