import { Component, OnInit, OnDestroy } from "@angular/core";
import { SocketIO } from "nativescript-socketio";
import { CardView } from 'nativescript-cardview';
import { registerElement } from 'nativescript-angular/element-registry';

registerElement('CardView', () => CardView as any);

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent { 


    constructor(
        private socketIO: SocketIO
    ) {}

    ngOnInit() {
        this.socketIO.connect();
    }

    ngOnDestroy() {
        this.socketIO.disconnect();
    }
}
