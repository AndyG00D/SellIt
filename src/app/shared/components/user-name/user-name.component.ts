import {Component, Input} from '@angular/core';
import {User} from "../../../core/models/user";

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.scss']
})
export class UserNameComponent {
  @Input() user: any;
  name: string = 'User';

  constructor() {
  }
}
