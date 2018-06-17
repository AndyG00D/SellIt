import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-input-text',
  templateUrl: './select-color.component.html',
  styleUrls: ['./select-color.component.scss']
})
export class SelectColorComponent implements OnInit {
  @Input() prop: any;
  @Input() form: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
