// export class Product {
//   public id: number;
//   public imgSrc: string;
//   public imgAlt: string;
//   public title: string;
//   public show: boolean;
//
//   constructor(json: any){
//     this.id = json.pk;
//     if(json.images[0] != undefined) {
//     // if('file' in json.images{
//       this.imgSrc = json.images[0].file;
//     } else {
//       this.imgSrc = 'https://vignette.wikia.nocookie.net/hunterxhunter/images/6/6d/No_image.png/revision/latest?cb=20120417110152';
//     }
//     this.imgAlt = json.text;
//     this.title = json.theme;
//     this.show = json.is_active;
//   }
// }

// export interface Owner {
//   id: number;
//   username: string;
//   email: string;
//   first_name: string;
//   last_name: string;
//   avatar: string;
//   location: string;
//   color_scheme: string;
//   language: string;
// }
//
// export interface Image {
//   pk: number;
//   advert: string;
//   file: string;
// }

import {ValidateFn} from "codelyzer/walkerFactory/walkerFn";
import {T} from "@angular/core/src/render3";
import {AbstractControl, ValidatorFn} from "@angular/forms";


export interface optionsConf {
  label: string;
  value: string;
}

export class FormControlConf {
  key: string;
  type: string;
  label: string;
  value?: string;
  validators?: ValidatorFn[];
  options?: optionsConf[];
  hideLabel?: boolean;


  constructor(options: {
    key?: string,
    type?: string,
    label?: string,
    value?: string,
    validators?: ValidatorFn[],
    options?: optionsConf[],
    hideLabel?: boolean
  } = {}) {
    this.key = options.key || '';
    this.type = options.type || '';
    this.label = options.label || '';
    this.value = options.value || '';
    this.validators = options.validators || [];
    this.options = options.options || [];
    this.hideLabel = options.hideLabel || false;
  }
}




