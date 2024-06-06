import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { Game } from '../../interfaces/game.interface';

@Component({
	selector: 'app-games-list',
	templateUrl: './games-list.component.html',
	styleUrl: './games-list.component.scss'
})
export class GamesListComponent implements OnInit {
	public gamesList: Game[] = [];

	constructor(private gamesService: GamesService) {}

	public ngOnInit(): void {
		console.log(this.gamesList);

		this.gamesList = this.gamesService.getAllGames();

		console.log(this.gamesList);
	}
}
