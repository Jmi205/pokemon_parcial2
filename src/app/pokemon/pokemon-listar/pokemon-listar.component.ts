import { Component, OnInit } from '@angular/core';
import { PokemonDetailDto } from '../pokemonDetailDto';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-listar',
  templateUrl: './pokemon-listar.component.html',
  styleUrls: ['./pokemon-listar.component.css']
})
export class PokemonListarComponent implements OnInit {
  pokemons: Array<PokemonDetailDto> = [];
  selected: boolean = false;
  selectedPokemon!: PokemonDetailDto

  constructor(private pokemonService: PokemonService) { }

  getPokemons(): void{
    this.pokemonService.getPokemons()
  }

  onSelect(pokemon: PokemonDetailDto): void {
    this.selected = true;
    this.selectedPokemon = pokemon;
  }

  ngOnInit() {
    this.getPokemons();
  }

}
