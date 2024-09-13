import { Injectable } from '@angular/core';
import { POKEMON_LIST } from './pokemon-list.fake';
import { Pokemon, PokemonList } from './pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  // retourne la liste de tous les Pokémons
  getPokemonList(): PokemonList {
      return POKEMON_LIST;    
  }

  // Retourne le pokémon avec l'identifiant passé en paramètre
  getPokemonById(id: number): Pokemon {
    const pokemon = POKEMON_LIST.find((pokemon) => pokemon.id ===id);
    if (!pokemon){
      throw new Error('No Pokemon found with ${id}');
    }
    return pokemon;
  }

   // Retourne la liste des types valides pour un pokémon.

  getPokemonTypeList(): string[] {
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
    ];
  }
}