import {Injectable} from '@angular/core';

@Injectable()
export class MessageService {
  private messagesError: string[] = [];
  private messagesWarning: string[] = [];
  private messagesSuccess: string[] = [];

  // add messages
  public addError(message: string) {
    this.messagesError.push(message);
    console.log(message);
  }

  public addWarning(message: string) {
    this.messagesWarning.push(message);
    console.log(message);
  }

  public addSuccess(message: string) {
    this.messagesSuccess.push(message);
    console.log(message);
  }

  // clear messages
  public clearError() {
    this.messagesError = [];
  }

  public clearWarning() {
    this.messagesWarning = [];
  }

  public clearSuccess() {
    this.messagesSuccess = [];
  }
}
