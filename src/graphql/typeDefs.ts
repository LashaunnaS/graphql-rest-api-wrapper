import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    getPokemon(id: Int!): Pokemon
  }

  type Pokemon {
    id: Int!
    name: String!
    types: [PokemonTypes]
    pokemonSpecies(id: Int!): PokemonSpecies
  }

  type PokemonTypes {
    type: PokemonType
  }

  type PokemonType {
    name: String!
    url: String!
  }

  type PokemonSpecies {
    color: Color
  }

  type Color {
    name: String!
    url: String!
  }
`;

export default typeDefs;
