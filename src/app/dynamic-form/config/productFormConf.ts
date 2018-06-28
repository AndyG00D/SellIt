import {FormControlConf} from '../dynamic-form.model'
import {Validators} from "@angular/forms";
import {ProductService} from "../../core/services/product.service";


export let productFormConf: Array<FormControlConf> = [{
  key: 'theme',
  type: 'text',
  label: 'Theme',
  validators: [Validators.required]
},
  {
    key: 'text',
    type: 'text',
    label: 'Text',
  },
  {
    key: 'price',
    type: 'number',
    label: 'Price',
    validators: [Validators.required]
  },
  {
    key: 'currency',
    value: '1',
    type: 'select',
    label: 'Currency',
    options: [
      {label: "USD", value: "1"}
    ]
  },
  {
    key: 'contract_price',
    type: 'checkbox',
    label: 'Contract Price',
  },
  {
    key: 'location',
    type: 'select',
    label: 'Location',
    value: '',
    options: [
      {label: "---", value: ''}
    ]
  },
  {
    key: 'is_active',
    type: 'checkbox',
    label: 'Active',
    value: true
  },
  // {
  //   key: 'images',
  //   type: 'files',
  //   label: 'Images'
  // },
  {
    key: 'submit',
    type: 'submit',
    label: 'Update User'
  }
];
