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
  userProps: FormControlConf[];
  avatarProps: FormControlConf[];
  passProps: FormControlConf[];

    constructor(private service: DynamicFormService,
              private profileService: ProfileService) {
    this.userProps = this.service.getFormConfig('profile');
    this.avatarProps = this.service.getFormConfig('avatar');
    this.passProps = this.service.getFormConfig('changePassword');
    this.profileService.getUser().subscribe((user) => {
      this.user = user
    });
  }

  onSubmit(event: User) {
    this.profileService.updateProfile(event).subscribe();
  }

  public onChangePass(event) {
    this.profileService.getChangePasswod(event).subscribe();
  }

}
