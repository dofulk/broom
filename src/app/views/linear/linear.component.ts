import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from '../../services/user.service';
import { ChatService } from '../../services/chat.service';
import { Message } from '../../schema/message';
import { Observable } from 'rxjs'


@Component({
  selector: 'ns-linear',
  templateUrl: './linear.component.html',
  styleUrls: ['./linear.component.css'],
  moduleId: module.id,
})
export class LinearComponent implements OnInit {

  inputbox: string;
  messages: Array<Message> = [];

  constructor(
    private router: Router,
    private userService: UserService,
    private chatService: ChatService
  ) { }

  ngOnInit() {
    this.chatService.initSocket();
    this.chatService.getMessages().subscribe((x: Message) => this.messages.push(x));
  }

  submit(comment) {
    this.chatService.test({
      user: this.userService.user,
      message: comment,
      hearts: ["4", "6", "7"],
      before: "3",
      after: ["6", "4"],
      chat: "8"
    })
  }
  likeComment(){
    console.log('hi')
  }

}
