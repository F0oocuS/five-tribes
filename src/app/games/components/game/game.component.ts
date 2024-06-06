import { Component, OnDestroy, OnInit } from '@angular/core';
import { Game } from '../../interfaces/game.interface';
import { ActivatedRoute } from '@angular/router';

import { GamesService } from '../../services/games.service';

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit, OnDestroy {
	public game: Game | null;
	public map = [
		[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }],
		[{ id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }],
		[{ id: 13 }, { id: 14 }, { id: 15 }, { id: 16 }, { id: 17 }, { id: 18 }],
		[{ id: 19 }, { id: 20 }, { id: 21 }, { id: 22 }, { id: 23 }, { id: 24 }],
		[{ id: 25 }, { id: 26 }, { id: 27 }, { id: 28 }, { id: 29 }, { id: 30 }]
	];

	constructor(private gamesService: GamesService, private activateRoute: ActivatedRoute) {
	}

	public ngOnInit(): void {
		const gameId = this.activateRoute.snapshot.paramMap.get('id');

		if (gameId) {
			const game = this.gamesService.getGame(+gameId);

			this.game = game ? game : null;
		}
	}

	public ngOnDestroy(): void {
	}
}


