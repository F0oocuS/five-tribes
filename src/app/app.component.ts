import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './shared/services/websocket.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
	public message: string = '';
	public messages: string[] = [];
	title = 'five-tribes';

	constructor(private websocketService: WebsocketService) {}

	public ngOnInit(): void {
		this.websocketService.getMessage().subscribe((message: string) => {
			this.messages.push(message);
		});
	}

	public sendMessage(): void {
		this.websocketService.sendMessage(this.message);
		this.message = '';
	}
}
