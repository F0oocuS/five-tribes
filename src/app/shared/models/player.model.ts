import { Meeple } from './meeple.model';
import { Tile } from './tile.model';
import { Resource } from './resource.model';
import { Djinn } from './djinn.model';
import { User } from './user.model';


export class Player {
	public id: number;
	public score: number;
	public gold: number;
	public color: string;
	public camelCount: number;
	public meeples: string;
	public userId: number;
	public gameId: number;
	public tiles: Tile[];
	public resources: Resource[];
	public djinn: Djinn[];
}
