import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetailDto } from '../pokemonDetailDto';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemonid!: string;
  @Input() pokemonDetail!: PokemonDetailDto;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
  ) { }

  getPokemon(){
    this.pokemonService.getPokemon(this.pokemonid).subscribe(apiData=>{this.pokemonDetail = apiData});
  }
  

  ngOnInit() {
    if(this.pokemonDetail === undefined){
      this.pokemonid = this.route.snapshot.paramMap.get('id')!
      if (this.pokemonid) {
        this.getPokemon();
      }
    }
  }
}
