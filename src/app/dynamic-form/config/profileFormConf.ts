import {FormControlConf} from '../dynamic-form.model'
import {Validators} from "@angular/forms";



export let avatarFormConf: Array<FormControlConf> = [
  {
    key: 'avatar',
    type: 'file',
    label: 'Avatar'
  },
  {
    key: 'submit',
    type: 'submit',
    label: 'Change Photo'
  }
];

export let locationFormConf: Array<FormControlConf> = [

  {
    key: 'submit',
    type: 'submit',
    label: 'Update User',
  },
];

export let profileFormConf: Array<FormControlConf> = [
  {
    key: 'username',
    type: 'text',
    label: 'User name',
    // validators: [Validators.required, Validators.minLength(4), Validators.maxLength(20)]
  },
  {
    key: 'first_name',
    type: 'text',
    label: 'First Name',
    // validators: [Validators.required, Validators.minLength(4), Validators.maxLength(20)]
  },
  {
    key: 'last_name',
    type: 'text',
    label: 'Last name',
    // validators: [Validators.required, Validators.minLength(4), Validators.maxLength(20)]
  },
  {
    key: 'location',
    type: 'nested',
    label: 'Location',
    conf: [{
      key: 'name',
      type: 'text',
      label: 'Address',
      hideLabel: true
      // validators: [Validators.maxLength(6)]
    }]
  },
  {
    key: 'color_scheme',
    label: 'Color Scheme',
    value: '',
    type: 'select-color',
    options: [
      {label: "(choose one)", value: ''},
      {label: "blue", value: '#00b3be'},
      {label: "red", value: '#d21212'},
      {label: "green", value: '#91d763'},
    ]
  },
  {
    key: 'language',
    label: 'Language',
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
    label: 'Update User'
  },
  // {
  //   key: 'reset',
  //   type: 'reset',
  //   label: 'Reset',
  // },
];
