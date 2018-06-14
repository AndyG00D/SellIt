import {Component} from '@angular/core';
import {DynamicFormService} from "../dynamic-form/dynamic-form.service";
import {FormControlConf} from "../dynamic-form/dynamic-form.model";
import {ProfileService} from "../core/services/profile.service";
import {User} from "../core/models/user";

@Component({
  selector: 'app-dynamic-form-demo-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {
  user: User;
  props: FormControlConf[];

  constructor(private service: DynamicFormService,
              private profileService:ProfileService) {
    this.props = this.service.getFormConfig('profile');
    // this.profileService.getProfile().subscribe(data => this.user = data);
    this.profileService.getUser().subscribe((user) => {this.user = user});
  }

  onSubmit(event: User){
    this.profileService.updateProfile(event).subscribe();
  }
}
