import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Base64ValidatorsService} from '../../../core/services/base64-validators.service';

@Component({
  selector: 'app-input-file-base64',
  templateUrl: './input-file-multi-base64.component.html'
})
export class InputFileBase64MultiComponent {
  @Input() prop: any;
  @Input() form: FormGroup;

  constructor(private base64ValidatorsService: Base64ValidatorsService) {
  }

  onFileChange(event) {
    // files exist?
    if (!(event.target.files && event.target.files.length > 0)) {
      return;
    }
    // File count less max limit upload files RestApi
    const ExistFilesCount = event.target.files.length;
    if (!this.base64ValidatorsService.isValidCount(ExistFilesCount)) {
      return;
    }

    const res = [];
    for (const file of event.target.files) {
      // is valid type?
      if (!this.base64ValidatorsService.isValidType(file)) {
        continue;
      }
      // is valid size?
      if (!this.base64ValidatorsService.isValidSize(file)) {
        continue;
      }

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        res.push(reader.result);
      };
    }
    this.form.get(this.prop.key).patchValue(res);
  }

}
