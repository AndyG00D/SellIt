import {FormControlConf} from '../dynamic-form.model'
import {Validators} from "@angular/forms";


export let profileFormConf: Array<FormControlConf> = [
  {
    key: 'username',
    type: 'text',
    label: 'User name',
    validators: [Validators.required, Validators.minLength(4), Validators.maxLength(20)]
  },
  {
    key: 'first_Name',
    type: 'text',
    label: 'First Name',
    validators: [Validators.required, Validators.minLength(4), Validators.maxLength(20)]
  },
  {
    key: 'last_name',
    type: 'text',
    label: 'Last name',
    validators: [Validators.required, Validators.minLength(4), Validators.maxLength(20)]
  },
  {
    key: 'location',
    type: 'text',
    label: 'Location',
    validators: [Validators.required, Validators.minLength(4), Validators.maxLength(20)]
  },
  {
    key: 'color_scheme',
    label: 'Select',
    value: '39010',
    type: 'select',
    options: [
      {label: "(choose one)", value: ''},
      {label: "red", value: '#d21212'},
      {label: "green", value: '#91d763'},
      {label: "blue", value: '#00b3be'}
    ]
  },
  {
    key: 'language',
    label: 'Select',
    value: '',
    type: 'select',
    options: [
      {label: "(choose one)", value: ''},
      {label: "English", value: 'en'},
      {label: "Japan", value: 'ja'},
      {label: "France", value: 'fr'}
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
