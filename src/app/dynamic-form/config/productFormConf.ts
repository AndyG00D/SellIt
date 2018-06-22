import {FormControlConf} from '../dynamic-form.model'
import {Validators} from "@angular/forms";
import {DataProductsService} from "../../core/services/data-products.service";


export let productFormConf: Array<FormControlConf> = [{
  key: 'theme',
  type: 'text',
  label: 'Theme',
  validators: [Validators.required]
},
  {
    key: 'text',
    type: 'textarea',
    label: 'Text',
  },
  {
    key: 'price',
    type: 'number',
    label: 'Price',
  },
  {
    key: 'currency',
    value: '1',
    type: 'select',
    label: 'Currency',
    options: [
      {label: "1", value: "1"},
    ]
  },
  {
    key: 'contract_price',
    type: 'checkbox',
    // value: true,
    label: 'Contract Price',
    // options: [
    //   {label: "1", value: 'check'},
    // ]
  },
  {
    key: 'location',
    type: 'select',
    label: 'Location',
    value: 1,
    options: []
    // conf: [
    //   {
    //     key: 'id',
    //     type: 'number',
    //     label: 'Address',
    //     hideLabel: true
    //   },
      // {
      //   key: 'name',
      //   type: 'text',
      //   label: 'Address',
      //   hideLabel: true
      // }
    // ]
  },
  // {
  //   key: 'name',
  //   type: 'text',
  //   label: 'City',
  //   // hideLabel: true
  // },
  // ]
  // },
  {
    key: 'is_active',
    type: 'checkbox',
    label: 'Active',
    value: true
  },
  {
    key: 'images',
    type: 'files',
    label: 'Images'
  },
  {
    key: 'submit',
    type: 'submit',
    label: 'Update User'
  }
];

// {
//   key: 'key',
//   type: 'text',
//   label: 'Text',
//   value: 'T',
//   validators: [Validators.required],
//   options: [
//     {label: "(choose one)", value: ''},
//     {label: "Bolzano", value: '39100'},
//     {label: "Meltina", value: '39010'},
//     {label: "Appiano", value: '39057'}
//   ],
//   hideLabel: true
// },
// {
//   key: 'city',
//   label: 'City',
//   value: '39010',
//   type: 'select',
//   options: [
//     {label: "(choose one)", value: ''},
//     {label: "Bolzano", value: '39100'},
//     {label: "Meltina", value: '39010'},
//     {label: "Appiano", value: '39057'}
//   ]
// }];
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
