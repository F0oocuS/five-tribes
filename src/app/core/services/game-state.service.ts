import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from '../../shared/models/game.model';

@Injectable({
	providedIn: 'root'
})
export class GameStateService {
	// TODO need to remove this one
	private gamesList: Game[] = [
		{ id: 1,title: 'Game 1', tiles: [], players: [], currentPlayer: null, djinns: [], activeDjinns: [], resources: [], activeResources: [] },
		{ id: 2,title: 'Game 2', tiles: [], players: [], currentPlayer: null, djinns: [], activeDjinns: [], resources: [], activeResources: [] },
		{ id: 3,title: 'Game 3', tiles: [], players: [], currentPlayer: null, djinns: [], activeDjinns: [], resources: [], activeResources: [] },
		{ id: 4,title: 'Game 4', tiles: [], players: [], currentPlayer: null, djinns: [], activeDjinns: [], resources: [], activeResources: [] },
		{ id: 5,title: 'Game 5', tiles: [], players: [], currentPlayer: null, djinns: [], activeDjinns: [], resources: [], activeResources: [] },
		{ id: 6,title: 'Game 6', tiles: [], players: [], currentPlayer: null, djinns: [], activeDjinns: [], resources: [], activeResources: [] }
	];

	constructor() {}

	public getAllGames(): Game[] {
		return this.gamesList;
	}

	public getGame(id: number): Game | undefined {
		return [...this.gamesList].find(game => game.id === id);
	}

	// TODO end of removing

	private gameStateSubject = new BehaviorSubject<any>(null);
	gameState$ = this.gameStateSubject.asObservable();

	setGameState(gameState: Game) {
		this.gameStateSubject.next(gameState);
	}
}
