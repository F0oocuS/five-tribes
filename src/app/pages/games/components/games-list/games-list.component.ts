import { Component } from '@angular/core';
import { GameStateService } from '../../../../core/services/game-state.service';
import { Game } from '../../../../shared/models/game.model';

@Component({
	selector: 'app-games-list',
	templateUrl: './games-list.component.html',
	styleUrl: './games-list.component.scss'
})
export class GamesListComponent {
	public gamesList: Game[] = [];

	constructor(private gameStateService: GameStateService) {}

	public ngOnInit(): void {
		this.gamesList = this.gameStateService.getAllGames();
		console.log(this.gamesList);
	}
}
