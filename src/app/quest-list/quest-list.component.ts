import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'quest-list',
  templateUrl: './quest-list.component.html',
  styleUrls: ['./quest-list.component.scss']
})
export class QuestListComponent implements OnInit {
  quests: any[];

  constructor() {
    this.quests = [
      {pokestop: { name: 'Dies ist ein langer PokeStop Name', lat: 11234, lng: 123}, name: "Test Quest", reward: { name: "Pokeball", count: 12}, pokemon: null},
      {pokestop: { name: 'test test test', lat: 11234, lng: 123}, name: "Test Quest mit eher langem namen", reward: { name: "Pokeball", count: 12}, pokemon: 1},
      {pokestop: { name: 'test test test', lat: 11234, lng: 123}, name: "Test Quest", reward: { name: "Pokeball", count: 12}, pokemon: 1, done: true},
      {pokestop: { name: 'test test test', lat: 11234, lng: 123}, name: "Test Quest", reward: { name: "Pokeball", count: 12}, pokemon: 1},
      {pokestop: { name: 'test test test', lat: 11234, lng: 123}, name: "Test Quest", reward: { name: "Pokeball", count: 12}, pokemon: 1},
      {pokestop: { name: 'test test test', lat: 11234, lng: 123}, name: "Test Quest", reward: { name: "Pokeball", count: 12}, pokemon: 1},
    ];
  }

  test() {
    console.log("Hallo Welt");
  }

  ngOnInit() {
  }

}
