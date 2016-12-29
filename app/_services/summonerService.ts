import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Summoner} from '../_models/summoner'
import {Game} from '../_models/game'

@Injectable()
export class SummonerService {
  private baseUrl: string = 'https://lan.api.pvp.net/api/lol/lan/v1.4/summoner/by-name';
  private apiKey: string = '?api_key=bc2e598e-3893-42cb-b5c8-9a5e78cefa8d';

  private gameUrl: string = 'https://lan.api.pvp.net/api/lol/lan/v1.3/game/by-summoner';
  constructor(private http : Http){}

  searchSummoner(summonerName: string): Observable<Summoner> {
    let summoner = this.http.get(`${this.baseUrl}/${summonerName}${this.apiKey}`)
    .map(this.mapSummoner);
    return summoner;
  }

  mapSummoner(response : Response) : Summoner {
    let data = response.json()
    let result = data[Object.keys(data)[0]]
    let summoner = <Summoner>({
      id : result.id,
      name : result.name,
      profileIconId : result.profileIconId,
      summonerLevel : result.summonerLevel
    })
    return summoner
  }

  getGames(summonerId : String) : Observable<Game[]> {
    let games = this.http.get(`${this.gameUrl}/${summonerId}/recent${this.apiKey}`)
    .map(this.mapGames);
    return games;
  }

  mapGames(response : Response) : Game[] {
    let data = response.json() && response.json().games;
    let games : Game[] = data.map(game => {
      let newGame = <Game>({
        team1Players : game.fellowPlayers.filter(x => {
          if(x.teamId === 100){
            return x;
          }
        }),
        team2Players : game.fellowPlayers.filter(x => {
          if(x.teamId == 200) {
            return x;
          }
        }),
        teamId: game.teamId,
        stats : game.stats,
        gameId : game.gameId,
        ipEarned : game.ipEarned,
        spell1 : game.spell1,
        spell2 : game.spell2,
        gameMode : game.gameMode,
        mapId : game.mapId,
        level : game.level,
        invalid: game.invalid,
        subType: game.subType,
        createDate: game.createDate,
        championId: game.championId
      })
      return newGame
    })
    return games
  }

}