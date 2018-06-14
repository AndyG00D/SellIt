import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-input-text',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss']
})
export class InputFileComponent implements OnInit {
  @Input() prop: any;
  @Input() form: FormGroup;
  // @Input() parentsFormGroup: string = '';

  constructor() { }

  ngOnInit() {
  }

  onLoadImg(event){
    console.log(event.target);
    event.target.files
    // for(let file of event.target.files)_{
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        // console.log('result :' + reader.result);
        this.form.get(this.prop.key).setValue(reader.result);
        // this.form.get(this.prop.key).patchValue(reader.readAsText(file));
      };
      // reader.readAsText(file);

    }
}
