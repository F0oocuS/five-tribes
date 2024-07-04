import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../shared/models/user.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class UserHttpService {
	constructor(private httpClient: HttpClient) {}

	public createUser(user: User): Observable<User> {
		return this.httpClient.post<User>(environment.restApiUrl + 'users', user);
	}
}
