import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { GameStateService } from '../../../../core/services/game-state.service';

import { Game } from '../../../../shared/models/game.model';
import { User } from '../../../../shared/models/user.model';
import { UserStateService } from '../../../../core/services/user-state.service';

@Component({
	selector: 'app-game-lobby',
	templateUrl: './game-lobby.component.html',
	styleUrl: './game-lobby.component.scss'
})
export class GameLobbyComponent implements OnInit {
	private gameSubscription: Subscription;
	private userSubscription: Subscription;

	public game: Game | null;
	public user: User | null;


	constructor(private gameStateService: GameStateService, private userStateService: UserStateService, private activatedRoute: ActivatedRoute) {}

	public ngOnInit(): void {
		const gameId = this.activatedRoute.snapshot.paramMap.get('id');

		if (gameId) {
			this.gameStateService.getGame(+gameId);
		}

		this.gameSubscription = this.gameStateService.game$.subscribe((game: Game | null) => this.game = game);
		this.userSubscription = this.userStateService.user$.subscribe((user: User | null) => this.user = user);
	}

	public ngOnDestroy(): void {
		this.gameSubscription.unsubscribe();
		this.userSubscription.unsubscribe();
	}

	public onJoinToGame(): void {
		console.log('Join to game with ID = ' + this.game?.id);

		console.log(this.user);
		console.log(this.game);
	}

	public onLeaveTheGame(): void {
		console.log('Leave the game with ID = ' + this.game?.id);
	}
}
