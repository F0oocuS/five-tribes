import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';
import { UserStateService } from '../../../core/services/user-state.service';
import { AuthService } from '../../../core/services/auth.service';
import { AuthStateService } from '../../../core/services/auth-state.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
	private isSignInSubscription: Subscription;
	// TODO need delete this stubs later
	private userNamesList = ['Ihor', 'Vova', 'Arthur', 'Dima', 'Katya', 'Alina', 'Vika'];
	private userEmailsList = ['test1@mail.com', 'test2@mail.com', 'test3@mail.com', 'test4@mail.com'];
	private userPasswordsList = ['123', '123'];
	// end

	public isSignIn: boolean = false;

	constructor(private authStateService: AuthStateService, private authService: AuthService, private cookieService: CookieService) {}

	public ngOnInit(): void {
		this.isSignInSubscription = this.authStateService.isLoggedIn.subscribe((isSignIn: boolean) => this.isSignIn = isSignIn);
	}

	public ngOnDestroy(): void {
		this.isSignInSubscription.unsubscribe();
	}

	public onSignUp(): void {
		this.authService.signUp(
			{
				name: this.getRandomElement(this.userNamesList),
				email: this.getRandomElement(this.userEmailsList),
				password: this.getRandomElement(this.userPasswordsList)
			}
		);
	}

	public onSignIn(number: number): void {
		const user = { email: `test${number}@mail.com`, password: '123' };

		this.authService.signIn(user).subscribe(response => console.log('User sign in!'));
	}

	public onLogout(): void {
		this.authService.logout();
	}

	public getRandomElement<T>(array: T[]): T {
		const randomIndex = Math.floor(Math.random() * array.length);

		return array[randomIndex];
	}

	public setCookie():void {
		this.cookieService.set('someName', 'someValue');
		console.log(this.cookieService.get('someName'));
	}
}
