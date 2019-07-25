import { Injectable, NgZone } from "@angular/core";
import { SocketIO } from "nativescript-socketio";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})

export class ChatService {

  constructor(
    private zone: NgZone,
    private socketIO: SocketIO
  ) {}

  test(msg) {
    this.socketIO.emit('chat message', msg);
  }
  
  checkConnection() {
    console.log(this.socketIO.connected)
  }

  getMessages() {
    return new Observable(observer => {
      this.socketIO.on('chat message', (data) => {
        this.zone.run(() => observer.next(data));
      });
      return () => {
      }
    })

  }

  closeSocket(){
    this.socketIO.disconnect();
  }

}
