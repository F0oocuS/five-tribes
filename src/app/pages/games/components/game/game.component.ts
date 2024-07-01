import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Game } from '../../../../shared/models/game.model';
import { GameStateService } from '../../../../core/services/game-state.service';
import { Subscription } from 'rxjs';
import { UserStateService } from '../../../../core/services/user-state.service';
import { User } from '../../../../shared/models/user.model';

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrl: './game.component.scss'
})
export class GameComponent {
	private userSubscription: Subscription;
	private gameSubscription: Subscription;

	public game: Game | null = null;
	public user: User | null = null;

	constructor(private activatedRoute: ActivatedRoute, private gameStateService: GameStateService, private userStateService: UserStateService) {}

	//==================================================
	//==================================================

	// public confirmedCell: any | null = null;
	//
	// public selectedCell: any = null;
	// public activeCell: any | null = null;
	// TODO fix selectedCellNeighbor and activeCellNeighbor types
	// public selectedCellNeighbor: any[] = [];
	// public activeCellNeighbor: any[] = [];
	// public confirmedCellNeighbor: any[] = [];

	// public selectedFigure: any = null;
	//
	// public playerFigures: any[] = [];

	//==================================================
	//==================================================

	public ngOnInit(): void {
		const gameId = this.activatedRoute.snapshot.paramMap.get('id');

		if (gameId) {
			this.gameStateService.getGame(+gameId);
		}

		this.gameSubscription = this.gameStateService.game$.subscribe((game: Game | null) => {
			this.game = game;

			console.log('');
			console.log('============= GAME LOG START =============');
			console.log(game);
			console.log('============= GAME LOG END =============');
			console.log('');
		});

		this.userSubscription = this.userStateService.user$.subscribe((user: User | null) => {
			this.user = user;

			console.log('');
			console.log('============= USER LOG START =============');
			console.log(this.user);
			console.log('============= USER LOG END =============');
			console.log('');
		});
	}

	public ngOnDestroy(): void {
		this.gameSubscription.unsubscribe();
		this.userSubscription.unsubscribe();
	}

	public onConnectToGame() {}

	public shuffleFigures(): void {
		// this.shuffledFigures = this.helperService.shuffleArray([...this.figures]);
	}

	public addTokensToMap(): void {
		// for(let i = 0; i < this.map.length; i++) {
		// 	for(let j = 0; j < this.map[i].length; j++) {
		// 		setTimeout(() => {
		// 			const removedElements = this.shuffledFigures.splice(-3);
		//
		// 			this.map[i][j].figures = this.map[i][j].figures.concat(removedElements);
		// 		}, (i + j) * 100);
		// 	}
		// }
	}

	public addAllTokensToMap(): void {
		// for (let i = 0; i < 30; i++) {
		// 	setTimeout(() => {
		// 		this.addTokensToMap();
		// 	}, i * 100);
		// }
	}

	public clearMap(): void {
		// this.clearNeighbor();
		// this.removeSelectedCell();
		//
		// for(let i = 0; i < this.map.length; i++) {
		// 	for(let j = 0; j < this.map[i].length; j++) {
		// 		this.map[i][j].figures = [];
		// 	}
		// }
	}

	public clickOnCell(cell: any): void {
		// this.selectCell(cell);
		// this.getCellNeighbors(cell);
		//
		// if (this.isConfirmSelectedCell && this.selectedFigure) {
		// 	const cellToMove = this.activeCellNeighbor.find(item => item.id === this.selectedCell?.id);
		//
		// 	if (cellToMove.figures.includes(this.selectedFigure) || cellToMove.figures.length === 0) {
		// 		const figure = this.selectedFigure;
		//
		// 		this.removeFigureFromCell();
		//
		// 		this.selectedCell?.figures.push(this.selectedFigure);
		//
		// 		this.selectedFigure = null;
		//
		// 		this.activeCell = this.selectedCell;
		// 		this.activeCellNeighbor = this.selectedCellNeighbor;
		//
		// 		if (!this.confirmedCell?.figures.length) {
		// 			this.getAllFiguresAfterTurn(figure);
		// 			this.endTurn();
		// 		}
		// 	}
		// }
	}

	public selectCell(cell: any): void {
		// this.clearNeighbor();
		// this.removeSelectedCell();
		// this.selectedCell = cell;
		// this.selectedCell.isActive = true;
	}

	public removeSelectedCell(): void {
		// if (this.selectedCell) {
		// 	this.selectedCell.isActive = false;
		// }
		//
		// this.clearNeighbor();
		// // this.clearConfirmSelectedCell();
		// this.selectedCell = null;
	}

	public getCellNeighbors(cell: any): void {
		// const { i, j } = this.getCellIndexes(cell);
		// const result = [];
		//
		// if (this.map[i][j] === cell) {
		// 	if (this.getCellNeighbor(i - 1,j)) {
		// 		result.push(this.getCellNeighbor(i - 1, j));
		// 	}
		//
		// 	if (this.getCellNeighbor(i + 1, j)) {
		// 		result.push(this.getCellNeighbor(i + 1, j));
		// 	}
		//
		// 	if (this.getCellNeighbor(i, j - 1)) {
		// 		result.push(this.getCellNeighbor(i, j - 1));
		// 	}
		//
		// 	if (this.getCellNeighbor(i, j + 1)) {
		// 		result.push(this.getCellNeighbor(i, j + 1));
		// 	}
		// }
		//
		// this.selectedCellNeighbor = this.selectedCellNeighbor.concat(result);
		//
		// for (let i = 0; i < this.selectedCellNeighbor.length; i++) {
		// 	if (this.selectedCellNeighbor[i]) {
		// 		this.selectedCellNeighbor[i].isNeighbor = true;
		// 	}
		// }
	}

	public getCellNeighbor(i: number, j: number): any | null {
		// return this.map[i]?.[j] ?? null;
	}

	public getCellIndexes(cell: any): any {
		// for (let i = 0; i < this.map.length; i++) {
		// 	const index = this.map[i].indexOf(cell);
		//
		// 	if (index !== -1) {
		// 		return { i, j: index };
		// 	}
		// }
		//
		// return { i: -1, j: -1 };
	}

	public clearNeighbor(): void {
		// for (let i = 0; i < this.selectedCellNeighbor.length; i++) {
		// 	this.selectedCellNeighbor[i].isNeighbor = false;
		// }
		//
		// this.selectedCellNeighbor = [];
	}

	public confirmSelectedCell(): void {
		// this.confirmedCell = this.selectedCell;
		// this.confirmedCellNeighbor = this.selectedCellNeighbor;
		// this.activeCell = this.selectedCell;
		// this.activeCellNeighbor = this.selectedCellNeighbor;
		// this.isConfirmSelectedCell = true;

	}

	public clearConfirmSelectedCell(): void {
		// this.confirmedCell = null;
		// this.confirmedCellNeighbor = [];
		// this.isConfirmSelectedCell = false;
	}

	public selectFigure(figure: any): void {
		// console.log(figure);
		// this.selectedFigure = figure;
	}

	public removeFigureFromCell(): void {
		// const figuresArray = this.confirmedCell?.figures || [];
		// const index = this.confirmedCell?.figures.indexOf(this.selectedFigure);
		//
		// if (index || index === 0) {
		// 	if (index !== -1) {
		// 		figuresArray.splice(index, 1);
		// 	}
		// }
	}

	public clearActiveCell(): void {
		// this.activeCell = null;
		// this.activeCellNeighbor = [];
	}

	public getAllFiguresAfterTurn(figure: any): void {
		// const keptValue: any[] = [];
		//
		// if (this.selectedCell && this.selectedCell.figures) {
		// 	this.selectedCell.figures.forEach((item: any) => {
		// 		item === figure ? this.playerFigures.push(item) : keptValue.push(item);
		// 	});
		//
		// 	this.selectedCell.figures = this.selectedCell.figures.filter((item: any) => item !== figure);
		// }
	}

	public endTurn() {
		// this.clearConfirmSelectedCell();
		// this.removeSelectedCell();
		// this.clearActiveCell();
	}
}
