import { DjinnsStub } from '../../../assets/stubs/core/djinns.stub';

export class Djinn {
	public id: number;
	public name: string;
	public victoryPoints: number;
	public imagePath: string;
	public effect: string;
	public price: string | null;

	public static getDjinnsList(): Djinn[] {
		return [...DjinnsStub];
	}
}
