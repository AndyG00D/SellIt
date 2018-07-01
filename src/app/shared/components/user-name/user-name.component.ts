import {Component, Input} from '@angular/core';
import {User} from "../../../core/models/user";

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.scss']
})

/**
 * Block viewed for auth user on header
 * @Input() user: any; -  auth user data
 */
export class UserNameComponent {
  @Input() user: User;
  name: string = 'User';

  constructor() {
  }
}
