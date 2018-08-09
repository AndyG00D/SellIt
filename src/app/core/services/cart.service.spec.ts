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
    _cartSubjectNextSpy = spyOn(service._cartSubject, 'next');


  });

  // // test service
  it('should have a service instance', () => {
    expect(service).toBeDefined();
  });

  it('should be created', inject([CartService], (serviceAnother: CartService) => {
    expect(serviceAnother).toBeTruthy();
  }));

  // describe('Testing setCart', () => {
  //   service.setCart([mockProductInOrder]);
  //   // service._cartSubject.subscribe((data) => {
  //   //   expect(data).toBe([mockProductInOrder]);
  //   // });
  //   // expect(service._cartSubject.value).toBe([mockProductInOrder]);
  // });

  describe('Testing getCart', () => {
    // spyOn(service, 'getCart').and.returnValue(of([<ProductInOrder>{product: mockProducts[0], count: 3}]));
    // expect(service.getCart).toHaveBeenCalled();
    // expect(component.items).toEqual(jasmine.any(Object));
    // expect(component.items[0].id).toEqual(1);
    // expect(component.items[0].description).toEqual('test description');
    // expect(component.items[0].price).toEqual(50);
/*    it('#getObservableValue should return value from observable',
      (done: DoneFn) => {
        service.getCart().subscribe(value => {
          expect(value).toBe([]);
          done();
        });
      });*/

    // it('#getObservableValue should return value from observable',
    //   (done: DoneFn) => {
    //     service.getTotal().subscribe(value => {
    //       expect(value).toBe(0);
    //       done();
    //     });
    //   });

    // it('#getObservableValue should return value from observable',
    //   (done: DoneFn) => {
    //     // spyOn(service, 'getTotal').and.returnValue(of(9));
    //     service.setCart([<ProductInOrder>{product: mockProducts[0], count: 3}]);
    //     service.getTotal().subscribe(value => {
    //       expect(value).toBe(9);
    //       done();
    //     });
    //   });

  });

  describe('getter/setter', () => {


    beforeEach(() => {
      getCartSpy = spyOn(service, 'getCart').and.callThrough();
      setCartSpy = spyOn(service, 'setCart').and.callThrough();
    });

    it('Setter should cast userProfile data to profileBS & session', () => {

      service.setCart([mockProductInOrder]);

      expect(_cartSubjectNextSpy).toHaveBeenCalled();
      expect(_cartSubjectNextSpy.calls.mostRecent().args[0])
        .toEqual([mockProductInOrder]);
      expect(setLocalCartSpy).toHaveBeenCalled();
      expect(setLocalCartSpy.calls.mostRecent().args[0])
        .toEqual([mockProductInOrder]);
    });

    // it('Getter', () => {
    //   getCartSpy.and.returnValue(of([mockProductInOrder]));
    //
    //   // const getCart = service.getCart;
    //
    //   // expect(service.getCart).toEqual([mockProductInOrder]);
    //   // expect(getLocalCartSpy).toHaveBeenCalled();
    //   // expect(userProfileGetSpy).toHaveBeenCalled();
    //   service.getCart().subscribe();
    //     // value => {
    //           // expect(value).toBe([mockProductInOrder]);
    //   // expect(setLocalCartSpy).toHaveBeenCalled();
    //   expect(_cartSubjectNextSpy).toHaveBeenCalled();
    //   expect(_cartSubjectNextSpy.calls.mostRecent().args)
    //     .toEqual([mockProductInOrder]);
    // });
  });

  // describe('Testing getTotal', () => {
  // });

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
