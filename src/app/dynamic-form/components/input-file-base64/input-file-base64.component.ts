import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-input-file-base64',
  templateUrl: './input-file-base64.component.html'
})
export class InputFileBase64Component {
  @Input() prop: any;
  @Input() form: FormGroup;
  // loading: boolean = false;

  // @ViewChild('fileInput') fileInput: ElementRef;

  constructor(
    // private fb: FormBuilder,
  ) {
    // this.createForm();
  }

  // createForm() {
  //   this.form = this.fb.group({
  //     avatar: null
  //   });
  // }

  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.get(this.prop.key).setValue(
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

  // onSubmit() {
  //   const formModel = this.form.value;
  //   this.profileService.updateProfile(formModel).subscribe(data =>
  //     console.log('Update data: ' + JSON.stringify(data))
  //   );
  //   // this.loading = true;
  //   // // this.http.post('apiUrl', formModel)
  //   // setTimeout(() => {
  //   //   console.log(formModel);
  //   //   alert('done!');
  //   //   this.loading = false;
  //   // }, 1000);
  // }

  // clearFile() {
  //   this.form.get(this.prop.key).setValue(null);
  //   this.fileInput.nativeElement.value = '';
  // }

}
