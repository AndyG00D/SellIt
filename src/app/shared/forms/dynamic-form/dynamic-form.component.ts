///<reference path="../../../../../node_modules/@angular/core/src/linker/element_ref.d.ts"/>
import {Component, OnInit, Input, ElementRef, Renderer2, ViewChild, AfterViewInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import {AuthService} from "../../services/auth.service";



@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit, AfterViewInit {
  @Input() dataObject;
  @ViewChild('elem') _elem: ElementRef;
  form: FormGroup;


  constructor(private _renderer: Renderer2, private authService: AuthService ) {}

  ngOnInit() {
    this.form = this.createForm(this.dataObject);
  }


  ngAfterViewInit() {
    // const buttonElement = this._renderer.createElement('button');
    // const text = this._renderer.createText('Text');
    // this._renderer.appendChild(buttonElement, text);
    // this._renderer.appendChild(this._elem.nativeElement, buttonElement);
    // const div = this._renderer.createElement('div');
    // const text = this._renderer.createText('test');
    // this._renderer.appendChild(div, this.createFormView(this.dataObject));

    // const form =  this.createFormView(this.dataObject);
    // this._renderer.appendChild(div, form);
    // this._renderer.appendChild(this._elem.nativeElement, div);
    this._renderer.appendChild(this._elem.nativeElement, this.createFormView(this.dataObject));
    console.log('out function' + this.createFormView(this.dataObject));
  }

  createFormView(conf): any {
    let formView = this._renderer.createElement('ul');
    for (let prop of conf) {
      if (prop.type === 'nested') { // generate Nested Form
        const text = this._renderer.createText(prop.key);
        const li = this._renderer.createElement('li');
        const ul = this._renderer.createElement('ul');
        this._renderer.appendChild(ul, this.createFormView(prop.conf));
        this._renderer.appendChild(li, ul);
        this._renderer.appendChild(formView, li);
        // formGroup[prop.key] = this.createForm(prop.conf);
        console.log(prop.key);
      } else if (prop.type === 'array') { // generate Form Array
        let items = [];
        const text = this._renderer.createText(prop.key);
        const li = this._renderer.createElement('li');
        const ul = this._renderer.createElement('ul');
        const item = this.createFormView(prop.conf);
        for (let i = 0; i < prop.arrayLength; i++) {
          this._renderer.appendChild(ul, item);
        }
        this._renderer.appendChild(li, ul);
        this._renderer.appendChild(formView, li);
      }
      else { // generate Form Control
        const text = this._renderer.createText(prop.key);
        const li = this._renderer.createElement('li');
        this._renderer.appendChild(li, text);
        this._renderer.appendChild(formView, li);
        // formGroup[prop.key] = new FormControl(prop.value || '', prop.validators);
        // console.log(prop.key);
      }
    }
      // this._renderer.appendChild(this._elem.nativeElement, formGroup);
    console.log('in function' + formView);
    return formView;
  }


  // setup the form
  createForm(conf): FormGroup {
    const formGroup = {};
    for (let prop of conf) {
      if (prop.type === 'nested') { // generate Nested Form
        formGroup[prop.key] = this.createForm(prop.conf);
      } else if (prop.type === 'array') { // generate Form Array
        let items = [];
        const item = this.createForm(prop.conf);
        for (let i = 0; i < prop.arrayLength; i++) {
          items.push(item);
        }
        formGroup[prop.key] = new FormArray(items);
      }
      else { // generate Form Control
        formGroup[prop.key] = new FormControl(prop.value || '', prop.validators);
      }
    }
    return new FormGroup(formGroup);
  }


  // addItem(): void {
  //   // this.items = this.fg.get('items') as FormArray;
  //   // this.items.push(this.createItem());
  //   this.fg.get('items').push(this.createItem());
  // }

  // removeItem(i: number) {
  //   this.fg.get('items').removeAt(i);
  // }

  // private mapValidators(validators) {
  //   const formValidators = [];
  //
  //   if(validators) {
  //     for(const validation of Object.keys(validators)) {
  //       if(validation === 'required') {
  //         formValidators.push(Validators.required);
  //       } else if(validation === 'min') {
  //         formValidators.push(Validators.min(validators[validation]));
  //       }
  //     }
  //   }
  //
  //   return formValidators;
  // }

  onSubmit() {
    // if (form.valid) {
      this.authService.getAuth(this.form.value).subscribe();
    // }
  }
}
