import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterQuestTypes'
})
export class FilterQuestTypesPipe implements PipeTransform {

  transform(quests: any, questTypes: any[]): any {
    return quests.filter(quest => {
      return questTypes.length === 0 || questTypes.indexOf(quest.quest_type_name) >= 0;
    });
  }
}
