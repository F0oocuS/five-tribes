import { Component } from '@angular/core';
import { GameStateService } from '../../../../core/services/game-state.service';

@Component({
	selector: 'app-games-list',
	templateUrl: './games-list.component.html',
	styleUrl: './games-list.component.scss'
})
export class GamesListComponent {
	public gamesList: any = [];

	constructor(private gameStateService: GameStateService) {}

	public ngOnInit(): void {
		console.log(this.gamesList);

		this.gamesList = this.gameStateService.getAllGames();

		console.log(this.gamesList);
	}
}
