/*
* imports RESTDataSource class
* used for fetching data
* from a REST API and exposing it
* via GraphQL within Apollo Server.
*/

import {RESTDataSource} from 'apollo-datasource-rest';

export default class PokeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://pokeapi.co/api/v2/';
  }

  async getPokemon(id: number): Promise<Record<string, unknown>> {
    const data = await this.get(`pokemon/${id}/`);
    return data;
  }
  async getPokemonSpeciesData(id: number): Promise<Record<string, unknown>> {
    const data = await this.get(`pokemon-species/${id}/`);
    return data;
  }
};