import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {Owner} from "../../../core/models/product";
import {ProfileService} from "../../../core/services/profile.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user:any;
  constructor(private authService: AuthService,
              private profileService: ProfileService
  ) {
    // this.user = authService.authUser;
  }

  onLogOut(){
    this.authService.logout();
  }

  ngOnInit(){
    this.profileService.getProfile().subscribe((user) => {this.user = user;})
  }

}
