import {Injectable} from '@angular/core';

@Injectable()
export class MessageService {
  messagesError: string[] = [];
  messagesWarning: string[] = [];
  messagesSuccess: string[] = [];

  // add messages
  addError(message: string) {
    this.messagesError.push(message);
    console.log(message);
  }

  addWarning(message: string) {
    this.messagesWarning.push(message);
    console.log(message);
  }

  addSuccess(message: string) {
    this.messagesSuccess.push(message);
    console.log(message);
  }

  // clear messages
  clearError() {
    this.messagesError = [];
  }

  clearWarning() {
    this.messagesWarning = [];
  }

  clearSuccess() {
    this.messagesSuccess = [];
  }
}
