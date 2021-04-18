import {RESTDataSource} from 'apollo-datasource-rest';

export default class PokeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://pokeapi.co/api/v2/';
  }

  async getPokemonDefaultData(id: number): Promise<Record<string, unknown>> {
    const data = await this.get(`pokemon/${id}/`);
    return data;
  }
  async getPokemonSpeciesData(id: number): Promise<Record<string, unknown>> {
    const data = await this.get(`pokemon-species/${id}/`);
    return data;
  }
};