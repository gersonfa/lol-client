import { Component } from '@angular/core';
import {Game} from '../_models/game'

@Component({
  selector: 'home',
  templateUrl: 'app/HomeComponent/home.component.html'
})
export class HomeComponent{
  private summoner = null;
  private games : Game[];

  constructor(){}

  setSummoner(summoner){
    this.summoner = summoner;
    console.log(this.summoner);
  }

  setGames(games){
    this.games = games
    this.games.forEach(x => console.log(x))
  }
}