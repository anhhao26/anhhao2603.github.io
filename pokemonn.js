(async function () {
    const app = document.querySelector("#app");
    const button = document.querySelector("#load-more");
    const input = document.querySelector(".search-input");
    let counter = 0;
    let limit = 36;
    let filteredPokemons = [];

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function createPokemonType(types) {
      return types
        .map(typeObj => `<span class="type" style="background-color: ${getTypeColor(typeObj.type.name)};">${typeObj.type.name}</span>`)
        .join(" ");
    }

    function getTypeColor(type) {
      const colors = {
        fire: '#F08030',
        water: '#6890F0',
        grass: '#78C850',
        electric: '#F8D030',
        ground: '#E0C068',
        rock: '#B8A038',
        fairy: '#EE99AC',
        poison: '#A040A0',
        bug: '#A8B820',
        dragon: '#7038F8',
        psychic: '#F85888',
        flying: '#A890F0',
        fighting: '#C03028',
        normal: '#A8A878'
      };
      return colors[type] || '#A8A878';
    }

    function createPokemonElement(pokemon) {
      const pokemonElement = document.createElement("div");
      pokemonElement.classList.add("pokemon");
      pokemonElement.innerHTML = `
        <div class="id">#${pokemon.id}</div>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}">
        <div class="type">${createPokemonType(pokemon.types)}</div>
        <div class="name">${capitalizeFirstLetter(pokemon.name)}</div>
      `;
      return pokemonElement;
    }

    async function cFetch(URL) {
      try {
        const response = await fetch(URL);
        return await response.json();
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    }

    function createPromiseList() {
      const pokePromise = [];
      for (; counter < limit; counter++) {
        const pokemon = filteredPokemons[counter];
        if (!pokemon) {
          button.style.display = 'none';
          break;
        }
        const promise = cFetch(pokemon.url);
        pokePromise.push(promise);
      }
      return pokePromise;
    }

    const { results: pokemons } = await cFetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898");
    filteredPokemons = pokemons;

    async function render() {
      button.style.display = 'block';
      const pokeData = await Promise.all(createPromiseList());
      pokeData.forEach(pokemon => {
        const element = createPokemonElement(pokemon);
        app.appendChild(element);
      });
      limit += 36;
    }

    app.innerHTML = '';
    render();

    button.addEventListener("click", render);
    input.addEventListener("input", () => {
      filteredPokemons = pokemons.filter(pokemon =>
        pokemon.name.includes(input.value.toLowerCase())
      );
      app.innerHTML = '';
      counter = 0;
      limit = 36;
      render();
    });
  })();