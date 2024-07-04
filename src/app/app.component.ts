import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './shared/services/websocket.service';
import { Subscription } from 'rxjs';
import { UserStateService } from './core/services/user-state.service';
import { User } from './shared/models/user.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
	public message: string = '';
	public messages: string[] = [];
	title = 'five-tribes';

	constructor(private websocketService: WebsocketService, private userStateService: UserStateService) {}

	public ngOnInit(): void {
		const user = window.localStorage.getItem('user');

		if (!user) {
			const user: User = {
				id: new Date().getTime(),
				name: 'Ihor',
				email: 'test@mail.com',
				password: 'test-token'
			}
			// this.userStateService.createUser(user);
			window.localStorage.setItem('user', JSON.stringify(user));
		} else {
			// this.userStateService.createUser(JSON.parse(user));
		}

		this.websocketService.getMessage().subscribe((message: string) => {
			this.messages.push(message);
		});
	}

	public sendMessage(): void {
		this.websocketService.sendMessage(this.message);
		this.message = '';
	}
}
