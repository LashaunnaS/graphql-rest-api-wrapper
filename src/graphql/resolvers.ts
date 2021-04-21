import { Pokemon, PokemonSpecies } from '../generated/graphql';

const resolvers = {
  Pokemon: {
    pokemonSpecies: async (
      _source: Record<string, unknown>,
      { dataSources }: { dataSources: any },
    ): Promise<PokemonSpecies> => {
      return dataSources.pokeAPI.getPokemonSpeciesData(_source.id);
    },
  },
  Query: {
    getPokemon: async (
      _source: unknown,
      { id }: { id: string },
      { dataSources }: { dataSources: any },
    ): Promise<Pokemon> => {
      return dataSources.pokeAPI.getPokemon(id);
    },
  },
};

export default resolvers;