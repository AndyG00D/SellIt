import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-input-text',
  templateUrl: './input-boolean.component.html',
  styleUrls: ['./input-boolean.component.scss']
})
export class InputBooleanComponent implements OnInit {
  @Input() prop: any;
  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
