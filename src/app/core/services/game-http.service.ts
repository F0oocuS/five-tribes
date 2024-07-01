import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { Game } from '../../shared/models/game.model';
import { GameItem } from '../../shared/interfaces/game-item.interface';

@Injectable({
	providedIn: 'root'
})
export class GameHttpService {
	constructor(private httpClient: HttpClient) {}

	public createGame(gameItem: GameItem): Observable<Game> {
		return this.httpClient.post<Game>(environment.restApiUrl + 'games/create', gameItem);
	}

	public getGameById(gameID: number): Observable<Game> {
		return this.httpClient.get<Game>(environment.restApiUrl + 'games/' + gameID);
	}

	public getAllGames(): Observable<GameItem[]> {
		return this.httpClient.get<GameItem[]>(environment.restApiUrl + 'games');
	}
}
