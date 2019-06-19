import { Injectable, NgZone } from "@angular/core";
import { SocketIO } from "nativescript-socketio";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})

export class ChatService {

  socket: any;

  constructor(
    private zone: NgZone,
    private io: SocketIO,
  ) {}

  initSocket() {
    this.io.connect();
  }

  test(msg) {
    this.io.emit('chat message', msg);
  }


  getMessages() {
    return new Observable(observer => {
      this.io.on('chat message', (data) => {
        this.zone.run(() => observer.next(data));
      });
      return () => {
        this.io.disconnect();
      }
    })

  }

}
