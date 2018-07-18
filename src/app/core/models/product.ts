import {User} from './user';


/**
 * model of RestApi image data
 */
export interface Image {
  pk: number;
  advert: string;
  file: string;
}

/**
 * model of RestApi product(advert) data
 */
export interface Product {
  pk: number;
  owner: User;
  theme: string;
  text: string;
  price: number;
  currency: number;
  images: Image[];
  contract_price: boolean;
  location: string;
  category: string;
  activated_at: string;
  is_active: boolean;
}




