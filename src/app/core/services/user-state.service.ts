import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { User } from '../../shared/models/user.model';
import { UserHttpService } from './user-http.service';

@Injectable({
	providedIn: 'root'
})
export class UserStateService {
	private userSubject = new BehaviorSubject<User | null>(null);

	public user$ = this.userSubject.asObservable();

	constructor(private userHttpService: UserHttpService) {}

	private setUserState(user: User | null): void {
		this.userSubject.next(user);
	}

	public createUser(user: User): void {
		this.userHttpService.createUser(user).subscribe((user: User | null) => {
			this.setUserState(user);
		});
	}

	public clearUser(): void {
		this.setUserState(null);
	}


}
