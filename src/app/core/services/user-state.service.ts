import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { User } from '../../shared/models/user.model';

@Injectable({
	providedIn: 'root'
})
export class UserStateService {
	private userSubject = new BehaviorSubject<User | null>(null);

	public user$ = this.userSubject.asObservable();

	public createUser(user: User): void {
		this.userSubject.next(user);
	}

	constructor() {}
}
