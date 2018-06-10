import {FormControlConf} from '../dynamic-form.model'
import {Validators} from "@angular/forms";


export let productFormConf: Array<FormControlConf> = [{
    key: 'theme',
    type: 'text',
    label: 'Theme',
    validators: [Validators.required, Validators.minLength(4), Validators.maxLength(20)]
  },
  {
    key: 'text',
    type: 'text',
    label: 'Text',
    validators: [Validators.maxLength(400)]
  },
  {
    key: 'price',
    type: 'number',
    label: 'Price',
    validators: [Validators.required, Validators.min(0)]
  },
  {
    key: 'currency',
    type: 'number',
    label: 'Currency',
  },
  {
    key: 'contract_price',
    value: '1',
    type: 'number',
    label: 'Contract Price',
    validators: [Validators.required, Validators.minLength(4), Validators.maxLength(20)]
  },
  {
    key: 'key',
type: 'text',
label: 'Text',
value: 'T',
    validators: [Validators.required],
options: [
    {label: "(choose one)", value: ''},
    {label: "Bolzano", value: '39100'},
    {label: "Meltina", value: '39010'},
    {label: "Appiano", value: '39057'}
  ],
hideLabel: true
},
{
  key: 'city',
  label: 'City',
  value: '39010',
  type: 'select',
  options: [
    {label: "(choose one)", value: ''},
    {label: "Bolzano", value: '39100'},
    {label: "Meltina", value: '39010'},
    {label: "Appiano", value: '39057'}
  ]
}];
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
