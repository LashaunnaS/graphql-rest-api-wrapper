import {RESTDataSource} from 'apollo-datasource-rest';

export default class PokeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://pokeapi.co/api/v2/';
  }

  async getPokemonGroup(): Promise<Record<string, unknown>> {
    const data = await this.get(`pokemon?limit=5`);
    return data.results;
  }
};