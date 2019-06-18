import { Component, OnInit, Input } from '@angular/core';
import { Message } from '~/app/schema/message';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  moduleId: module.id,
})
export class MessageComponent implements OnInit {

  @Input() item: Message;

  constructor() { }

  ngOnInit() {
  }

}
