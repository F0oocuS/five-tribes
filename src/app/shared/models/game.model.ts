import { Player } from './player.model';
import { Tile } from './tile.model';
import { Djinn } from './djinn.model';
import { Resource } from './resource.model';

export class Game {
	public id: number;
	public tiles: Tile[];
	public players: Player[];
	public currentPlayer: Player;
	public djinns: Djinn[];
	public activeDjinns: Djinn[];
	public resources: Resource[];
	public activeResources: Resource[];
}