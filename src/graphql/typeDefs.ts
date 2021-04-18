import { gql } from 'apollo-server';

const typeDefs = gql`
  type PokemonDefaultData {
    id: Int!
    name: String!
    types: [PokemonTypes]
    # color: Color
  }

  type PokemonTypes {
    type: PokemonType
  }

  type PokemonType {
    name: String!
    url: String!
  }

  type Query {
    getPokemonDefaultData(id: Int!): PokemonDefaultData
  }
`;

export default typeDefs;
