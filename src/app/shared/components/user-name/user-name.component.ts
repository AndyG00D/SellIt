import {Component, Input} from '@angular/core';
import {User} from "../../../core/models/user";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.scss']
})
export class UserNameComponent {
  @Input() user: User;
  name: string = 'User';

  constructor() {
      if (!isNullOrUndefined(this.user['first_name'])) this.name = `User ${this.user.first_name} ${this.user.last_name}`;
      // else if (this.user.username.isUndefined()) this.name = this.user.username;
      else this.name = `User ${this.user.id}`;
  }
}
