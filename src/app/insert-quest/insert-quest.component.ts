import {Component, OnInit, Inject} from '@angular/core';
import {QuestListService} from '../services/quest-list/quest-list.service';

@Component({
  selector: 'app-insert-quest',
  templateUrl: './insert-quest.component.html',
  styleUrls: ['./insert-quest.component.scss'],
})
export class InsertQuestComponent implements OnInit {
  pokestops: any[] = [];
  quests: any[] = [];

  pokestop_id = -1;
  quest_id = -1;
  reward_id = -1;
  pokemon_id: number | null = null;

  constructor(@Inject(QuestListService) public questListService) {
    this.pokestops = questListService.getPokeStops();
  }

  ngOnInit() {
  }

}
