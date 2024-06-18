import { ResourceType } from '../types/resource.type';

export class Resource {
	public id: number;
	public name: string;
	public type: ResourceType;
	public imagePath: string;
}
