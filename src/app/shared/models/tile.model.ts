import { Position } from './position.model';
import { Meeple } from './meeple.model';

export class Tile {
	public id: number;
	public color: string;
	public victoryPoints: number;
	public imagePath: string;
	public position: Position;
	public meeples: Meeple[];
	public palacesCount: number;
	public palmaTreesCount: number;
	public action: any;
}
