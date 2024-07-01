import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Game } from '../../shared/models/game.model';
import { GameHttpService } from './game-http.service';
import { GameItem } from '../../shared/interfaces/game-item.interface';

@Injectable({
	providedIn: 'root'
})
export class GameStateService {
	private gamesListSubject = new BehaviorSubject<GameItem[]>([]);
	private gameSubject = new BehaviorSubject<Game | null>(null);

	public gamesList$: Observable<GameItem[]> = this.gamesListSubject.asObservable();
	public game$: Observable<Game | null> = this.gameSubject.asObservable();

	constructor(private gameHttpService: GameHttpService) {}

	public createGame(gameItem: GameItem): void {
		this.gameHttpService.createGame(gameItem).subscribe((game: Game) => {
			const gameItem: GameItem = {
				id: game.id,
				title: game.title,
				accessType: game.accessType,
				maxPlayerCount: game.maxPlayerCount,
				creatorId: game.creatorId
			}

			console.log(gameItem);
			const currentGames = this.gamesListSubject.value;
			const updatedGames = [...currentGames, gameItem];

			this.setGamesListState(updatedGames);
		});
	}

	private setGamesListState(gameItems: GameItem[]): void {
		this.gamesListSubject.next(gameItems);
	}

	private setGameState(game: Game): void {
		this.gameSubject.next(game);
	}

	public getAllGames(): void {
		this.gameHttpService.getAllGames().subscribe((gameItems: GameItem[]) => {
			this.setGamesListState(gameItems);
		});
	}

	public getGame(id: number): void {
		this.gameHttpService.getGameById(id).subscribe((game: Game) => {
			this.setGameState(game);
		});
	}
}
