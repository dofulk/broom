import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ChatService } from '../../services/chat.service';
import { Message } from '../../schema/message';



@Component({
  selector: 'ns-linear',
  templateUrl: './linear.component.html',
  styleUrls: ['./linear.component.css'],
  moduleId: module.id,
})
export class LinearComponent implements OnInit {

  messages: Array<Message> = [];

  constructor(
    private userService: UserService,
    private chatService: ChatService
  ) { }

  ngOnInit() {
  }

  submit(comment) {
    this.chatService.test({
      user: this.userService.user,
      message: comment,
      hearts: ["4", "6", "9"],
      before: "3",
      after: ["6", "4"],
      chat: "8"
    });
  }
  likeComment(){
    console.log('hi')
  }

}
