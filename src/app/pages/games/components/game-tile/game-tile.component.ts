import { Component, Input } from '@angular/core';

import { Tile } from '../../../../shared/models/tile.model';

@Component({
	selector: 'app-game-tile',
	templateUrl: './game-tile.component.html',
	styleUrl: './game-tile.component.scss'
})
export class GameTileComponent {
	@Input()
	public tile: Tile;

	public meeples: number[];

	public ngOnInit(): void {
		this.getMeeplesArrayFromString();
	}

	public getMeeplesArrayFromString(): void {
		this.meeples = this.tile.meeples.split('').map(item => parseInt(item));
	}
}
