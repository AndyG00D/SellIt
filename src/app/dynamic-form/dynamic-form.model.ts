import {ValidatorFn} from "@angular/forms";


export interface optionsConf {
  label: string;
  value: any;
}

export class FormControlConf {
  //main userProps
  key: string;
  type: string;
  label: string;
  //additional userProps
  value?: any;
  validators?: ValidatorFn[];
  //userProps for select, checkbox
  options?: optionsConf[];
  //userProps for nested, arrays
  conf?: FormControlConf[];
  arrayLength?: number;
  //customisation
  hideLabel?: boolean;
  hideErrors?: boolean;
  invertTheme?: boolean;


  constructor(options: {
    key?: string,
    type?: string,
    label?: string,
    value?: any,
    validators?: ValidatorFn[],
    options?: optionsConf[],
    conf?: FormControlConf[],
    arrayLength?: number,
    hideLabel?: boolean,
    hideErrors?: boolean,
    invertTheme?: boolean
  } = {}) {
    this.key = options.key || '';
    this.type = options.type || '';
    this.label = options.label || '';
    this.value = options.value;
    this.validators = options.validators || [];
    this.options = options.options || [];
    this.conf = options.conf || [];
    this.arrayLength = options.arrayLength || 1;
    this.hideLabel = options.hideLabel || false;
    this.hideErrors = options.hideErrors || false;
    this.invertTheme = options.invertTheme || false;
  }
}




