import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {User} from '../../../core/models/user';
import {ProfileService} from '../../../core/services/profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public user: User;
  public userName: string;

  constructor(private authService: AuthService,
              private profileService: ProfileService) {

    this.profileService.getUser().subscribe((user) => {
      this.user = user;
    });

    if (this.user) {
      if (this.user.first_name) {
        this.userName = this.user.first_name + ' ' + this.user.last_name;
      } else if (this.user.username) {
        this.userName = this.user.username;
      } else {
        this.userName = 'User';
      }
    }
  }

  onLogOut() {
    this.authService.getLogout().subscribe();
  }

  ngOnInit() {

  }

}
