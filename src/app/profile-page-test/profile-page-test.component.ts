import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AuthService} from "../core/services/auth.service";
import {ProfileService} from "../core/services/profile.service";


@Component({
  selector: 'app-dynamic-form-demo-page',
  templateUrl: './profile-page-test.component.html',
  styleUrls: ['./profile-page-test.component.css']
})
export class ProfilePageTestComponent {
  @ViewChild('fileInput') fileInput: ElementRef;
   public fg = new FormGroup({
    // username: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(3)]),
    // first_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    // last_name: new FormControl('', [Validators.required]),
    avatar: new FormControl('')
    /* location: new FormGroup({
      street: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(3)]),
      city: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(3)]),
      state: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(3)])
    }),  */
    // color_scheme: new FormControl(''),
    // language: new FormControl('')

  });
  public img;
  // get username() { return this.fg.get('username'); }
  // get first_name() { return this.fg.get('first_name'); }
  // get last_name() { return this.fg.get('last_name'); }
  get avatar() { return this.fg.get('avatar'); }
  // get color_scheme() { return this.fg.get('color_scheme'); }
  // get language() { return this.fg.get('language'); }
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  }

  changeAvatar() {
    const userData = {
      avatar: this.img,
    };
    // if(this.fg.valid) {
    //   debugger;
      this.profileService.updateProfile(this.fg.value)
        .subscribe(data => {
          console.log(data);
        });
      // this.fg.reset();
    // }
  }

  imgChange(event) {


    for(let i = 0; i < event.target.files.length; i++) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[i]);
      reader.onloadend = () => {
        this.fg.controls['avatar'].setValue([reader.result]);
      }
    }

    // let reader = new FileReader();
    // if(event.target.files && event.target.files.length > 0) {
    //   let file = event.target.files[0];
    //   reader.readAsBinaryString(file);
    //   reader.onload = () => {
    //     this.fg.get('avatar').setValue(reader.result);
    //   };
    // }


  }


}
