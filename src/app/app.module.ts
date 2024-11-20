import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonListarComponent } from './pokemon/pokemon-listar/pokemon-listar.component';
import { PokemonDetailComponent } from './pokemon/pokemon-detail/pokemon-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListarComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
