import {Component, Output, EventEmitter} from '@angular/core'
import {SummonerService} from '../_services/summonerService'
import {Summoner} from '../_models/summoner';
import {Game} from '../_models/game'

@Component({
  selector: 'lol-search',
  templateUrl: 'app/SearchComponent/search.component.html'
})

export class SearchComponent {
  @Output() emitter : EventEmitter<any> = new EventEmitter()
  @Output() gameEmitter : EventEmitter<any> = new EventEmitter()
  private summoner : Summoner;
  private games : Game[];

  constructor(
    private summonerService : SummonerService
  ) {}

  searchSummoner(summonerName: string){
    this.summonerService.searchSummoner(summonerName).subscribe(
      data => {
        this.summoner = data
        this.emmitSummoner();
        this.summonerService.getGames(this.summoner.id).subscribe(
          data => {
            this.games = data
            this.emmitGames();
          }
        )
      }
    )
  }

  emmitSummoner() {
    this.emitter.emit(this.summoner);
  }

  emmitGames() {
    this.gameEmitter.emit(this.games);
  }
}