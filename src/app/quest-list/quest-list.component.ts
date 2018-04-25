import {Component, Inject, Input, OnChanges, OnInit} from '@angular/core';
import {SimpleChanges} from '@angular/core/src/metadata/lifecycle_hooks';
import {QuestListService} from '../services/quest-list/quest-list.service';
import {TranslateService} from '@ngx-translate/core';

const PKMN_BASEDIR = 'assets/icons/pokemon/';
const ITEM_BASEDIR = 'assets/icons/items/';

@Component({
  selector: 'app-quest-list',
  templateUrl: './quest-list.component.html',
  styleUrls: ['./quest-list.component.scss'],
})
export class QuestListComponent implements OnInit, OnChanges {
  expandFilters: boolean;
  expandOptions: boolean;

  filterOptions: any;
  quests: any[];
  @Input() searchText: string;
  @Input() questTypes: any[];

  constructor(
    @Inject(QuestListService) public questListService,
    @Inject(TranslateService) public translate,
  ) {

    this.expandFilters = false;
    this.expandOptions = false;

    this.questTypes = questListService.getQuestTypes();

    this.filterOptions = {
      onlyPokemon: false,
      onlyQuestTypes: [],
    };

    this.quests = questListService.fetchList();
    translate.setDefaultLang('de');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('de');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  // noinspection JSMethodCanBeStatic
  hasPkmn(quest: any | null) {
    return  quest.hasOwnProperty('reward_name') && quest.reward_name === 'REWARD_POKEMON';
  }

  // noinspection JSMethodCanBeStatic
  getPkmnImg(pokemon_id: string | null) {
    return PKMN_BASEDIR + pokemon_id + '.png';
  }

  // noinspection JSMethodCanBeStatic
  getItemImg(name: string) {
    return ITEM_BASEDIR + name.toLowerCase() + '.png';
  }

  // noinspection JSMethodCanBeStatic
  getMapsUrl(quest) {
    return 'https://www.google.de/maps?q=' + quest.pokestop_lat + ',' +
      quest.pokestop_lng;
  }

  openLocation(quest: any) {
    window.open(this.getMapsUrl(quest), '_blank');
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes:', changes);
  }

}
