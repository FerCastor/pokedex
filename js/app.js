// JavaScript para o site
const apiUrl = "https://pokeapi.co/api/v2";
const pokedex = document.querySelector('[data-js="pokedex"]');
const inputLimit = document.querySelector(".inputLimit");
const inputSearch = document.querySelector(".inputSearch");
const updateButton = document.getElementById("updateLimit");
const searchButton = document.getElementById("searchButton");
const homepage = document.querySelector(".homepage");

homepage.addEventListener("click", () => {
  getPokemon();
});

// Adicione um evento de clique ao botão de pesquisa
searchButton.addEventListener("click", () => {
  const pokemonNameOrId = inputSearch.value;
  fetchPokemon(pokemonNameOrId);
  clearInput();
});

inputSearch.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const pokemonNameOrId = inputSearch.value;
    fetchPokemon(pokemonNameOrId);
    clearInput();
  }
});

// Função para limpar o conteúdo do input
function clearInput() {
  inputSearch.value = ""; // Limpa o conteúdo do input
}

// Função para fazer uma solicitação à API
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erro na solicitação: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Erro na solicitação:", error);
  }
}

// Função para buscar e exibir um Pokémon por nome ou ID
async function fetchPokemon(pokemon) {
  const url = `${apiUrl}/pokemon/${pokemon}`;
  const dataPokemon = await fetchData(url);

  if (dataPokemon) {
    const types = dataPokemon.types.map((typeObj) => typeObj.type.name);

    pokedex.innerHTML = `
		<li class="card ${types[0]}">
		  <img class="card-image" alt="${dataPokemon.name}" src="${
      dataPokemon.sprites.front_default
    }">
		  <h2 class="card-title">${dataPokemon.id}. ${dataPokemon.name}</h2>
		  <p class="card-subtitle">${types.join(" | ")}</p>
		</li>
	  `;
  }
}

// Função para buscar e exibir uma lista de Pokémon
async function getPokemon() {
  const limit = inputLimit.value;
  const url = `${apiUrl}/pokemon?limit=${limit}`;
  const data = await fetchData(url);

  if (data) {
    const pokemonList = data.results;

    pokedex.innerHTML = ""; // Limpa o conteúdo anterior

    for (const pokemon of pokemonList) {
      const dataPokemon = await fetchData(pokemon.url);
      const types = dataPokemon.types.map((typeObj) => typeObj.type.name);

      let idPokemon = dataPokemon.id.toString();
      if (idPokemon.length === 1) {
        idPokemon = "00" + idPokemon;
      } else if (idPokemon.length === 2) {
        idPokemon = "0" + idPokemon;
      }
console.log(dataPokemon)
      pokedex.innerHTML += `
        <li class="card ${types[0]}">
		<h3 class="id-pokemon">#${idPokemon}</h3>
		<img class="card-image" alt="${dataPokemon.name}" src="${
        dataPokemon.sprites.front_default
      }">
		<p class="id-text">#${idPokemon}</p>
          <h2 class="card-title">${dataPokemon.name}</h2>
          <p class="card-subtitle">${types.join(" | ")}</p>
		  <div class="card-info-container">
   <p class="card-info">Height: ${dataPokemon.height / 10}m</p>
   <p class="card-info">Weight: ${dataPokemon.weight / 10}kg</p>
</div>

        </li>
      `;
    }
  }
}

// Adicione um evento de clique ao botão "Atualizar"
updateButton.addEventListener("click", () => {
  getPokemon();
  clearInput();
});

// Adicione um evento para permitir que o usuário pressione "Enter" no campo de entrada de limite
inputLimit.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    getPokemon();
    clearInput();
  }
});

// Inicialmente, carrega a lista de Pokémon
getPokemon();