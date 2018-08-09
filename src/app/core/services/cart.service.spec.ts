import {inject, TestBed} from '@angular/core/testing';
import {mockProducts} from '../../../assets/mock-data/products';
import {mockLogin} from '../../../assets/mock-data/login';
import {SessionService} from './session.service';
import {CartService} from './cart.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';
import {ProductInOrder} from '../models/product-in-order';

describe('CartService', () => {

  let service: CartService;
  let sessionService: SessionService;
  let getCartSpy: jasmine.Spy;
  let setCartSpy: jasmine.Spy;
  let getLocalCartSpy: jasmine.Spy;
  let setLocalCartSpy: jasmine.Spy;
  let _cartSubjectNextSpy: jasmine.Spy;
  const mockProductInOrder = <ProductInOrder>{product: mockProducts.results[0], count: 3};

  beforeEach(() => {
    const sessionSpy = jasmine.createSpyObj(
      'SessionService',
      ['cart']
    );


    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        CartService,
        {
          provide: SessionService, useValue: sessionSpy
        }
      ]
    });

    // injects the service
    service = TestBed.get(CartService);
    sessionService = TestBed.get(SessionService);
    Object.defineProperties(sessionService, {
      'cart': {
        configurable: true,
        enumerable: true,
        get: () => undefined,
        set: (value) => undefined,
      }
    });
    getLocalCartSpy = spyOnProperty(sessionService, 'cart');
    setLocalCartSpy = spyOnProperty(sessionService, 'cart', 'set');
    _cartSubjectNextSpy = spyOn(service._cartSubject, 'next').and.callThrough();
    getCartSpy = spyOn(service, 'getCart').and.callThrough();
    setCartSpy = spyOn(service, 'setCart').and.callThrough();


  });

  // // test service
  it('should have a service instance', () => {
    expect(service).toBeDefined();
  });

  it('should be created', inject([CartService], (serviceAnother: CartService) => {
    expect(serviceAnother).toBeTruthy();
  }));

  describe('setCart/getCart', () => {

    it('setCart calling next _cartSubject and set in SessionService', () => {
      service.setCart([mockProductInOrder]);
      expect(_cartSubjectNextSpy).toHaveBeenCalled();
      expect(_cartSubjectNextSpy.calls.mostRecent().args[0])
        .toEqual([mockProductInOrder]);
      expect(setLocalCartSpy).toHaveBeenCalled();
      expect(setLocalCartSpy.calls.mostRecent().args[0])
        .toEqual([mockProductInOrder]);
    });

    it('getCart calling next _cartSubject and get in SessionService', (done: DoneFn) => {
      service.getCart().subscribe(() => {
        done();
      });
      service.setCart([]);
      expect(_cartSubjectNextSpy).toHaveBeenCalled();
      expect(getLocalCartSpy).toHaveBeenCalled();
    });

    it('set/get in Cart success value', (done: DoneFn) => {
      service.setCart([mockProductInOrder]);
      service.getCart().subscribe(data => {
        expect(data).toEqual([mockProductInOrder]);
        done();
      });
    });

    it('set/get wrong value', (done: DoneFn) => {
      service.setCart([]);
      service.getCart().subscribe(data => {
        expect(data).not.toEqual([mockProductInOrder]);
        done();
      });

    });

  });

  describe('Testing getTotal', () => {
    it('get value', (done: DoneFn) => {
      service.setCart([mockProductInOrder]);
      service.getTotal().subscribe(data => {
        expect(data).toEqual(3);
        done();
      });
    });
  });

  describe('Testing getProductIndex', () => {
    it('product exist in cart, return index', () => {
      service.setCart([mockProductInOrder]);
      expect(service.getProductIndex(mockProductInOrder.product)).toBe(0);
    });

    it('product not exist in cart, return -1', () => {
      service.setCart([]);
      expect(service.getProductIndex(mockProductInOrder.product)).toBe(-1);
    });
  });

  describe('Testing addProductInCart', () => {
    it('success value', (done: DoneFn) => {
      let testData;

      service.getCart().subscribe(data => {
        testData = data;
        done();
      });

      service.setCart([]);
      expect(testData).toEqual([]);

      service.addProductInCart(mockProductInOrder.product);
      expect(testData[0].product).toEqual(mockProductInOrder.product);
    });

    it('success adding and calling setCart', (done: DoneFn) => {
      let testLength: number;
      service.getCart().subscribe(data => {
        testLength = data.length;
        done();
      });
      service.setCart([]);
      expect(testLength).toEqual(0);

      service.addProductInCart(mockProductInOrder.product);
      expect(testLength).toEqual(1);

      service.addProductInCart(mockProductInOrder.product);
      expect(testLength).toEqual(2);

      service.addProductInCart(mockProductInOrder.product);
      expect(testLength).toEqual(3);

      expect(setCartSpy.calls.count()).toEqual(4);
    });
  });

  describe('Testing addOneProductCountInCart', () => {
    it('success change count of product and calling setCart', (done: DoneFn) => {
      let testData;

      service.getCart().subscribe(data => {
        testData = data;
        done();
      });

      service.setCart([mockProductInOrder]);
      expect(testData[0].product).toEqual(mockProductInOrder.product);
      expect(testData[0].count).toEqual(3);
      expect(setCartSpy.calls.count()).toEqual(1);

      service.addOneProductCountInCart(mockProductInOrder.product);
      expect(testData[0].product).toEqual(mockProductInOrder.product);
      expect(testData[0].count).toEqual(4);
      expect(setCartSpy.calls.count()).toEqual(2);

      service.addOneProductCountInCart(mockProductInOrder.product);
      expect(testData[0].product).toEqual(mockProductInOrder.product);
      expect(testData[0].count).toEqual(5);
      expect(setCartSpy.calls.count()).toEqual(3);
    });
  });

  describe('Testing setProductCountInCart', () => {
    it('success change count of product and calling setCart', (done: DoneFn) => {
      let testData;

      service.getCart().subscribe(data => {
        testData = data;
        done();
      });

      service.setCart([mockProductInOrder]);
      expect(testData[0].product).toEqual(mockProductInOrder.product);
      expect(testData[0].count).toEqual(5);
      expect(setCartSpy.calls.count()).toEqual(1);

      service.setProductCountInCart(mockProductInOrder.product, 7);
      expect(testData[0].product).toEqual(mockProductInOrder.product);
      expect(testData[0].count).toEqual(7);
      expect(setCartSpy.calls.count()).toEqual(2);

      service.setProductCountInCart(mockProductInOrder.product, 10);
      expect(testData[0].product).toEqual(mockProductInOrder.product);
      expect(testData[0].count).toEqual(10);
      expect(setCartSpy.calls.count()).toEqual(3);
    });
  });

  describe('Testing removeProductInCart', () => {
    it('remove not exist product in cart and calling setCart', (done: DoneFn) => {
      let testData;

      service.getCart().subscribe(data => {
        testData = data;
        done();
      });

      // init cart
      service.setCart([mockProductInOrder]);
      expect(testData).toEqual([mockProductInOrder]);
      expect(setCartSpy.calls.count()).toEqual(1);

      // remove not exist product
      service.removeProductInCart(12);
      expect(testData).toEqual([mockProductInOrder]);
      expect(setCartSpy.calls.count()).toEqual(2);
    });

    it('remove exist product in cart and calling setCart', (done: DoneFn) => {
      let testData;

      service.getCart().subscribe(data => {
        testData = data;
        done();
      });

      // init cart
      service.setCart([mockProductInOrder]);
      expect(testData).toEqual([mockProductInOrder]);
      expect(setCartSpy.calls.count()).toEqual(1);

      // remove exist product
      service.removeProductInCart(181);
      expect(testData).toEqual([]);
      expect(setCartSpy.calls.count()).toEqual(2);
    });
  });
});
