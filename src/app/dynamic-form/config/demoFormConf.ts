import {FormControlConf} from '../dynamic-form.model'
import {Validators} from "@angular/forms";



export let testNestedFormConf: Array<FormControlConf> = [
  {
    key: 'field1',
    type: 'text',
    label: 'Field 1',
  },
  {
    key: 'field2',
    type: 'text',
    label: 'Field 2',
  },
  // {
  //   key: 'field3',
  //   type: 'nested',
  //   label: 'Field 3',
  //   conf: tesFormArrayConf
  // }
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
  },
  {
    key: 'nested',
    type: 'nested',
    label: 'Nested Group',
    conf: testNestedFormConf
  }
];

export let demoFormConf: Array<FormControlConf> = [
  {
    key: 'number',
    type: 'number',
    label: 'Number',
  },
  {
    key: 'range',
    type: 'range',
    label: 'Range',
  },
  {
    key: 'text',
    type: 'text',
    label: 'Text',
  },
  {
    key: 'search',
    type: 'search',
    label: 'Search',
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
  },
  {
    key: 'password',
    type: 'password',
    label: 'Password',
    validators: [Validators.required]
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
  {
    key: 'nested',
    type: 'nested',
    label: 'Nested Group',
    conf: testNestedFormConf
  },
  {
    key: 'array',
    type: 'array',
    label: 'Form Array',
    conf: tesFormArrayConf,
    arrayLength: 5
  },
  {
    key: 'submit',
    type: 'submit',
    label: 'Submit',
  },
  {
    key: 'reset',
    type: 'reset',
    label: 'Reset',
  },
];
