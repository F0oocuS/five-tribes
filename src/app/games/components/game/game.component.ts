import { Component, OnDestroy, OnInit } from '@angular/core';
import { Game } from '../../interfaces/game.interface';
import { ActivatedRoute } from '@angular/router';

import { GamesService } from '../../services/games.service';
import { HelperService } from '../../../shared/services/helper.service';
import { log } from '@angular-devkit/build-angular/src/builders/ssr-dev-server';

interface Cell {
	id: number;
	figures: any[];
	isActive: boolean;
	isNeighbor: boolean;
}

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrl: './game.component.scss'
})

export class GameComponent implements OnInit, OnDestroy {
	public figures = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
	public shuffledFigures: any[];
	public selectedCell: Cell | null;
	public selectedCellNeighbor: any[] = [];
	// public totalFigure = 90;
	// public white = 20;
	// public yellow = 16;
	// public green = 18;
	// public red = 18;
	// public blue = 18;

	public game: Game | null;
	public map: Cell[][] = [
		[{ id: 1, isNeighbor: false, isActive: false, figures: [] }, { id: 2, isNeighbor: false, isActive: false, figures: [] }, { id: 3, isNeighbor: false, isActive: false, figures: [] }, { id: 4, isNeighbor: false, isActive: false, figures: [] }, { id: 5, isNeighbor: false, isActive: false, figures: [] }, { id: 6, isNeighbor: false, isActive: false, figures: [] }],
		[{ id: 7, isNeighbor: false, isActive: false, figures: [] }, { id: 8, isNeighbor: false, isActive: false, figures: [] }, { id: 9, isNeighbor: false, isActive: false, figures: [] }, { id: 10, isNeighbor: false, isActive: false, figures: [] }, { id: 11, isNeighbor: false, isActive: false, figures: [] }, { id: 12, isNeighbor: false, isActive: false, figures: [] }],
		[{ id: 13, isNeighbor: false, isActive: false, figures: [] }, { id: 14, isNeighbor: false, isActive: false, figures: [] }, { id: 15, isNeighbor: false, isActive: false, figures: [] }, { id: 16, isNeighbor: false, isActive: false, figures: [] }, { id: 17, isNeighbor: false, isActive: false, figures: [] }, { id: 18, isNeighbor: false, isActive: false, figures: [] }],
		[{ id: 19, isNeighbor: false, isActive: false, figures: [] }, { id: 20, isNeighbor: false, isActive: false, figures: [] }, { id: 21, isNeighbor: false, isActive: false, figures: [] }, { id: 22, isNeighbor: false, isActive: false, figures: [] }, { id: 23, isNeighbor: false, isActive: false, figures: [] }, { id: 24, isNeighbor: false, isActive: false, figures: [] }],
		[{ id: 25, isNeighbor: false, isActive: false, figures: [] }, { id: 26, isNeighbor: false, isActive: false, figures: [] }, { id: 27, isNeighbor: false, isActive: false, figures: [] }, { id: 28, isNeighbor: false, isActive: false, figures: [] }, { id: 29, isNeighbor: false, isActive: false, figures: [] }, { id: 30, isNeighbor: false, isActive: false, figures: [] }]
	];

	constructor(private gamesService: GamesService, private activateRoute: ActivatedRoute, private helperService: HelperService) {}

	public ngOnInit(): void {
		this.shuffleFigures();
		// this.addTokensToMap();

		// console.log('-------------------------------------------------------------');
		// console.log(this.figures);
		// console.log(this.shuffledFigures);
		// console.log('-------------------------------------------------------------');

		const gameId = this.activateRoute.snapshot.paramMap.get('id');

		if (gameId) {
			const game = this.gamesService.getGame(+gameId);

			this.game = game ? game : null;
		}
	}

	public ngOnDestroy(): void {}

	public shuffleFigures(): void {
		this.shuffledFigures = this.helperService.shuffleArray([...this.figures]);
	}

	public addTokensToMap(): void {
		for(let i = 0; i < this.map.length; i++) {
			for(let j = 0; j < this.map[i].length; j++) {
				setTimeout(() => {
					const removedElements = this.shuffledFigures.splice(-3);

					this.map[i][j].figures = this.map[i][j].figures.concat(removedElements);
				}, (i + j) * 100);
			}
		}
	}

	public addAllTokensToMap(): void {
		// for (let i = 0; i < 30; i++) {
		// 	setTimeout(() => {
		// 		this.addTokensToMap();
		// 	}, i * 100);
		// }
	}

	public clearMap(): void {
		this.clearNeighbor();
		this.removeSelectedCell();

		for(let i = 0; i < this.map.length; i++) {
			for(let j = 0; j < this.map[i].length; j++) {
				this.map[i][j].figures = [];
			}
		}
	}

	public clickOnCell(cell: Cell): void {
		this.selectCell(cell);
		this.getCellNeighbors(cell);

		for (let i = 0; i < this.selectedCellNeighbor.length; i++) {
			if (this.selectedCellNeighbor[i]) {
				this.selectedCellNeighbor[i].isNeighbor = true;
			}
		}

		console.log(this.selectedCellNeighbor);
		console.log(9999999999);





		/*if (!this.selectedCell) {
			this.selectedCell = cell;
		} else {
			if (this.selectedCell.figures.length) {
				const figure = this.selectedCell.figures.pop();

				if (cell.figures.includes(figure)) {
					cell.figures = cell.figures.concat(figure);
				} else {
					this.selectedCell.figures = this.selectedCell.figures.concat(figure);
				}
			}
		}*/
	}

	public selectCell(cell: Cell): void {
		this.clearNeighbor();
		this.removeSelectedCell();
		this.selectedCell = cell;
		this.selectedCell.isActive = true;
	}

	public removeSelectedCell(): void {
		if (this.selectedCell) {
			this.selectedCell.isActive = false;
		}

		this.selectedCellNeighbor = [];

		this.selectedCell = null;
	}

	public getCellNeighbors(cell: Cell): void {
		const { i, j } = this.getCellIndexes(cell);
		const result = [];

		if (this.map[i][j] === cell) {
			if (this.getCellNeighbor(i - 1,j)) {
				result.push(this.getCellNeighbor(i - 1, j));
			}

			if (this.getCellNeighbor(i + 1, j)) {
				result.push(this.getCellNeighbor(i + 1, j));
			}

			if (this.getCellNeighbor(i, j - 1)) {
				result.push(this.getCellNeighbor(i, j - 1));
			}

			if (this.getCellNeighbor(i, j + 1)) {
				result.push(this.getCellNeighbor(i, j + 1));
			}
		}

		this.selectedCellNeighbor = this.selectedCellNeighbor.concat(result);
	}

	public getCellNeighbor(i: number, j: number): Cell | null {
		return this.map[i]?.[j] ?? null;
	}

	public getCellIndexes(cell: Cell): any {
		for (let i = 0; i < this.map.length; i++) {
			const index = this.map[i].indexOf(cell);

			if (index !== -1) {
				return { i, j: index };
			}
		}

		return { i: -1, j: -1 };
	}

	public clearNeighbor(): void {
		for (let i = 0; i < this.selectedCellNeighbor.length; i++) {
			this.selectedCellNeighbor[i].isNeighbor = false;
		}

		this.selectedCellNeighbor = [];
	}
}

