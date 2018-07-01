import {Injectable} from '@angular/core';

/**
 * Service gather Error, Warning, Success massages from other parts
 * of project and view them in messages.component and console
 */
@Injectable()
export class MessageService {
  public messagesError: string[] = [];
  public messagesWarning: string[] = [];
  public messagesSuccess: string[] = [];

  /**
   * add messages
   */
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

  /**
   *   clear messages
    */
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
