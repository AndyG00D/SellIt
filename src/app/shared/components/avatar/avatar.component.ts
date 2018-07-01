import {Component, Input} from '@angular/core';
import {apiUrls} from "../../../core/api-urls";
import {User} from "../../../core/models/user";

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})

/**
 * view user avatar
 * if avatar undefined view noAvatar image
 * @Input() user: User;
 */
export class AvatarComponent {
  @Input() user: User;
  img: string = apiUrls.noAvatar;

  constructor() {
  }
}
