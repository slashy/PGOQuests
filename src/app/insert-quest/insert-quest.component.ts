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
  pokemon_id: string | null = '0';

  constructor(
    @Inject(QuestListService) public questListService,
    @Inject(TranslateService) public translateService) {
    this.pokestops = questListService.getPokeStops();
    this.quests = this.questListService.getQuests();
  }

  getRewards(quest_id: string) {
    this.rewards = this.questListService.getRewards(quest_id);
  }

  getPokemon(quest_id: string) {
    if (this.reward_id.toString() === '1') {
      this.pokemon = this.questListService.getPokemon(quest_id);
    }
  }

  sendData() {
    console.log('insert_quest/%s/%s/%s/%s', this.pokestop_id, this.quest_id, this.reward_id, this.pokemon_id);
  }

  ngOnInit() {
  }

}
