import {Component, Input} from '@angular/core'
import {Game} from '../_models/game'

@Component({
  selector: 'lol-game',
  templateUrl: 'app/GameComponent/game.component.html'
})

export class GameComponent {
  @Input() game : Game;
  constructor() {}
}