import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { Game } from '../../shared/models/game.model';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class GameHttpService {
	constructor(private httpClient: HttpClient) {}

	public getGameById(gameID: number): Observable<Game> {
		return this.httpClient.get<Game>(environment.restApiUrl + 'games/' + gameID);
	}

	public getAllGames(): Observable<Game[]> {
		return this.httpClient.get<Game[]>(environment.restApiUrl + 'games');
	}

	public createGame(): Observable<Game> {
		return this.httpClient.get<Game>(environment.restApiUrl + 'games/create');
	}

	public updateGame(game: Game): Observable<Game> {
		return this.httpClient.post<Game>(environment.restApiUrl + 'games/update', game);
	}
}
