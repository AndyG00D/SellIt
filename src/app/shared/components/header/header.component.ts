import { Component } from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {Owner} from "../../../core/models/product";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user: Owner;
  constructor(private authService: AuthService) {
    this.user = authService.authUser;
  }

  onLogOut(){
    this.authService.logout();
  }

}
