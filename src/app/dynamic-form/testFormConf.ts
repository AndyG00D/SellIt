import {FormControlConf} from './dynamic-form.model.ts'
import {Validators} from "@angular/forms";


export let testNestedFormConf: Array<FormControlConf> = [
  {
    key: 'email',
    type: 'email',
    label: 'Email',
    validators: [Validators.maxLength(400)]
  },
  {
    key: 'password',
    type: 'password',
    label: 'Password',
    validators: [Validators.required, Validators.min(0)]
  },
];

export let tesFormArrayConf: Array<FormControlConf> = [
  {
    key: 'item',
    type: 'text',
    label: 'Item1'
  },
  {
    key: 'item2',
    type: 'text',
    label: 'Item2'
  }
];

export let testFormConf: Array<FormControlConf> = [
  // {
  //   key: 'number',
  //   type: 'number',
  //   label: 'Number',
  //   validators: [Validators.required, Validators.minLength(4), Validators.maxLength(20)]
  // },
  // {
  //   key: 'range',
  //   type: 'range',
  //   label: 'Range',
  //   validators: [Validators.required, Validators.minLength(4), Validators.maxLength(20)]
  // },
  {
    key: 'text',
    type: 'text',
    label: 'Text',
    validators: [Validators.maxLength(2), Validators.required]
  },
  {
    key: 'search',
    type: 'search',
    label: 'Search',
    validators: [Validators.maxLength(400)]
  },
  {
    key: 'tel',
    type: 'tel',
    label: 'Telephone',
  },
  {
    key: 'email',
    type: 'email',
    label: 'Email',
    validators: [Validators.maxLength(400)]
  },
  {
    key: 'password',
    type: 'password',
    label: 'Password',
    validators: [Validators.required, Validators.min(0)]
  },
  {
    key: 'checkbox',
    type: 'checkbox',
    label: 'Checkbox'
  },
  {
    key: 'radio',
    type: 'radio',
    label: 'Radio'
  },
  {
    key: 'textarea',
    type: 'textarea',
    label: 'Text Area',
    validators: [Validators.maxLength(400)]
  },
  {
    key: 'select',
    label: 'Select',
    value: '39010',
    type: 'select',
    options: [
      {label: "(choose one)", value: ''},
      {label: "Bolzano", value: '39100'},
      {label: "Meltina", value: '39010'},
      {label: "Appiano", value: '39057'}
    ]
  },
  // {
  //   key: 'nested',
  //   type: 'nested',
  //   label: 'Nested Group',
  //   conf: testNestedFormConf
  // },
  // {
  //   key: 'array',
  //   type: 'array',
  //   label: 'Form Array',
  //   conf: tesFormArrayConf,
  //   arrayLength: 4
  // },
  // {
  //   key: 'submit',
  //   type: 'submit',
  //   label: 'Submit',
  // },
  // {
  //   key: 'reset',
  //   type: 'reset',
  //   label: 'Reset',
  // },
];
