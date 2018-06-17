import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProfileService} from "../../../core/services/profile.service";

@Component({
  selector: 'base64-upload',
  templateUrl: './base64-upload.component.html'
})
export class Base64UploadComponent {
  form: FormGroup;
  loading: boolean = false;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder,
              private profileService:ProfileService
  ) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      avatar: null
    });
  }

  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.get('avatar').setValue(
        //   {
        //   filename: file.name,
        //   filetype: file.type,
        //   value: reader.result.split(',')[1]
        // }
        reader.result
        )
      };
    }
  }

  onSubmit() {
    const formModel = this.form.value;
    this.profileService.updateProfile(formModel).subscribe(data =>
      console.log('Update data: ' + JSON.stringify(data))
    );
    // this.loading = true;
    // // this.http.post('apiUrl', formModel)
    // setTimeout(() => {
    //   console.log(formModel);
    //   alert('done!');
    //   this.loading = false;
    // }, 1000);
  }

  clearFile() {
    this.form.get('avatar').setValue(null);
    this.fileInput.nativeElement.value = '';
  }

}
