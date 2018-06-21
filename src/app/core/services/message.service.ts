import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];
  messagesInfo: string[] = [];

  add(message: string) {
    this.messages.push(message);
    console.log(message);
  }

  addInfo(message: string) {
    this.messagesInfo.push(message);
    console.log(message);
  }

  clear() {
    this.messages = [];
  }

  clearInfo() {
    this.messagesInfo = [];
  }
}
