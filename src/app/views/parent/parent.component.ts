import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { ChatService } from '~/app/services/chat.service';
import { Message } from '~/app/schema/message'
@Component({
  selector: 'ns-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  moduleId: module.id,
})
export class ParentComponent implements OnInit {
  messages: Array<Message> = [];
  constructor(
    private routerExtension: RouterExtensions,
    private activeRoute: ActivatedRoute,
    private chatService: ChatService,
  ) { }

  ngOnInit() {
    this.routerExtension.navigate(
      [{ outlets: { linearTab: ["linear"], topTab: ["top"] } }],
      { relativeTo: this.activeRoute }
    );
    this.chatService.getMessages().subscribe((x: Message) => this.messages.push(x));
  }

}
