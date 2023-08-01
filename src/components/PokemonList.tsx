import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Pokemon {
  name: string;
  url: string;
}

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
        setPokemons(response.data.results);
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      }
    }

    fetchPokemons();
  }, []);

  return (
    <div>
      <h2>Pokémon List</h2>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
