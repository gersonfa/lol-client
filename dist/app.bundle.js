webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(1);
	var app_module_1 = __webpack_require__(23);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.MainModule);


/***/ },

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var platform_browser_1 = __webpack_require__(21);
	var ng_semantic_1 = __webpack_require__(24);
	var http_1 = __webpack_require__(64);
	var forms_1 = __webpack_require__(37);
	// Route
	var app_route_1 = __webpack_require__(65);
	//  Services
	var summonerService_1 = __webpack_require__(97);
	// Components
	var app_component_1 = __webpack_require__(99);
	var home_component_1 = __webpack_require__(96);
	var search_component_1 = __webpack_require__(100);
	var summoner_component_1 = __webpack_require__(101);
	var game_component_1 = __webpack_require__(103);
	var MainModule = (function () {
	    function MainModule() {
	    }
	    return MainModule;
	}());
	MainModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            platform_browser_1.BrowserModule,
	            ng_semantic_1.NgSemanticModule,
	            http_1.HttpModule,
	            forms_1.FormsModule,
	            forms_1.ReactiveFormsModule,
	            app_route_1.routing
	        ],
	        declarations: [
	            app_component_1.MainComponent,
	            home_component_1.HomeComponent,
	            search_component_1.SearchComponent,
	            summoner_component_1.SummonerComponent,
	            game_component_1.GameComponent
	        ],
	        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
	        bootstrap: [app_component_1.MainComponent],
	        providers: [
	            summonerService_1.SummonerService
	        ]
	    }),
	    __metadata("design:paramtypes", [])
	], MainModule);
	exports.MainModule = MainModule;


/***/ },

/***/ 65:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(66);
	var home_component_1 = __webpack_require__(96);
	var ROUTES = [
	    { path: '', component: home_component_1.HomeComponent },
	    // otherwise redirect to home
	    { path: '**', redirectTo: '' }
	];
	exports.routing = router_1.RouterModule.forRoot(ROUTES);


/***/ },

/***/ 96:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var HomeComponent = (function () {
	    function HomeComponent() {
	        this.summoner = null;
	    }
	    HomeComponent.prototype.setSummoner = function (summoner) {
	        this.summoner = summoner;
	        console.log(this.summoner);
	    };
	    HomeComponent.prototype.setGames = function (games) {
	        this.games = games;
	        this.games.forEach(function (x) { return console.log(x); });
	    };
	    return HomeComponent;
	}());
	HomeComponent = __decorate([
	    core_1.Component({
	        selector: 'home',
	        templateUrl: 'app/HomeComponent/home.component.html'
	    }),
	    __metadata("design:paramtypes", [])
	], HomeComponent);
	exports.HomeComponent = HomeComponent;


/***/ },

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(64);
	__webpack_require__(98);
	var SummonerService = (function () {
	    function SummonerService(http) {
	        this.http = http;
	        this.baseUrl = 'https://lan.api.pvp.net/api/lol/lan/v1.4/summoner/by-name';
	        this.apiKey = '?api_key=bc2e598e-3893-42cb-b5c8-9a5e78cefa8d';
	        this.gameUrl = 'https://lan.api.pvp.net/api/lol/lan/v1.3/game/by-summoner';
	    }
	    SummonerService.prototype.searchSummoner = function (summonerName) {
	        var summoner = this.http.get(this.baseUrl + "/" + summonerName + this.apiKey)
	            .map(this.mapSummoner);
	        return summoner;
	    };
	    SummonerService.prototype.mapSummoner = function (response) {
	        var data = response.json();
	        var result = data[Object.keys(data)[0]];
	        var summoner = ({
	            id: result.id,
	            name: result.name,
	            profileIconId: result.profileIconId,
	            summonerLevel: result.summonerLevel
	        });
	        return summoner;
	    };
	    SummonerService.prototype.getGames = function (summonerId) {
	        var games = this.http.get(this.gameUrl + "/" + summonerId + "/recent" + this.apiKey)
	            .map(this.mapGames);
	        return games;
	    };
	    SummonerService.prototype.mapGames = function (response) {
	        var data = response.json() && response.json().games;
	        var games = data.map(function (game) {
	            var newGame = ({
	                team1Players: game.fellowPlayers.filter(function (x) {
	                    if (x.teamId === 100) {
	                        return x;
	                    }
	                }),
	                team2Players: game.fellowPlayers.filter(function (x) {
	                    if (x.teamId == 200) {
	                        return x;
	                    }
	                }),
	                teamId: game.teamId,
	                stats: game.stats,
	                gameId: game.gameId,
	                ipEarned: game.ipEarned,
	                spell1: game.spell1,
	                spell2: game.spell2,
	                gameMode: game.gameMode,
	                mapId: game.mapId,
	                level: game.level,
	                invalid: game.invalid,
	                subType: game.subType,
	                createDate: game.createDate,
	                championId: game.championId
	            });
	            return newGame;
	        });
	        return games;
	    };
	    return SummonerService;
	}());
	SummonerService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], SummonerService);
	exports.SummonerService = SummonerService;


/***/ },

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var MainComponent = (function () {
	    function MainComponent() {
	    }
	    return MainComponent;
	}());
	MainComponent = __decorate([
	    core_1.Component({
	        selector: 'app',
	        templateUrl: 'app/app.component.html'
	    }),
	    __metadata("design:paramtypes", [])
	], MainComponent);
	exports.MainComponent = MainComponent;


/***/ },

/***/ 100:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var summonerService_1 = __webpack_require__(97);
	var SearchComponent = (function () {
	    function SearchComponent(summonerService) {
	        this.summonerService = summonerService;
	        this.emitter = new core_1.EventEmitter();
	        this.gameEmitter = new core_1.EventEmitter();
	    }
	    SearchComponent.prototype.searchSummoner = function (summonerName) {
	        var _this = this;
	        this.summonerService.searchSummoner(summonerName).subscribe(function (data) {
	            _this.summoner = data;
	            _this.emmitSummoner();
	            _this.summonerService.getGames(_this.summoner.id).subscribe(function (data) {
	                _this.games = data;
	                _this.emmitGames();
	            });
	        });
	    };
	    SearchComponent.prototype.emmitSummoner = function () {
	        this.emitter.emit(this.summoner);
	    };
	    SearchComponent.prototype.emmitGames = function () {
	        this.gameEmitter.emit(this.games);
	    };
	    return SearchComponent;
	}());
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], SearchComponent.prototype, "emitter", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], SearchComponent.prototype, "gameEmitter", void 0);
	SearchComponent = __decorate([
	    core_1.Component({
	        selector: 'lol-search',
	        templateUrl: 'app/SearchComponent/search.component.html'
	    }),
	    __metadata("design:paramtypes", [summonerService_1.SummonerService])
	], SearchComponent);
	exports.SearchComponent = SearchComponent;


/***/ },

/***/ 101:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var summoner_1 = __webpack_require__(102);
	var SummonerComponent = (function () {
	    function SummonerComponent() {
	    }
	    SummonerComponent.prototype.test = function () {
	        console.log(this.summoner);
	    };
	    return SummonerComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", summoner_1.Summoner)
	], SummonerComponent.prototype, "summoner", void 0);
	SummonerComponent = __decorate([
	    core_1.Component({
	        selector: 'lol-summoner',
	        templateUrl: 'app/SummonerComponent/summoner.component.html'
	    }),
	    __metadata("design:paramtypes", [])
	], SummonerComponent);
	exports.SummonerComponent = SummonerComponent;


/***/ },

/***/ 102:
/***/ function(module, exports) {

	"use strict";
	var Summoner = (function () {
	    function Summoner() {
	    }
	    return Summoner;
	}());
	exports.Summoner = Summoner;


/***/ },

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var game_1 = __webpack_require__(104);
	var GameComponent = (function () {
	    function GameComponent() {
	    }
	    return GameComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", game_1.Game)
	], GameComponent.prototype, "game", void 0);
	GameComponent = __decorate([
	    core_1.Component({
	        selector: 'lol-game',
	        templateUrl: 'app/GameComponent/game.component.html'
	    }),
	    __metadata("design:paramtypes", [])
	], GameComponent);
	exports.GameComponent = GameComponent;


/***/ },

/***/ 104:
/***/ function(module, exports) {

	"use strict";
	var Game = (function () {
	    function Game() {
	        this.team1Players = [];
	        this.team2Players = [];
	        this.stats = {};
	    }
	    return Game;
	}());
	exports.Game = Game;


/***/ }

});
//# sourceMappingURL=app.bundle.js.map