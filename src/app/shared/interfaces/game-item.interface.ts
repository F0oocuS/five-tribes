import { AccessType } from '../types/access.type';

export interface GameItem {
	id?: number;
	title: string;
	accessType: AccessType;
	activePlayerId?: number;
	maxPlayerCount: number;
	password?: string;
	creatorId: number;
}
