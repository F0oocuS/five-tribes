import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from '../../shared/interfaces/game.interface';

@Injectable({
	providedIn: 'root'
})
export class GameStateService {
	// TODO need to remove this one
	private gamesList: any = [
		{ id: 1, title: 'Game 1' },
		{ id: 2, title: 'Game 2' },
		{ id: 3, title: 'Game 3' },
		{ id: 4, title: 'Game 4' },
		{ id: 5, title: 'Game 5' },
		{ id: 6, title: 'Game 6' }
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
