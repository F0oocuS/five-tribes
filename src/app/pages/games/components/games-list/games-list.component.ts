import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameStateService } from '../../../../core/services/game-state.service';
import { Game } from '../../../../shared/models/game.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { GameItem } from '../../../../shared/interfaces/game-item.interface';

@Component({
	selector: 'app-games-list',
	templateUrl: './games-list.component.html',
	styleUrl: './games-list.component.scss'
})
export class GamesListComponent implements OnInit, OnDestroy {
	private gamesListSubscription: Subscription;

	public gamesList: GameItem[] = [];

	constructor(private gameStateService: GameStateService, private router: Router) {}

	public ngOnInit(): void {
		this.gamesListSubscription = this.gameStateService.gamesList$.subscribe((games: GameItem[]) => {
			this.gamesList = games;
		});

		this.gameStateService.getAllGames();
	}

	public ngOnDestroy(): void {
		this.gamesListSubscription.unsubscribe();
	}

	public onCreateGame(): void {
		const gameItem: GameItem = {
			title: 'First game',
			accessType: 'public',
			maxPlayerCount: 3,
			creatorId: 1,
		}

		this.gameStateService.createGame(gameItem);
	}

	public onConnectToGame(gameItem: GameItem): void {}
}
