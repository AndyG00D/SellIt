import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Base64ValidatorsService} from '../../../core/services/base64-validators.service';


@Component({
  selector: 'app-input-file-base64',
  templateUrl: './input-file-base64.component.html'
})
export class InputFileBase64Component {
  @Input() prop: any;
  @Input() form: FormGroup;

  constructor( private base64ValidatorsService: Base64ValidatorsService) {
  }

  onFileChange(event) {
    // is valid type?
    if (!this.base64ValidatorsService.isValidType(event.target.files[0])) return;
    // is valid size?
    if (!this.base64ValidatorsService.isValidSize(event.target.files[0])) return;

    let reader = new FileReader();
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.get(this.prop.key).setValue(reader.result);
      };
  }

}
