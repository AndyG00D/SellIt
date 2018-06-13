import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {
  @Input() prop: any;
  @Input() form: FormGroup;
  // @Input() parentsFormGroup: string = '';

  constructor() { }

  ngOnInit() {
  }

}
