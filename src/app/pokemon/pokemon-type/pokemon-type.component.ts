import { Component, OnInit } from '@angular/core';
import { PokemonDetailDto } from '../pokemonDetailDto';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrls: ['./pokemon-type.component.css']
})
export class PokemonTypeComponent implements OnInit {
  pokemons: Array<PokemonDetailDto> = [];
  pokemonsFinal: Array<PokemonDetailDto> = [];

  constructor(private pokemonService: PokemonService, private type: String) { 
  }

  getPokemons(): void{
    this.pokemons = this.pokemonService.getPokemons()
    for (let i = 0; i < this.pokemons.length; i++) {
      if (this.pokemons[i].types[0].type.name == this.type) {
        this.pokemonsFinal.push(this.pokemons[i])
      }
  }
}
  ngOnInit() {
    this.getPokemons();
  }

}
