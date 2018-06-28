import {FormControlConf} from '../dynamic-form.model'
import {CustomValidatorsService} from "../custom-validators.service";
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


export let profileFormConf: Array<FormControlConf> = [
  {
    key: 'username',
    type: 'text',
    label: 'User name',
  },
  {
    key: 'first_name',
    type: 'text',
    label: 'First Name',
  },
  {
    key: 'last_name',
    type: 'text',
    label: 'Last name',
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

export let changePasswordFormConf: Array<FormControlConf> = [
  {
    key: 'new_password1',
    type: 'password',
    label: 'Password',
    validators: [Validators.required]
  },
  {
    key: 'new_password2',
    type: 'password',
    label: 'Confirm',
    validators: [Validators.required, CustomValidatorsService.prototype.confirm('new_password1')],
  },
  {
    key: 'submit',
    type: 'submit',
    label: 'Change Password',
  }
];
