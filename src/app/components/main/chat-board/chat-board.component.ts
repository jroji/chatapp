import {Component, group, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../../state-management/state/main.state";
import {MessagesService} from "../../../services/messages.service";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/core';


export const animatedRed = state('inactive', style({
  opacity: 0
}));

@Component({
  selector: 'app-chat-board',
  templateUrl: 'chat-board.component.html',
  styleUrls: ['chat-board.component.css'],
  animations: [
    trigger('heroState', [
      transition('void => *', [
        style({transform: 'rotate(0deg)', opacity: 0, backgroundColor: 'yellow', height: '50px', width: '50px', borderRadius:'100%'}),
        group([
          animate('1s 0.1s ease', style({
            opacity: 1,
            transform: 'rotate(3600deg)',
            backgroundColor: 'pink'
          }))
        ])
      ])
    ])
  ]
})
export class ChatBoardComponent implements OnInit {

  messages: Array<any>;
  status: string;
  messagesList: Array<any>;

  constructor(private store: Store<State>, private messagesService: MessagesService) {
    this.messages = [];
    this.status = '';
  }

  ngOnInit() {
    this.store.select('mainStoreReducer').subscribe((state) => {
      this.messagesList = state['messages'];
      if(this.messagesList.length > 0) {
        this.messages.push(this.messagesList.pop());
      }
    });
  }

  toggleStatus() {
    this.status = this.status === 'inactive' ? 'active' : 'inactive';
  }

  alertAll() {
    if(this.messagesList.length > 0) {
      this.messages.push(this.messagesList.pop());
    }
  }
}
