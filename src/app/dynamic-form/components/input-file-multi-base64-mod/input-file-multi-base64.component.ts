import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {User} from "../../../core/models/user";
import {map} from "rxjs/operators";


@Component({
  selector: 'app-input-file-base64',
  templateUrl: './input-file-multi-base64.component.html'
})
export class InputFileBase64MultiComponent {
  @Input() prop: any;
  @Input() form: FormGroup;
  // images = new BehaviorSubject<Array<string>>([]);
  images = [];
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

    if(event.target.files && event.target.files.length > 0) {
      let res = [];
      for(let file of event.target.files) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          // this.images.push(reader.result);
        this.images.push(reader.result);
          // this.images.pipe(
          //   map(img => {
          //     img.push(reader.result);
          //   return img;
          //   }));
        };
      }
      // this.images.next(res);
      this.form.get(this.prop.key).setValue(this.images)
    }
  }

  deleteImg(i){
    console.log("click: "+ i);
    // this.images.pipe(
    //   map(img => {
    //
    //     delete img[i];
    //     return img;
    //   })).subscribe();
    this.images.splice(i,1);
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
