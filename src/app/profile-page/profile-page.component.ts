import {Component} from '@angular/core';
import {DynamicFormService} from '../dynamic-form/dynamic-form.service';
import {FormControlConf} from '../dynamic-form/dynamic-form.model';
import {ProfileService} from '../core/services/profile.service';
import {User} from '../core/models/user';

@Component({
  selector: 'app-dynamic-form-demo-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})

/**
 * Profile page:
 * Update avatar
 * if change username reset auth data and navigate to login page
 * Update info
 * update password
 */
export class ProfilePageComponent {
  user: User;
  userProps: FormControlConf[];
  avatarProps: FormControlConf[];
  passProps: FormControlConf[];

  constructor(private dynamicFormService: DynamicFormService,
              private profileService: ProfileService) {
    this.userProps = this.dynamicFormService.getFormConfig('profile');
    this.avatarProps = this.dynamicFormService.getFormConfig('avatar');
    this.passProps = this.dynamicFormService.getFormConfig('changePassword');
    this.profileService.getUser().subscribe((user) => {
      this.user = user;
    });
  }

  onSubmit(event: User) {
    this.profileService.updateProfile(event).subscribe();
  }

  public onChangePass(event) {
    this.profileService.getChangePassword(event).subscribe();
  }

}
