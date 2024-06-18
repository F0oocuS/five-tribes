import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
// import { io, Socket } from 'socket.io-client';

@Injectable({
	providedIn: 'root'
})
export class SocketService {
	// private socket: Socket;

	constructor() {
		// this.socket = io('http://localhost:3000');
	}

	public listen(event: string): Observable<any> {
		const listener = new Subject<any>();
		//
		// this.socket.on(event, (data) => {
		// 	listener.next(data);
		// });
		//
		return listener.asObservable();
	}

	public emit(event: string, data: any) {
		// this.socket.emit(event, data);
	}
}
