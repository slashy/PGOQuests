import {Component, OnInit, Inject} from '@angular/core';
import {QuestListService} from '../services/quest-list/quest-list.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-insert-quest',
  templateUrl: './insert-quest.component.html',
  styleUrls: ['./insert-quest.component.scss'],
})
export class InsertQuestComponent implements OnInit {
  pokestops: any[] = [];
  quests: any[] = [];
  rewards: any[] = [];
  pokemon: any[] = [];

  pokestop_id: string | null = null;
  quest_id: string | null = null;
  reward_id: string | null = null;
  pokemon_id: string | null = null;

  constructor(
    @Inject(QuestListService) public questListService,
    @Inject(TranslateService) public translateService) {
    this.pokestops = questListService.getPokeStops();
    this.quests = this.questListService.getQuests();
  }

  getRewards(quest_id: number) {
    this.rewards = this.questListService.getRewards(quest_id);
  }

  getPokemon(quest_id: number) {
    if (this.reward_id.toString() === '1') {
      this.pokemon = this.questListService.getPokemon(quest_id);
    }
  }

  searchQuest(term: string, item: any, translationService: any) {

    translationService.get('quest_name.' + item.quest_name).
      subscribe((res) => {
        return res.includes(term);
      });
  }

  searchReward(term: string, item: any, translationService: any) {

    translationService.get('quest_reward.' + item.reward_name).
      subscribe((res) => {
        return res.includes(term);
      });
  }

  searchPokemon(term: string, item: any, translationService: any) {

    translationService.get('pokemon.' + item.pokemon_name).
      subscribe((res) => {
        return res.includes(term);
      });
  }

  sendData() {
    console.log('insert_quest/%s/%s/%s/%s', this.pokestop_id, this.quest_id, this.reward_id, this.pokemon_id);
  }

  ngOnInit() {
  }

}
