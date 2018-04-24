import {Inject, Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class QuestListService {

  constructor() {
  }

  getRewards(quest_id) {
    const result = [
      {
        'reward_id': '13',
        'quest_id': '9',
        'reward_count': '5',
        'reward_name': 'REWARD_REVIVE',
      },
      {
        'reward_id': '15',
        'quest_id': '29',
        'reward_count': '3',
        'reward_name': 'REWARD_CANDY_RARE',
      },
      {
        'reward_id': '1',
        'quest_id': '44',
        'reward_count': null,
        'reward_name': 'REWARD_POKEMON',
      },
      {
        'reward_id': '2',
        'quest_id': '44',
        'reward_count': '10',
        'reward_name': 'REWARD_POKEBALL',
      },
    ];

    return result.filter((reward) => reward.quest_id === quest_id);
  }

  getQuests() {
    return [
      {
        'quest_id': '1',
        'quest_type_id': '8',
        'quest_name': 'QUEST_POWERUP_POKEMON_5',
      },
      {
        'quest_id': '2',
        'quest_type_id': '7',
        'quest_name': 'QUEST_EGG_5',
      },
      {
        'quest_id': '3',
        'quest_type_id': '7',
        'quest_name': 'QUEST_EGG_3',
      },
      {
        'quest_id': '4',
        'quest_type_id': '7',
        'quest_name': 'QUEST_EGG',
      },
      {
        'quest_id': '5',
        'quest_type_id': '8',
        'quest_name': 'QUEST_POWERUP_POKEMON_5',
      },
      {
        'quest_id': '6',
        'quest_type_id': '7',
        'quest_name': 'QUEST_EGG_5',
      },
      {
        'quest_id': '7',
        'quest_type_id': '7',
        'quest_name': 'QUEST_EGG_3',
      },
      {
        'quest_id': '8',
        'quest_type_id': '7',
        'quest_name': 'QUEST_EGG',
      },
      {
        'quest_id': '9',
        'quest_type_id': '6',
        'quest_name': 'QUEST_STOP_3',
      },
      {
        'quest_id': '10',
        'quest_type_id': '6',
        'quest_name': 'QUEST_STOP_NEW_3',
      },
      {
        'quest_id': '11',
        'quest_type_id': '5',
        'quest_name': 'QUEST_THROW_CURVE_ROW_5',
      },
      {
        'quest_id': '12',
        'quest_type_id': '5',
        'quest_name': 'QUEST_THROW_EXCELLENT_ROW_3',
      },
      {
        'quest_id': '13',
        'quest_type_id': '5',
        'quest_name': 'QUEST_THROW_EXCELLENT_3',
      },
      {
        'quest_id': '14',
        'quest_type_id': '5',
        'quest_name': 'QUEST_THROW_EXCELLENT',
      },
      {
        'quest_id': '15',
        'quest_type_id': '5',
        'quest_name': 'QUEST_THROW_GREAT_CURVE_ROW_3',
      },
      {
        'quest_id': '16',
        'quest_type_id': '5',
        'quest_name': 'QUEST_THROW_GREAT_CURVE_3',
      },
      {
        'quest_id': '17',
        'quest_type_id': '5',
        'quest_name': 'QUEST_THROW_GREAT_ROW_5',
      },
      {
        'quest_id': '18',
        'quest_type_id': '5',
        'quest_name': 'QUEST_THROW_GREAT_ROW_3',
      },
      {
        'quest_id': '19',
        'quest_type_id': '5',
        'quest_name': 'QUEST_THROW_GREAT_5',
      },
      {
        'quest_id': '20',
        'quest_type_id': '5',
        'quest_name': 'QUEST_THROW_CURVE_ROW_3',
      },
      {
        'quest_id': '21',
        'quest_type_id': '5',
        'quest_name': 'QUEST_THROW_ROW_3',
      },
      {
        'quest_id': '22',
        'quest_type_id': '5',
        'quest_name': 'QUEST_THROW_3',
      },
      {
        'quest_id': '23',
        'quest_type_id': '4',
        'quest_name': 'QUEST_EVOLVE_FIRE_5',
      },
      {
        'quest_id': '24',
        'quest_type_id': '4',
        'quest_name': 'QUEST_EVOLVE',
      },
      {
        'quest_id': '25',
        'quest_type_id': '3',
        'quest_name': 'QUEST_CATCH_DITTO',
      },
      {
        'quest_id': '26',
        'quest_type_id': '3',
        'quest_name': 'QUEST_CATCH_WEATHER_20',
      },
      {
        'quest_id': '27',
        'quest_type_id': '3',
        'quest_name': 'QUEST_CATCH_WEATHER_10',
      },
      {
        'quest_id': '28',
        'quest_type_id': '3',
        'quest_name': 'QUEST_CATCH_PLANT_FIRE_GROUND_3',
      },
      {
        'quest_id': '29',
        'quest_type_id': '3',
        'quest_name': 'QUEST_CATCH_DRAGON',
      },
      {
        'quest_id': '30',
        'quest_type_id': '3',
        'quest_name': 'QUEST_CATCH_NORMAL_10',
      },
      {
        'quest_id': '31',
        'quest_type_id': '3',
        'quest_name': 'QUEST_CATCH_FIRE_3',
      },
      {
        'quest_id': '32',
        'quest_type_id': '3',
        'quest_name': 'QUEST_CATCH_FLYING_3',
      },
      {
        'quest_id': '33',
        'quest_type_id': '3',
        'quest_name': 'QUEST_CATCH_ELECTRIC_3',
      },
      {
        'quest_id': '34',
        'quest_type_id': '3',
        'quest_name': 'QUEST_CATCH_DARK_3',
      },
      {
        'quest_id': '35',
        'quest_type_id': '3',
        'quest_name': 'QUEST_CATCH_BUG_3',
      },
      {
        'quest_id': '36',
        'quest_type_id': '3',
        'quest_name': 'QUEST_CATCH_POISON_3',
      },
      {
        'quest_id': '37',
        'quest_type_id': '3',
        'quest_name': 'QUEST_CATCH_MEOWTH_SKITTY_3',
      },
      {
        'quest_id': '38',
        'quest_type_id': '3',
        'quest_name': 'QUEST_CATCH_TREECKO_MUDKIP_3',
      },
      {
        'quest_id': '39',
        'quest_type_id': '3',
        'quest_name': 'QUEST_CATCH_PIDGEY_MURKROW_3',
      },
      {
        'quest_id': '40',
        'quest_type_id': '3',
        'quest_name': 'QUEST_CATCH_ODDISH_BELLSRPOUT_3',
      },
      {
        'quest_id': '41',
        'quest_type_id': '3',
        'quest_name': 'QUEST_CATCH_SWABLU_3',
      },
      {
        'quest_id': '42',
        'quest_type_id': '3',
        'quest_name': 'QUEST_CATCH_BERRY_5',
      },
      {
        'quest_id': '43',
        'quest_type_id': '3',
        'quest_name': 'QUEST_CATCH_BERRY',
      },
      {
        'quest_id': '44',
        'quest_type_id': '3',
        'quest_name': 'QUEST_CATCH_10',
      },
      {
        'quest_id': '45',
        'quest_type_id': '2',
        'quest_name': 'QUEST_RAID_LEVEL_3',
      },
      {
        'quest_id': '46',
        'quest_type_id': '2',
        'quest_name': 'QUEST_RAID_WIN_5',
      },
      {
        'quest_id': '47',
        'quest_type_id': '2',
        'quest_name': 'QUEST_RAID_WIN_3',
      },
      {
        'quest_id': '48',
        'quest_type_id': '2',
        'quest_name': 'QUEST_RAID_WIN',
      },
      {
        'quest_id': '49',
        'quest_type_id': '1',
        'quest_name': 'QUEST_ARENA_WIN_3',
      },
      {
        'quest_id': '50',
        'quest_type_id': '1',
        'quest_name': 'QUEST_ARENA_WIN',
      },
      {
        'quest_id': '51',
        'quest_type_id': '1',
        'quest_name': 'QUEST_ARENA_SUPEREFFECTIVE_CHARGE_ATTACK_7',
      },
      {
        'quest_id': '52',
        'quest_type_id': '1',
        'quest_name': 'QUEST_ARENA_SUPEREFFECTIVE_CHARGE_ATTACK',
      },
      {
        'quest_id': '53',
        'quest_type_id': '1',
        'quest_name': 'QUEST_ARENA_FIGHT',
      },
      {
        'quest_id': '54',
        'quest_type_id': '1',
        'quest_name': 'QUEST_ARENA_FIGHT_5',
      },
    ];
  }

  getPokeStops() {
    return [
      {
        'pokestop_id': '3800',
        'pokestop_name': 'Metallkunst',
      },
      {
        'pokestop_id': '3811',
        'pokestop_name': 'Vilich-Müldorf Kapelle',
      },
      {
        'pokestop_id': '3815',
        'pokestop_name': 'Vilich-Müldorf Das Grüne C',
      },
      {
        'pokestop_id': '3816',
        'pokestop_name': 'Bärchen Mural',
      },
      {
        'pokestop_id': '3827',
        'pokestop_name': 'Vilich-Müldorf Kolki Der Leserabe',
      },
      {
        'pokestop_id': '3844',
        'pokestop_name': 'Steinernes Kreuz (Hammkreuz)',
      },
      {
        'pokestop_id': '3856',
        'pokestop_name': 'Brunnen Der Bottemelech&#039;s Jonge',
      },
      {
        'pokestop_id': '3858',
        'pokestop_name': 'Mikados',
      },
      {
        'pokestop_id': '3872',
        'pokestop_name': 'Vilich-Müldorf Steinkreuz',
      },
      {
        'pokestop_id': '3895',
        'pokestop_name': 'Vilich-Müldorf Gedenkkreuz',
      },
      {
        'pokestop_id': '3896',
        'pokestop_name': 'Heilige Maria Kreuz',
      },
      {
        'pokestop_id': '3900',
        'pokestop_name': 'Vilich-Müldorf Playground',
      },
      {
        'pokestop_id': '3936',
        'pokestop_name': 'Memory Spiel',
      },
      {
        'pokestop_id': '3951',
        'pokestop_name': 'Vilich-Müldorf Sandwurm',
      },
      {
        'pokestop_id': '3957',
        'pokestop_name': 'Vilich-Müldorf Wegstein',
      },
      {
        'pokestop_id': '3969',
        'pokestop_name': 'Vilich-Müldorf Heiligenhäuschen',
      },
      {
        'pokestop_id': '3975',
        'pokestop_name': 'Füße Ins Gras',
      },
      {
        'pokestop_id': '3993',
        'pokestop_name': 'Vilich Mysterious Signs',
      },
      {
        'pokestop_id': '3995',
        'pokestop_name': 'Wegkreuz "Wir denken an Euch"',
      },
      {
        'pokestop_id': '4009',
        'pokestop_name': 'Öffentlicher Spielplatz Neu-Vilich',
      },
      {
        'pokestop_id': '4011',
        'pokestop_name': 'Grünes C Vilich - "Link"',
      },
      {
        'pokestop_id': '4019',
        'pokestop_name': 'Kohlkauler Platz',
      },
      {
        'pokestop_id': '4025',
        'pokestop_name': 'Vilich-Müldorf Mühlenbachhalle',
      },
      {
        'pokestop_id': '4028',
        'pokestop_name': 'Vilich-Müldorf Playground #2 (Beueler Straße)',
      },
      {
        'pokestop_id': '4030',
        'pokestop_name': 'Vilich-Müldorf Gedenkstein',
      },
      {
        'pokestop_id': '4031',
        'pokestop_name': 'Linie 66 Vilich-Müldorf',
      },
      {
        'pokestop_id': '4050',
        'pokestop_name': 'Augen Zu',
      },
      {
        'pokestop_id': '4053',
        'pokestop_name': 'Vilich-Müldorf Sankt Maria Königin',
      },
      {
        'pokestop_id': '4066',
        'pokestop_name': 'Bemalter Stromkasten',
      },
      {
        'pokestop_id': '4102',
        'pokestop_name': 'Holzlar Paul Langen Memorial  ',
      },
      {
        'pokestop_id': '4103',
        'pokestop_name': 'Gedenkstein Neu-Villich',
      },
      {
        'pokestop_id': '4111',
        'pokestop_name': 'Metallene Vögel - Silver Birds',
      },
      {
        'pokestop_id': '4122',
        'pokestop_name': 'Pappskulptur Vor Ev. Kindergarten Bonn Holzlar',
      },
      {
        'pokestop_id': '4123',
        'pokestop_name': 'BN-Beuel, Jugendfarm',
      },
      {
        'pokestop_id': '4126',
        'pokestop_name': 'Pützchen St. Adelheid Gymnasium',
      },
      {
        'pokestop_id': '4139',
        'pokestop_name': 'und wo ist die lila Kuh??',
      },
      {
        'pokestop_id': '4140',
        'pokestop_name': 'Playground',
      },
      {
        'pokestop_id': '4141',
        'pokestop_name': 'Brunnen Im Hof',
      },
      {
        'pokestop_id': '4142',
        'pokestop_name': 'St. Nimmerlein und der Drache',
      },
      {
        'pokestop_id': '4144',
        'pokestop_name': 'Chamäleon im Ennert',
      },
      {
        'pokestop_id': '4146',
        'pokestop_name': 'Tapetenfabrik',
      },
      {
        'pokestop_id': '4156',
        'pokestop_name': 'Bildhauerhalle Beuel',
      },
      {
        'pokestop_id': '4170',
        'pokestop_name': 'Wagenrad in Mauer',
      },
      {
        'pokestop_id': '4171',
        'pokestop_name': 'Restaurant Zum Treppchen',
      },
      {
        'pokestop_id': '4183',
        'pokestop_name': 'Pförtnerloge',
      },
      {
        'pokestop_id': '4197',
        'pokestop_name': 'Bonn Holzlar Wegekreuz ',
      },
      {
        'pokestop_id': '4208',
        'pokestop_name': 'Evil Powerpuffy Bonn-Beuel',
      },
      {
        'pokestop_id': '4209',
        'pokestop_name': 'Holzlar, Wegekreuz am Ortseingang',
      },
      {
        'pokestop_id': '4211',
        'pokestop_name': 'Wegkreuz Marquartstraße',
      },
      {
        'pokestop_id': '4218',
        'pokestop_name': 'Kleiner Altar Im Adelheidis-Kloster',
      },
      {
        'pokestop_id': '4219',
        'pokestop_name': 'Kentenich',
      },
      {
        'pokestop_id': '4222',
        'pokestop_name': 'Löwenstatue mit Wappen',
      },
      {
        'pokestop_id': '4223',
        'pokestop_name': 'Hunold Beuel Mural',
      },
      {
        'pokestop_id': '4225',
        'pokestop_name': 'Spielplatz Am Kinkelplatz ',
      },
      {
        'pokestop_id': '4228',
        'pokestop_name': 'Wegkreuz Primelweg ',
      },
      {
        'pokestop_id': '4234',
        'pokestop_name': 'Alte Hütte Im Park',
      },
      {
        'pokestop_id': '4236',
        'pokestop_name': 'Wanderparkplatz Pützchens Wiese ',
      },
      {
        'pokestop_id': '4237',
        'pokestop_name': 'Jesus Am Überdachten Holzkreuz',
      },
      {
        'pokestop_id': '4240',
        'pokestop_name': 'Erinnerung An Eheleute Klein ',
      },
      {
        'pokestop_id': '4261',
        'pokestop_name': 'Landwirtschaftskammer NRW',
      },
      {
        'pokestop_id': '4262',
        'pokestop_name': 'Wegkreuz am Friedhof Pützchen',
      },
      {
        'pokestop_id': '4265',
        'pokestop_name': 'Wegkreuz Am Weinstock',
      },
      {
        'pokestop_id': '4282',
        'pokestop_name': 'Blaues Haus der Nommensen-Kirche',
      },
      {
        'pokestop_id': '4293',
        'pokestop_name': 'Holzlar, Gedenkkreuz 2. Weltkrieg',
      },
      {
        'pokestop_id': '4306',
        'pokestop_name': 'Gedenkkreuz Roleber',
      },
      {
        'pokestop_id': '4307',
        'pokestop_name': 'Gielgener Pümpchen ',
      },
      {
        'pokestop_id': '4308',
        'pokestop_name': 'Befleckter Bulle Bonn-Beuel',
      },
      {
        'pokestop_id': '4310',
        'pokestop_name': 'Robot',
      },
      {
        'pokestop_id': '4314',
        'pokestop_name': 'Generatorhäuschen',
      },
      {
        'pokestop_id': '4329',
        'pokestop_name': 'JHS',
      },
      {
        'pokestop_id': '4335',
        'pokestop_name': 'KREUZ',
      },
      {
        'pokestop_id': '4348',
        'pokestop_name': 'Wegekreuz Om Berg',
      },
      {
        'pokestop_id': '4359',
        'pokestop_name': 'Kreuz am Dorfplatz',
      },
      {
        'pokestop_id': '4363',
        'pokestop_name': 'Kindergaderobe',
      },
      {
        'pokestop_id': '4370',
        'pokestop_name': 'Bechlinghovener Wegekreuz',
      },
      {
        'pokestop_id': '4376',
        'pokestop_name': 'Schauspielhalle',
      },
      {
        'pokestop_id': '4395',
        'pokestop_name': 'Birlinghovener Straße "Grünes C"',
      },
      {
        'pokestop_id': '4397',
        'pokestop_name': 'Jesus spricht',
      },
      {
        'pokestop_id': '4400',
        'pokestop_name': 'Gesamtschule Beuel und Stadtbibliothek Beuel-Ost',
      },
      {
        'pokestop_id': '4402',
        'pokestop_name': 'Christ König',
      },
      {
        'pokestop_id': '4405',
        'pokestop_name': 'Ev. Kirche Bonn-Holzlar',
      },
      {
        'pokestop_id': '4406',
        'pokestop_name': 'Park Alligator ',
      },
      {
        'pokestop_id': '4407',
        'pokestop_name': 'Holzlar, Wegekreuz 600 Jahre Holzlar',
      },
      {
        'pokestop_id': '4411',
        'pokestop_name': 'Gilbert-Schwimmbecken',
      },
      {
        'pokestop_id': '4412',
        'pokestop_name': 'Holzlarer Mühle',
      },
      {
        'pokestop_id': '4413',
        'pokestop_name': 'Kriegsdenkmal Pützchen',
      },
      {
        'pokestop_id': '4415',
        'pokestop_name': 'Wegzeichen ',
      },
      {
        'pokestop_id': '4417',
        'pokestop_name': 'St. Paulus Kreuz, Bonn-Beuel',
      },
      {
        'pokestop_id': '4418',
        'pokestop_name': 'Modern Art',
      },
      {
        'pokestop_id': '4420',
        'pokestop_name': 'Rette deine Seele',
      },
      {
        'pokestop_id': '4426',
        'pokestop_name': 'Neu Vilich',
      },
      {
        'pokestop_id': '4433',
        'pokestop_name': 'WW II Memorial Graves',
      },
      {
        'pokestop_id': '4434',
        'pokestop_name': 'Altes Pförtnerhaus',
      },
      {
        'pokestop_id': '4439',
        'pokestop_name': 'Black Artistic Grave',
      },
      {
        'pokestop_id': '4449',
        'pokestop_name': 'BN. Pützchen Gedenkkreuz',
      },
      {
        'pokestop_id': '4451',
        'pokestop_name': 'Kreuz Am Dorfplatz',
      },
      {
        'pokestop_id': '4452',
        'pokestop_name': 'Pizza Mural',
      },
      {
        'pokestop_id': '4456',
        'pokestop_name': 'Kreuz Friedhof Pützchen',
      },
      {
        'pokestop_id': '4459',
        'pokestop_name': 'Achtet Auf Die Kinder',
      },
      {
        'pokestop_id': '4462',
        'pokestop_name': 'Spielplatz Maria-Tiefenbach-Str. ',
      },
      {
        'pokestop_id': '4464',
        'pokestop_name': 'Wegkreuz Heideweg',
      },
      {
        'pokestop_id': '4465',
        'pokestop_name': 'Wandgraffiti am Jugendzentrum',
      },
      {
        'pokestop_id': '4466',
        'pokestop_name': 'Pützchen Heiligenstatue',
      },
      {
        'pokestop_id': '4467',
        'pokestop_name': 'Adelheidisbrunnen',
      },
      {
        'pokestop_id': '4470',
        'pokestop_name': 'BN Pützchen Squash & Tennis',
      },
      {
        'pokestop_id': '4471',
        'pokestop_name': 'Holzlarer Hof',
      },
      {
        'pokestop_id': '4474',
        'pokestop_name': 'Infoschild Buschgarten',
      },
      {
        'pokestop_id': '4475',
        'pokestop_name': 'Helden',
      },
      {
        'pokestop_id': '4478',
        'pokestop_name': 'Winterfreude',
      },
      {
        'pokestop_id': '4483',
        'pokestop_name': 'Friedhof',
      },
      {
        'pokestop_id': '4484',
        'pokestop_name': 'Sankt-Petrus-Kirche Bonn-Beuel',
      },
      {
        'pokestop_id': '4486',
        'pokestop_name': 'Stolpersteine Rosenthal',
      },
      {
        'pokestop_id': '4490',
        'pokestop_name': 'Graffiti BSV Roleber',
      },
      {
        'pokestop_id': '4555',
        'pokestop_name': 'Foveaux Häuschen im Ennert Wald',
      },
      {
        'pokestop_id': '4581',
        'pokestop_name': 'Schild Ortsgruppe Eifelverein Bonn',
      },
      {
        'pokestop_id': '4584',
        'pokestop_name': 'Ennertwegweiser',
      },
      {
        'pokestop_id': '4605',
        'pokestop_name': 'Friedhof Om Berg',
      },
      {
        'pokestop_id': '4610',
        'pokestop_name': 'Pest Mahnmal',
      },
      {
        'pokestop_id': '4645',
        'pokestop_name': 'Wegkreuz Am Knippchen',
      },
      {
        'pokestop_id': '4679',
        'pokestop_name': 'Zweiter Stein des Gut Ettenhausen',
      },
      {
        'pokestop_id': '4747',
        'pokestop_name': 'Infotafel Ennert Park + Ride Parkplatz',
      },
      {
        'pokestop_id': '4805',
        'pokestop_name': 'Gedenktafeln für Kriegsopfer',
      },
      {
        'pokestop_id': '4850',
        'pokestop_name': 'Wegweiser Holtorf',
      },
      {
        'pokestop_id': '4881',
        'pokestop_name': 'Wegweiser Im Entert',
      },
      {
        'pokestop_id': '4882',
        'pokestop_name': 'Hauptwegestein Ennert',
      },
      {
        'pokestop_id': '4890',
        'pokestop_name': 'Wegkreuz Ungarten',
      },
      {
        'pokestop_id': '4894',
        'pokestop_name': 'Bäche - Lebensadern im Wald',
      },
      {
        'pokestop_id': '4895',
        'pokestop_name': 'Stein des Gut Ettenhausen',
      },
      {
        'pokestop_id': '4896',
        'pokestop_name': 'Geschichtsweg Braunkohle',
      },
      {
        'pokestop_id': '4904',
        'pokestop_name': 'Wegkreuz Löwenburg',
      },
      {
        'pokestop_id': '4910',
        'pokestop_name': 'Gedenkkreuz Michael Lichtenberg',
      },
      {
        'pokestop_id': '4914',
        'pokestop_name': 'Schutzhütte im Ennert Wald',
      },
      {
        'pokestop_id': '4918',
        'pokestop_name': 'Ennert Sportplatz',
      },
      {
        'pokestop_id': '4922',
        'pokestop_name': 'Wegweiser Ennert 2',
      },
      {
        'pokestop_id': '4926',
        'pokestop_name': 'Forsthaus Wanderparkplatz ',
      },
      {
        'pokestop_id': '4961',
        'pokestop_name': 'Streuobstwiesen ',
      },
      {
        'pokestop_id': '5069',
        'pokestop_name': 'Paffelsberg',
      },
      {
        'pokestop_id': '5167',
        'pokestop_name': 'Wegkreuz Stieldorfer Straße',
      },
      {
        'pokestop_id': '5180',
        'pokestop_name': 'Braunkohle & Alaun auf der Ennert-Hardt',
      },
      {
        'pokestop_id': '5228',
        'pokestop_name': 'Ehrenmal Oberholtorf',
      },
      {
        'pokestop_id': '5242',
        'pokestop_name': 'Frühmittelalterliche Kirchenanlagen ',
      },
      {
        'pokestop_id': '5245',
        'pokestop_name': 'Eintönige Feldlandschaft',
      },
      {
        'pokestop_id': '5258',
        'pokestop_name': 'Ruhe im Dorf',
      },
      {
        'pokestop_id': '5285',
        'pokestop_name': 'Burghof Oberholtorf',
      },
      {
        'pokestop_id': '5288',
        'pokestop_name': 'Brunnen Oberholtorf',
      },
    ];
  }

  // noinspection JSMethodCanBeStatic
  getQuestTypes(): any[] {
    return [
      {
        'quest_type_id': '1',
        'quest_type_name': 'QUEST_TYPE_ARENA',
      },
      {
        'quest_type_id': '2',
        'quest_type_name': 'QUEST_TYPE_RAID',
      },
      {
        'quest_type_id': '3',
        'quest_type_name': 'QUEST_TYPE_CATCH',
      },
      {
        'quest_type_id': '4',
        'quest_type_name': 'QUEST_TYPE_EVOLVE',
      },
      {
        'quest_type_id': '5',
        'quest_type_name': 'QUEST_TYPE_THROW',
      },
      {
        'quest_type_id': '6',
        'quest_type_name': 'QUEST_TYPE_POKESTOP',
      },
      {
        'quest_type_id': '7',
        'quest_type_name': 'QUEST_TYPE_EGG',
      },
      {
        'quest_type_id': '8',
        'quest_type_name': 'QUEST_TYPE_OTHER',
      },
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
        'quest_name': 'QUEST_CATCH_DRAGON',
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
