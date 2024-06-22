import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Game } from '../../shared/models/game.model';
import { GameHttpService } from './game-http.service';

@Injectable({
	providedIn: 'root'
})
export class GameStateService {
	private gamesListSubject = new BehaviorSubject<Game[]>([]);
	private gameSubject = new BehaviorSubject<Game | null>(null);

	public gamesList$: Observable<Game[]> = this.gamesListSubject.asObservable();
	public game$: Observable<Game | null> = this.gameSubject.asObservable();

	constructor(private gameHttpService: GameHttpService) {}

	private setGamesListState(games: Game[]): void {
		this.gamesListSubject.next(games);
	}

	private setGameState(game: Game): void {
		this.gameSubject.next(game);
	}

	public getAllGames():void {
		this.gameHttpService.getAllGames().subscribe((games: Game[]) => {
			this.setGamesListState(games);
		});
	}

	public createGame(): void {
		this.gameHttpService.createGame().subscribe((game: Game) => {
			const currentGames = this.gamesListSubject.value;
			const updatedGames = [...currentGames, game];

			this.setGamesListState(updatedGames);
		});
	}

	public getGame(id: number): void {
		this.gameHttpService.getGameById(id).subscribe((game: Game) => {
			this.setGameState(game);
			console.log(game);
		});
	}
}
