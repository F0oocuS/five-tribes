import { Player } from './player.model';
import { Tile } from './tile.model';
import { Djinn } from './djinn.model';
import { Resource } from './resource.model';
import { User } from './user.model';
import { AccessType } from '../types/access.type';

export class Game {
	public id: number;
	public title: string;
	public tiles: Tile[];
	public players: Player[];
	public maxPlayerCount: number;
	public activePlayerId: number | null;
	public djinns: Djinn[];
	public resources: Resource[];
	public creatorId: number;
	public accessType: AccessType;
	public password?: string;
}
