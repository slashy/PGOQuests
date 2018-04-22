import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterPokemon',
})
export class FilterPokemonPipe implements PipeTransform {
  transform(quests: any, showOnlyPokemon: boolean): any {
    if (!quests) {
      return [];
    }
    if (!showOnlyPokemon) {
      return quests;
    }
    return quests.filter(quest => {
      return  quest.hasOwnProperty('reward_name') && quest.reward_name === 'REWARD_POKEMON' ||
              quest.hasOwnProperty('pokemon_id') && quest.pokemon_id;
    });
  }
}
