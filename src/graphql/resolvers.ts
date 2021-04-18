import { PokemonDefaultData } from '../generated/graphql';

const resolvers = {
  Query: {
    getPokemonDefaultData: async (
      _source: unknown,
      { id }: { id: string },
      { dataSources }: { dataSources: any },
    ): Promise<PokemonDefaultData> => {
      return dataSources.pokeAPI.getPokemonDefaultData(id);
    },
  },
};

export default resolvers;