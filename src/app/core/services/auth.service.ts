import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

import { SignUpResponse } from '../interfaces/sign-up-response.interface';
import { SignInResponse } from '../interfaces/sign-in-response.interface';

import { environment } from '../../../environments/environment';
import { AuthStateService } from './auth-state.service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private readonly url = environment.restApiUrl + 'auth/';

	constructor(private httpClient: HttpClient, private authStateService: AuthStateService) {}

	public signUp(user: { name: string; email: string; password: string }): Observable<SignUpResponse> {
		return this.httpClient.post<SignUpResponse>(this.url + 'sign-up', user);
	}

	public signIn(user: { email: string; password: string }): Observable<SignInResponse> {
		return this.httpClient.post<SignInResponse>(this.url + 'sign-in', user).pipe(
			tap(response => {
				localStorage.setItem('access_token', response.access_token);
				this.authStateService.signIn();
			}),
			catchError(error => {
				console.error('Error occurred during sign-in: ', error);
				return throwError(error);
			})
		);
	}

	public logout(): void {
		localStorage.removeItem('access_token');
		this.authStateService.logout();
	}

	public getToken(): string | null {
		return localStorage.getItem('access_token');
	}

	public isSignIn(): boolean {
		return !!this.getToken();
	}
}
