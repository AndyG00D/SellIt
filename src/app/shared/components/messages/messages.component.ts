import { Component } from '@angular/core';
import { MessageService} from '../../../core/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})

/**
 * Service for view Error, Warning, Success massages
 * working with message service
 */
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
}
