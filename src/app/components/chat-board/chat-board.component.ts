import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../state-management/state/main.state";

@Component({
  selector: 'app-chat-board',
  templateUrl: 'chat-board.component.html',
  styleUrls: ['chat-board.component.css']
})
export class ChatBoardComponent implements OnInit {

  messages: Array<any>;

  constructor(private store: Store<State>) {
    this.messages = [];
  }

  ngOnInit() {
    this.store.select('mainStoreReducer').subscribe((state) => {
      console.log(state);
      this.messages = state['messages'];
    });
  }

}
