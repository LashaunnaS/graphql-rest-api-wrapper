import { PokemonGroup } from '../generated/graphql';

const resolvers = {
  Query: {
    pokemonGroup: async (
      _source: unknown,
      { id }: { id: string },
      { dataSources }: { dataSources: any },
    ): Promise<PokemonGroup> => {
      return dataSources.pokeAPI.getPokemonGroup();
    },
  },
};

export default resolvers;