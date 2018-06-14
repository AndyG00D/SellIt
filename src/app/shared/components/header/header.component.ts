import {Component, OnChanges, OnInit} from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {User} from "../../../core/models/user";
import {ProfileService} from "../../../core/services/profile.service";
import {Observable} from "rxjs/internal/Observable";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  user: User = this.authService.getUser();
  userName: string;
  constructor(private authService: AuthService,
              private profileService: ProfileService
  ) {
    // this.profileService.profile$.subscribe((user) => {this.user = user});
    // this.user = this.profileService.getUser();
    // this.user = this.profileService.user;
    // this.user = this.authService.getUser();
    if(this.user){
      if(this.user.first_name) this.userName = this.user.first_name + this.user.last_name;
      else if(this.user.username) this.userName = this.user.username;
      else
        this.userName = 'User';
    }
  }

  onLogOut(){
    this.authService.logout();
  }

  ngOnInit(){

  }

  ngOnChanges(){
    // this.profileService.profile$.subscribe((user) => {this.user = user;})
  }

}
