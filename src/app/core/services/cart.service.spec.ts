import {inject, TestBed} from '@angular/core/testing';
import {mockProducts} from '../../../assets/mock-data/products';
import {mockLogin} from '../../../assets/mock-data/login';
import {SessionService} from './session.service';
import {CartService} from './cart.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CartService', () => {

  let service: CartService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        CartService,
        {
          provide: SessionService, useValue: jasmine.createSpyObj(
            'SessionService',
            ['cart', 'setUser', 'token']
          )
        }
      ]
    });

    // injects the service
    service = TestBed.get(CartService);
  });


  // // test service
  it('should have a service instance', () => {
    expect(service).toBeDefined();
  });

  it('should be created', inject([CartService], (serviceAnother: CartService) => {
    expect(serviceAnother).toBeTruthy();
  }));

  describe('Testing setCart', () => {
    it('should have a service instance', () => {
      expect(service).toBeDefined();
    });
  });

  describe('Testing getCart', () => {
  });

  describe('Testing getTotal', () => {
  });

  describe('Testing getProductIndex', () => {
  });

  describe('Testing addProductInCart', () => {
  });

  describe('Testing addOneProductCountInCart', () => {
  });

  describe('Testing setProductCountInCart', () => {
  });

  describe('Testing removeProductInCart', () => {
  });


});
