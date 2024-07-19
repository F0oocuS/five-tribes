import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { User } from '../../shared/models/user.model';
import { SignInResponse } from '../interfaces/sign-in-response.interface';
import { AuthService } from './auth.service';
import { SignUpResponse } from '../interfaces/sign-up-response.interface';

@Injectable({
	providedIn: 'root'
})
export class UserStateService {
	private userSubject = new BehaviorSubject<User | null>(null);

	public user$ = this.userSubject.asObservable();

	constructor(private authService: AuthService) {}

	private setUserState(user: User | null): void {
		this.userSubject.next(user);
	}

	public signUpUser(user: { name: string; email: string; password: string }): void {
		this.authService.signUp(user).subscribe((user: SignUpResponse) => {
			// this.setUserState(user);
		});
	}

	public signInUser(user: { email: string; password: string }): void {
		this.authService.signIn(user).subscribe((response: SignInResponse) => {
			console.log(response);
		})
	}

	public clearUser(): void {
		this.setUserState(null);
	}


}
