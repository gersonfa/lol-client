import {Component, Input} from '@angular/core'
import {Summoner} from '../_models/summoner';

@Component({
  selector: 'lol-summoner',
  templateUrl: 'app/SummonerComponent/summoner.component.html'
})

export class SummonerComponent {
  constructor(){}

  @Input() summoner : Summoner ;


  test() {
    console.log(this.summoner)
  }
}