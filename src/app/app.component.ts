import { Component, computed, inject, signal } from '@angular/core';
import { Pokemon } from './pokemon.model';
//import { POKEMON_LIST } from './pokemon-list.fake';
import { PokemonBorderDirective } from './pokemon-border.directive';
import { DatePipe } from '@angular/common';
import { PokemonService } from './pokemon.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PokemonBorderDirective, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  name = signal('Pikachu');
  
  // injection du service
  pokemonService = inject(PokemonService);
  // on récupère la liste
  pokemonsList = signal(this.pokemonService.getPokemonList());

  // pour le champ de recherche
  readonly searchTerm = signal('');
  // pour la recherche
  readonly pokemonListFiltered = computed(() => {
    return this.pokemonsList().filter((pokemon) =>
      pokemon.name
        .toLowerCase()
        .includes(this.searchTerm().trim().toLocaleLowerCase())
    )
  });
        
  
  imageSrc = signal('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png');
  // on affecte le liste importé en signal à pokemonsList
  //pokemonsList = signal(POKEMON_LIST);

  incrementLife(pokemon: Pokemon){
    pokemon.life = pokemon.life + 1;
  }

  decrementLife(pokemon:Pokemon){
    pokemon.life = pokemon.life - 1;
  }
  
  size(pokemon : Pokemon){
    if (pokemon.life <= 15)
    {
      return 'Petit';
    }
    if (pokemon.life >= 25)
    {
      return 'Petit';
    }
    return 'Moyen';
  }

}
