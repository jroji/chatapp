import {Component, OnInit} from '@angular/core';
import {MessagesService} from "../../../services/messages.service";

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

  constructor(private messagesService: MessagesService) {
    this.usernameLabel = 'Username';
    this.messageLabel = 'Message';
    this.buttonLabel = 'Send';
    this.resetForm();
  }

  ngOnInit() {
  }

  /**
   * Emit an event with the message information
   */
  sendMessage(): void {
    if(this.validateMessage()) {
      this.messagesService.pushMessage({
        message: this.message,
        username: this.username
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
