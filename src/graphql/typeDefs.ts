import { gql } from 'apollo-server';

const typeDefs = gql`
  type PokemonGroup {
    name: String!
    url: String!
  }

  type Query {
    pokemonGroup: [PokemonGroup]
  }
`;

export default typeDefs;
