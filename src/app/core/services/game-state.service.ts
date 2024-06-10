import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from '../../shared/interfaces/game.interface';

@Injectable({
	providedIn: 'root'
})
export class GameStateService {
	private gameStateSubject = new BehaviorSubject<Game>(null);
	gameState$ = this.gameStateSubject.asObservable();

	constructor() {}

	setGameState(gameState: Game) {
		this.gameStateSubject.next(gameState);
	}
}
