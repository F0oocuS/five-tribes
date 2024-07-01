import { Position } from './position.model';
import { Meeple } from './meeple.model';

import { TileType } from '../types/tile.type';
import { TileColorType } from '../types/tile-color.type';

import { TilesStub } from '../../../assets/stubs/core/tiles.stub';

export class Tile {
	public id: number;
	public color: TileColorType;
	public victoryPoints: number;
	public imagePath: string;
	public type: TileType;
	public meeples: string;
	public palacesCount: number;
	public palmaTreesCount: number;
	public action: any;
	public x: number;
	public y: number;
}
