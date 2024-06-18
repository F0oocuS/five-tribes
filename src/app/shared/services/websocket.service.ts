import { Injectable } from '@angular/core';
// import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class WebsocketService {
	// private socket: Socket;
	// private readonly url: string = 'http://localhost:3000';

	constructor() {
		// this.socket = io(this.url);
	}

	public sendMessage(message: string): void {
		// this.socket.emit('message', message);
	}

	public getMessage(): Observable<string> {
		return new Observable(observer => {
			// this.socket.on('message', (message: string) => {
			// 	observer.next(message);
			// });
		});
	}
}
