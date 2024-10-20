import { api } from "../axios/axios";

const resource = "/pokemons";

export interface PokemonType {
  id: number;
  name: string;
  sprite: string;
  spriteShiny: string;
  type1: string;
  type2: string;
}

// interface ParamsType {
//   limit: number;
//   offset: number;
//   page: number;
// }

const getPokemon = async () => {
  // params: { limit: 10, offset: 0, page: 1 }
  return await api.get(`${resource}`);
};

export const pokemonApi = {
  getPokemon,
};
