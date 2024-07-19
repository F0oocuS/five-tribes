import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthStateService {
	private loggedIn = new BehaviorSubject<boolean>(this.hasToken());

	private hasToken(): boolean {
		return !!localStorage.getItem('access_token');
	}

	public get isLoggedIn(): Observable<boolean> {
		return this.loggedIn.asObservable();
	}

	public signIn(): void {
		this.loggedIn.next(true);
	}

	public logout(): void {
		this.loggedIn.next(false);
	}
}
