import { Meeple } from './meeple.interface';
import { Tile } from './tile.interface';

export interface Player {
	id: number;
	score: number;
	gold: number;
	color: string;
	meeples: Meeple[];
	tiles: Tile[];
}
