import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';
import { UserStateService } from '../../../core/services/user-state.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
	// TODO need delete this stubs later
	private userNamesList = ['Ihor', 'Vova', 'Arthur', 'Dima', 'Katya', 'Alina', 'Vika'];
	private userEmailsList = ['test1@mail.com', 'test2@mail.com', 'test3@mail.com', 'test4@mail.com'];
	private userPasswordsList = ['123', '123'];
	// end

	private userSubscription: Subscription;

	public user: User | null;

	constructor(private userStateService: UserStateService, private authService: AuthService) {}

	public ngOnInit(): void {
		this.userSubscription = this.userStateService.user$.subscribe((user: User | null) => this.user = user);
	}

	public ngOnDestroy(): void {
		this.userSubscription.unsubscribe();
	}

	public onSignUp(): void {
		this.userStateService.createUser(
			{
				name: this.getRandomElement(this.userNamesList),
				email: this.getRandomElement(this.userEmailsList),
				password: this.getRandomElement(this.userPasswordsList)
			}
		);
	}

	public onSignIn(number: number): void {
		const user = { email: `test${number}@mail.com`, password: '123' };

		this.userStateService.signIn(user);
	}

	public onLogout(): void {
		this.userStateService.clearUser();
	}

	public getRandomElement<T>(array: T[]): T {
		const randomIndex = Math.floor(Math.random() * array.length);

		return array[randomIndex];
	}
}
