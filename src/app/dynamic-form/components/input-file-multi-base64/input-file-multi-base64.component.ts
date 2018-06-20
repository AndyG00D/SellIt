import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";


@Component({
  selector: 'app-input-file-base64',
  templateUrl: './input-file-multi-base64.component.html'
})
export class InputFileBase64MultiComponent {
  @Input() prop: any;
  @Input() form: FormGroup;


  constructor() {
  }


  onFileChange(event) {

    if (event.target.files && event.target.files.length > 0) {
      let res = [];
      for (let file of event.target.files) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          res.push(reader.result);
        };
      }
      this.form.get(this.prop.key).patchValue(res);
    }
  }

}
