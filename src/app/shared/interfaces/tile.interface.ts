import { Position } from './position.interface';
import { Meeple } from './meeple.interface';

export interface Tile {
	id: number;
	color: string;
	victoryPoints: number;
	position: Position;
	meeples: Meeple[];
	palacesCount: number;
	palmaTreesCount: number;
	action: any;
}
