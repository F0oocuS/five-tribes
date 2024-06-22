import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameStateService } from '../../../../core/services/game-state.service';
import { Game } from '../../../../shared/models/game.model';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-games-list',
	templateUrl: './games-list.component.html',
	styleUrl: './games-list.component.scss'
})
export class GamesListComponent implements OnInit, OnDestroy {
	private gamesListSubscription: Subscription;

	public gamesList: Game[] = [];

	constructor(private gameStateService: GameStateService) {}

	public ngOnInit(): void {
		this.gamesListSubscription = this.gameStateService.gamesList$.subscribe((games: Game[]) => {
			this.gamesList = games;
		});

		this.gameStateService.getAllGames();
	}

	public ngOnDestroy(): void {
		this.gamesListSubscription.unsubscribe();
	}

	public onCreateGame(): void {
		this.gameStateService.createGame();
	}
}
