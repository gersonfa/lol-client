import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSemanticModule } from 'ng-semantic';
import { HttpModule } from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Route
import {routing} from './app.route';
//  Services
import {SummonerService} from './_services/summonerService'
// Components
import { MainComponent } from './app.component';
import {HomeComponent} from './HomeComponent/home.component'
import {SearchComponent} from './SearchComponent/search.component'
import {SummonerComponent} from './SummonerComponent/summoner.component'
import {GameComponent} from './GameComponent/game.component'


@NgModule({
  imports: [
    BrowserModule, 
    NgSemanticModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    MainComponent,
    HomeComponent,
    SearchComponent,
    SummonerComponent,
    GameComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [MainComponent],
  providers: [
    SummonerService
  ]
})
export class MainModule {

}