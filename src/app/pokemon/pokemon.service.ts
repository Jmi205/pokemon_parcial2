import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDetailDto } from './pokemonDetailDto';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  apiUrl : string = "https://pokeapi.co/api/v2/pokemon/";
  typeApiUrl: string = "https://pokeapi.co/api/v2/type/";

  constructor(private http : HttpClient) { }

  getPokemons(): PokemonDetailDto[] {
    let pokemons : PokemonDetailDto[] = [];
    for (let i = 1; i <= 20; i++) {
      this.getPokemon(i.toString()).subscribe((pokemon) => {
        pokemons.push(pokemon);
      });
    }
    return pokemons;
  }
  getPokemonsType(type: String): PokemonDetailDto[] {
    let pokemons : PokemonDetailDto[] = [];
    for (let i = 1; i <= 20; i++) {
      this.getPokemon(i.toString()).subscribe((pokemon) => {
        pokemons.push(pokemon);
      });
    }
    return pokemons;
  }

  getPokemon(id : string): Observable<PokemonDetailDto> {
    return this.http.get<PokemonDetailDto>(`${this.apiUrl}${id}`);
  }

}
