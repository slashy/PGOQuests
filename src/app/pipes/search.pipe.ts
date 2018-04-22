import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(quests: any[], searchText: string): any {
    if (!quests) {
      return [];
    }
    if (!searchText) {
      return quests;
    }

    searchText = searchText.toLowerCase();

    return quests.filter(quest => {
      if (quest.name.toLowerCase().includes(searchText)) {
        return quest;
      }
      if (quest.pokestop.name.toLowerCase().includes(searchText)) {
        return quest;
      }
      if (quest.pokestop.hasOwnProperty('address') && quest.pokestop.address.toLowerCase().includes(searchText)) {
        return quest;
      }
      if (quest.reward.hasOwnProperty('pokemon')) {
        if (quest.reward.pokemon.name && quest.reward.pokemon.name.toLowerCase().includes(searchText)) {
          return quest;
        }
        if (quest.reward.pokemon.number && quest.reward.pokemon.number.toLocaleString() === searchText) {
          return quest;
        }
      }
      if (quest.reward.hasOwnProperty('item')) {
        if (quest.reward.item.name && quest.reward.item.name.toLowerCase().includes(searchText)) {
          return quest;
        }
      }
    });
  }
}
