import {Injectable} from '@angular/core';

@Injectable()
export class QuestListService {

  constructor() {
  }

  getQuestTypes(): any[] {
    return [
      {type: 'QUEST_TYPE_CATCH', name: 'Pokemon fangen'},
      {type: 'QUEST_TYPE_EGG', name: 'Eier ausbrüten'},
      {type: 'QUEST_TYPE_ARENA', name: 'Arenakämpfe'},
      {type: 'QUEST_TYPE_OTHER', name: 'Sonstige'},
    ];
  }

  // noinspection JSMethodCanBeStatic
  fetchList() {
    return [
      {
        'pokestop_id': '3816',
        'pokestop_name': 'Bärchen Mural',
        'pokestop_url': 'barchen-mural',
        'pokestop_address': 'Blankenbergweg 68, 53229 Bonn, Germany',
        'pokestop_lat': '50.749905',
        'pokestop_lng': '7.153487',
        'quest_id': '29',
        'quest_type_id': '3',
        'quest_name': 'QUEST_CATCH_DRANGON',
        'quest_type_name': 'QUEST_TYPE_CATCH',
        'reward_id': '15',
        'reward_count': '3',
        'reward_name': 'REWARD_CANDY_RARE',
        'pokemon_id': null,
      },
      {
        'pokestop_id': '4314',
        'pokestop_name': 'Generatorhäuschen',
        'pokestop_url': 'generatorhauschen',
        'pokestop_address': 'Marktstraße 39-41, 53229 Bonn, Germany',
        'pokestop_lat': '50.744508',
        'pokestop_lng': '7.153953',
        'quest_id': '44',
        'quest_type_id': '3',
        'quest_name': 'QUEST_CATCH_10',
        'quest_type_name': 'QUEST_TYPE_CATCH',
        'reward_id': '1',
        'reward_count': null,
        'reward_name': 'REWARD_POKEMON',
        'pokemon_id': '129',
      },
      {
        'pokestop_id': '4363',
        'pokestop_name': 'Kindergaderobe',
        'pokestop_url': 'kindergaderobe',
        'pokestop_address': 'Siegburger Str. 321, 53229 Bonn, Germany',
        'pokestop_lat': '50.749179',
        'pokestop_lng': '7.150873',
        'quest_id': '9',
        'quest_type_id': '6',
        'quest_name': 'QUEST_STOP_3',
        'quest_type_name': 'QUEST_TYPE_POKESTOP',
        'reward_id': '13',
        'reward_count': '5',
        'reward_name': 'REWARD_REVIVE',
        'pokemon_id': null,
      },
      {
        'pokestop_id': '4459',
        'pokestop_name': 'Achtet Auf Die Kinder',
        'pokestop_url': 'achtet-auf-die-kinder',
        'pokestop_address': 'Siegburger Str. 333, 53229 Bonn, Germany',
        'pokestop_lat': '50.748876',
        'pokestop_lng': '7.151168',
        'quest_id': '44',
        'quest_type_id': '3',
        'quest_name': 'QUEST_CATCH_10',
        'quest_type_name': 'QUEST_TYPE_CATCH',
        'reward_id': '2',
        'reward_count': '10',
        'reward_name': 'REWARD_POKEBALL',
        'pokemon_id': null,
      },
      {
        'pokestop_id': '4478',
        'pokestop_name': 'Winterfreude',
        'pokestop_url': 'winterfreude',
        'pokestop_address': 'Siegburger Str. 321, 53229 Bonn, Germany',
        'pokestop_lat': '50.749203',
        'pokestop_lng': '7.151552',
        'quest_id': '44',
        'quest_type_id': '3',
        'quest_name': 'QUEST_CATCH_10',
        'quest_type_name': 'QUEST_TYPE_CATCH',
        'reward_id': '1',
        'reward_count': null,
        'reward_name': 'REWARD_POKEMON',
        'pokemon_id': null,
      },
    ];
  }

  // }
  // // noinspection JSMethodCanBeStatic
  // fetchList() {
  //   return [
  //     {
  //       pokestop: {name: 'Bärchen Mural', lat: 50.7254180, lng: 7.0924530},
  //       name: 'QUEST_POWERUP_POKEMON_5',
  //       type: 'QUEST_TYPE_OTHER',
  //       reward: {item: {name: 'REWARD_POKEBALL', count: 3}},
  //     },
  //     {
  //       pokestop: {
  //         name: 'Achtet Auf Die Kinder',
  //         lat: 50.7254180,
  //         lng: 7.0924530,
  //       },
  //       name: 'QUEST_THROW_GREAT_CURVE_ROW_3',
  //       type: 'QUEST_TYPE_THROW',
  //       reward: {item: {name: 'REWARD_POKEBALL_ULTRA', count: 10}},
  //     },
  //     {
  //       pokestop: {name: 'Kindergaderobe', lat: 50.7254180, lng: 7.0924530},
  //       name: 'QUEST_CATCH_MEOWTH_SKITTY_3',
  //       type: 'QUEST_TYPE_CATCH',
  //       reward: {
  //         pokemon: {number: null, name: 'REWARD_POKEMON_NULL'},
  //       },
  //       done: true,
  //     },
  //     {
  //       pokestop: {
  //         name: 'Bechlinghovener Wegekreuz',
  //         lat: 50.7254180,
  //         lng: 7.0924530,
  //       },
  //       name: 'QUEST_STOP_NEW_3',
  //       type: 'QUEST_TYPE_POKESTOP',
  //       reward: {pokemon: {number: 250, name: 'POKEMON_MEWTWO'}},
  //       done: true,
  //     },
  //     {
  //       pokestop: {
  //         name: 'Generatorhäuschen',
  //         lat: 50.7254180,
  //         lng: 7.0924530,
  //         address: 'Marktstraße 39-41, 53229 Bonn, Deutschland',
  //       },
  //       name: 'QUEST_CATCH_PLANT_FIRE_GROUND_3',
  //       type: 'QUEST_TYPE_CATCH',
  //       reward: {pokemon: {number: 1, name: 'Bisasam'}},
  //     },
  //     {
  //       pokestop: {
  //         name: 'JHS',
  //         lat: 50.7254180,
  //         lng: 7.0924530,
  //       },
  //       name: 'QUEST_CATCH_FIRE_3',
  //       type: 'QUEST_TYPE_CATCH',
  //       reward: {item: {name: 'REWARD_STARDUST', count: 500}},
  //     },
  //     {
  //       pokestop: {name: 'Pizza Mural', lat: 50.7254180, lng: 7.0924530},
  //       name: 'QUEST_ARENA_SUPEREFFECTIVE_CHARGE_ATTACK_7',
  //       type: 'QUEST_TYPE_ARENA',
  //       reward: {pokemon: {number: 3, name: 'Bisaflor'}},
  //     },
  //     {
  //       pokestop: {
  //         name: 'Kreuz Friedhof Pützchen',
  //         lat: 50.7254180,
  //         lng: 7.0924530,
  //       },
  //       name: 'QUEST_EGG',
  //       type: 'QUEST_TYPE_EGG',
  //       reward: {pokemon: {number: 151, name: 'POKEMON_MEW'}},
  //     },
  //   ];
  // }
}
