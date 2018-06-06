import {FormControlConf} from '../models/forms'
import {Validators} from "@angular/forms";


export let testFormConf: Array<FormControlConf> = [{
    key: 'number',
    type: 'number',
    label: 'Number',
    validators: [Validators.required, Validators.minLength(4), Validators.maxLength(20)]
  },
  {
    key: 'range',
    type: 'range',
    label: 'Range',
    validators: [Validators.required, Validators.minLength(4), Validators.maxLength(20)]
  },
  {
    key: 'text',
    type: 'text',
    label: 'Text',
    validators: [Validators.maxLength(2)]
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

//   {
//     key: 'contract_price',
//     value: '1',
//     type: 'number',
//     label: 'Contract Price',
//     validators: [Validators.required, Validators.minLength(4), Validators.maxLength(20)]
//   },
//   {
//     key: 'key',
// type: 'text',
// label: 'Text',
// value: 'T',
//     validators: [Validators.required],
// options: [
//     {label: "(choose one)", value: ''},
//     {label: "Bolzano", value: '39100'},
//     {label: "Meltina", value: '39010'},
//     {label: "Appiano", value: '39057'}
//   ],
// hideLabel: true
// },

// ];

// {
//   key: 'text',
//   label: 'Age',
//   type: 'textarea'
// },
// {
//   key: 'gender',
//   label: 'Gender',
//   value: 'M',
//   type: 'radio',
//   options: [
//     {label: "Male", value: 'M'},
//     {label: "Female", value: 'F'}
//   ]
// },
// {
//   key: 'country',
//   label: 'Country',
//   value: '123',
//   type: 'select',
//   options: [
//     {label: "(choose one)", value: ''},
//     {label: "Italy", value: '123'},
//     {label: "France", value: '236'}
//   ],
//   cascade: (selectedValue) => {
//
//     if (selectedValue === '123') {
//
//       productFormConf.city.options = [
//         {label: "(choose one)", value: ''},
//         {label: "Bolzano", value: '39100'},
//         {label: "Meltina", value: '39010'},
//         {label: "Appiano", value: '39057'}
//       ];
//
//     } else if (selectedValue === '236') {
//
//       productFormConf.city.options = [
//         {label: "(choose one)", value: ''},
//         {label: "Paris", value: '40100'},
//         {label: "Nice", value: '40010'},
//         {label: "Lyon", value: '40057'}
//       ];
//     }
//
//   },
//   validation: {
//     required: true
//   }
// },
