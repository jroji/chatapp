import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../state-management/state/main.state";
import {SEND_MESSAGE} from "../../state-management/actions/main.actions";

@Component({
  selector: 'app-text-editor',
  templateUrl: 'text-editor.component.html',
  styleUrls: ['text-editor.component.css']
})
export class TextEditorComponent implements OnInit {

  /**
   * The username alias
   */
  username: String;
  /**
   * The message sended by the user
   */
  message: String;

  /**
   * The username label
   */
  usernameLabel: String;

  /**
   * The send button label
   */
  buttonLabel: String;

  /**
   * The text-area input label
   */
  messageLabel: String;
  messagesArray: Array<Object>;
  isActive: Boolean;

  constructor(private store: Store<State>) {
    this.usernameLabel = 'Username';
    this.messageLabel = 'Message';
    this.buttonLabel = 'Send';
    this.resetForm();
  }

  ngOnInit() {
    // Select the reducer in order to search the dispatched events
    this.store.select('mainStoreReducer');
  }

  /**
   * Emit an event with the message information
   */
  sendMessage(): void {
    if(this.validateMessage()) {
      this.store.dispatch({
        type: SEND_MESSAGE,
        payload: {
          message: this.message,
          username: this.username
        }
      });
      this.resetForm();
    }
  };

  resetForm(): void {
    this.username = '';
    this.message = '';
  }

  validateMessage(): boolean {
    return this.message != '' && this.username != '';
  }

}
