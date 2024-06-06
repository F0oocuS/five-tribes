import { Injectable } from '@angular/core';
import { Game } from '../interfaces/game.interface';

@Injectable({
	providedIn: 'root'
})
export class GamesService {
	private gamesList: Game[] = [
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
}
