import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

/**
 * visual imitation of chat user and owner
 * used on product detail page
  * @Input() user;
  * @Input() owner;
 */
export class ChatComponent implements OnInit {

  @Input() user;
  @Input() owner;

  constructor() { }

  ngOnInit() {
  }

}
