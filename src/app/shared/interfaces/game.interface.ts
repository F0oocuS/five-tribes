import { Player } from './player.interface';
import { Tile } from './tile.interface';

export interface Game {
	id: number;
	players: Player[];
	currentPlayer: Player;
	tiles: Tile[];
}
