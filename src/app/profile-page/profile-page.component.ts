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

  constructor(private service: DynamicFormService,
              private profileService: ProfileService) {
    this.userProps = this.service.getFormConfig('profile');
    this.avatarProps = this.service.getFormConfig('avatar');
    // this.profileService.getProfile().subscribe(data => this.user = data);
    this.profileService.getUser().subscribe((user) => {
      this.user = user
    });
  }

  onSubmit(event: User) {
    this.profileService.updateProfile(event).subscribe(
    );
  }

  // onFileChange(event) {
  //   let reader = new FileReader();
  //   if(event.target.files && event.target.files.length > 0) {
  //     let file = event.target.files[0];
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       console.log('result :' + reader.result);
  //       // this.form.get(this.prop.key).setValue(reader.result);
  //       // this.form.get(this.prop.key).setValue({
  //       //   filename: file.name,
  //       //   filetype: file.type,
  //       //   value: reader.result.split(',')[1]
  //       // })
  //     };
  //   }
  // }
}
