import { Injectable } from '@angular/core';
import { Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class DataProductsService {

  _dataProducts: Product[] = [
    {
      id: 1,
      imgSrc: "product1.jpg",
      imgAlt: 'product1',
      title: "Title product 1",
      show: true
    },
    {
      id: 2,
      imgSrc: "product2.jpg",
      imgAlt: 'product2',
      title: "Title product 2",
      show: true
    },
    {
      id: 3,
      imgSrc: "product3.jpg",
      imgAlt: 'product3',
      title: "Title product 3",
      show: true
    },
    {
      id: 4,
      imgSrc: "product4.jpg",
      imgAlt: 'product4',
      title: "Title product 4",
      show: true
    },
    {
      id: 5,
      imgSrc: "product1.jpg",
      imgAlt: 'product1',
      title: "Title product 5",
      show: true
    },
    {
      id: 6,
      imgSrc: "product2.jpg",
      imgAlt: 'product6',
      title: "Title product 6",
      show: true
    },
    {
      id: 7,
      imgSrc: "product3.jpg",
      imgAlt: 'product7',
      title: "Title product 7",
      show: true
    },
    {
      id: 8,
      imgSrc: "product4.jpg",
      imgAlt: 'product8',
      title: "Title product 8",
      show: true
    },
    {
      id: 9,
      imgSrc: "product1.jpg",
      imgAlt: 'product1',
      title: "Title product 9",
      show: true
    },
    {
      id: 10,
      imgSrc: "product2.jpg",
      imgAlt: 'product6',
      title: "Title product 10",
      show: true
    },
    {
      id: 11,
      imgSrc: "product3.jpg",
      imgAlt: 'product7',
      title: "Title product 11",
      show: true
    },
    {
      id: 12,
      imgSrc: "product4.jpg",
      imgAlt: 'product8',
      title: "Title product 12",
      show: true
    }
  ];

  constructor() { }

  getDataProducts(){
    return this._dataProducts
  }

}
