///<reference path="product.service.ts"/>
import {HttpClient, HttpErrorResponse, HttpRequest} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {inject, TestBed} from '@angular/core/testing';
import {of} from 'rxjs';
import {ProductService} from './product.service';

import {ApiUrls} from '../api-urls';
import {Product} from '../models/product';
import {mockProducts} from '../../../assets/mock-data/products';
import {mockLocation} from '../../../assets/mock-data/location';
import {HttpErrorHandler} from './http-error-handler.service';
import {MessageService} from './message.service';
import {AuthInterceptor} from './auth.interceptor';


describe('ProductService', () => {

  let service: ProductService;
  let httpTestingController: HttpTestingController;
  const testRequestFunction = (
    functionName,
    url,
    type,
    mockData,
    resData,
    ...params) => {
    describe(`Testing #${functionName}`, () => {
      // const id: number = 132;
      // let params: any[] = [id];
      // // params.push(132);
      // const url = ApiUrls.products + id + '/';
      // const mockData = mockProducts.results[0] as Product;

      it(`#${functionName}: should return data of`, () => {
        // function should have made one request and equaled result data
        service[functionName](...params).subscribe(data => {
          expect(data).toEqual(resData);
        });

        // The following `expectOne()` will match the request's URL.
        const req = httpTestingController.expectOne(url);

        // Assert the request type ('GET', 'POST', 'PUT', 'PATCH', 'DELETE').
        expect(req.request.method).toBe(type);

        // Respond with the mock data
        req.flush(mockData);
      });

      // it('can test for 404 error', () => {
      //
      //   const emsg = 'deliberate 404 error';
      //
      //   service[functionName](mockData).subscribe(
      //     data => fail('should have failed with the 404 error'),
      //     (error: HttpErrorResponse) => {
      //       expect(error.status).toEqual(404, 'status');
      //       expect(error.error).toEqual(emsg, 'message');
      //     }
      //   );
      //   const req = httpTestingController.expectOne(url);
      //   req.flush(emsg, { status: 404, statusText: 'Not Found'});
      // });
      //
      // it('can test for network error', () => {
      //   const emsg = 'simulated network error';
      //
      //   service[functionName](mockData).subscribe(
      //     data => fail,
      //     (error: HttpErrorResponse) => {
      //       expect(error.error.message).toEqual(emsg, 'message');
      //     }
      //   );
      //
      //   const req = httpTestingController.expectOne(url);
      //   // Create mock ErrorEvent, raised when something goes wrong at the network level.
      //   // Connection timeout, DNS error, offline, etc
      //   const mockError = new ErrorEvent('Network error', {message: emsg });
      //
      //   // Respond with mock error
      //   req.error(mockError);
      // });

      it(`#${functionName}: can test for 404 error`, () => {
        const emsg = 'deliberate 404 error';

        service[functionName](...params).subscribe(
          data => fail,
          (error: HttpErrorResponse) => {
            expect(error.status).toEqual(404, 'status');
            expect(error.error).toEqual(emsg, 'message');
          }
        );

        const req = httpTestingController.expectOne(url);

        // Respond with mock error
        req.flush(emsg, {status: 404, statusText: 'Not Found'});
      });

      it(`#${functionName}: can test for network error`, () => {
        const emsg = 'simulated network error';

        service[functionName](...params).subscribe(
          data => fail,
          (error: HttpErrorResponse) => {
            expect(error.error.message).toEqual(emsg, 'message');
          }
        );

        const req = httpTestingController.expectOne(url);

        // Create mock ErrorEvent, raised when something goes wrong at the network level.
        // Connection timeout, DNS error, offline, etc
        const mockError = new ErrorEvent('Network error', {
          message: emsg,
        });

        // Respond with mock error
        req.error(mockError);
      });
    });
    // auth
      it(`#${functionName}: should emit 'false' for 401 Unauthorized`, () => {

        service[functionName](mockData).subscribe((next) => {
          expect(next).toBeTruthy();
        });

        const req = httpTestingController.expectOne(url);

        // Assert that the request is a GET.
        // expect(req.request.method).toBe('POST');

        // Respond with the mock data
        req.flush(null, {status: 401, statusText: 'Unauthorized'});

        // httpTestingController.expectOne(url).flush(null, {status: 401, statusText: 'Unauthorized'});
      });
  };
  // const checkUrl = (url) => (request: HttpRequest<any>): boolean => {
  //   return request.url.includes(url);
  // };
  // const testingUrl = ApiUrls.products;
  // const mockJson = mockProducts;
  //   {
  //   results: [
  //     {
  //       owner: {},
  //       price: 15,
  //       text: 'mock-text',
  //       theme: '',
  //       id: 32,
  //       images: []
  //     }
  //   ],
  //   next: 'test-next'
  // };
  // const resultData = mockProducts.results;
  // mockJson.results.map(advert => new Product());

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService, HttpClient, HttpErrorHandler, MessageService]
    });
    // injects the service
    service = TestBed.get(ProductService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should have a service instance', () => {
    expect(service).toBeDefined();
  });

  it('should be created', inject([ProductService], (serviceAnother: ProductService) => {
    expect(serviceAnother).toBeTruthy();
  }));

  // + '?offset=0&limit=12'
  // describe('#getProduct', () => testRequestFunction('getProduct', [132], ApiUrls.products + 132 + '/', mockProducts.results[0]));
  testRequestFunction('getProducts', ApiUrls.products + '?offset=0&limit=12', 'GET', mockProducts, mockProducts.results as Product[], 0, 12);
  const mockProduct = mockProducts.results[0] as Product;
  testRequestFunction('getProduct', ApiUrls.products + 132 + '/', 'GET', mockProduct, mockProduct, 132);
  testRequestFunction('addProduct', ApiUrls.products, 'POST', mockProduct, mockProduct, mockProduct);
  testRequestFunction('updateProduct', ApiUrls.products + 132 + '/', 'PATCH', mockProduct, mockProduct, 132, mockProduct);
  testRequestFunction('deleteProduct', ApiUrls.products + 132 + '/', 'DELETE', mockProduct, mockProduct, 132);
  testRequestFunction('getLocations', ApiUrls.locations, 'GET', [{ name: 'here', id: 1 }], [{ label: 'here', value: 1 }]);
  // const functionName = 'addProduct';
  // const url = ApiUrls.products;
  // const mockData = mockProducts.results[0] as Product;
  // describe(`Testing #${functionName}`, () => {
  //   it('should return the Product', () => {
  //     // service should have made one request to GET data from expected URL
  //     service[functionName](mockData).subscribe(data => {
  //       expect(data).toEqual(mockData);
  //     });
  //
  //     // The following `expectOne()` will match the request's URL.
  //     const req = httpTestingController.expectOne(url);
  //
  //     // Assert that the request is a GET.
  //     expect(req.request.method).toBe('POST');
  //
  //     req.flush(mockData, { status: 200, statusText: 'Ok' });
  //     // Respond with the mock data
  //     // req.flush(mockData);
  //     //
  //     // // Expect server to return the hero after PUT
  //     // const expectedResponse = new HttpResponse(
  //     //   { status: 200, statusText: 'OK', body: updateHero });
  //     // req.event(expectedResponse);
  //
  //   });
  //
  //   it(`should emit 'false' for 401 Unauthorized`, () => {
  //
  //     service[functionName](mockData).subscribe((next) => {
  //       expect(next).toBeTruthy();
  //     });
  //
  //     const req = httpTestingController.expectOne(url);
  //
  //     // Assert that the request is a GET.
  //     // expect(req.request.method).toBe('POST');
  //
  //     // Respond with the mock data
  //     req.flush(null, {status: 401, statusText: 'Unauthorized'});
  //
  //     // httpTestingController.expectOne(url).flush(null, {status: 401, statusText: 'Unauthorized'});
  //   });
  //
  //   it('can test for 404 error', () => {
  //
  //     const emsg = 'deliberate 404 error';
  //
  //     service[functionName](mockData).subscribe(
  //       data => fail,
  //       (error: HttpErrorResponse) => {
  //         expect(error.status).toEqual(404, 'status');
  //         expect(error.error).toEqual(emsg, 'message');
  //       }
  //     );
  //     const req = httpTestingController.expectOne(url);
  //     req.flush(null, { status: 404, statusText: 'Not Found'});
  //   });
  //
  //   it('can test for network error', () => {
  //     const emsg = 'simulated network error';
  //
  //     service[functionName](mockData).subscribe(
  //       data => fail,
  //       (error: HttpErrorResponse) => {
  //         expect(error.error.message).toEqual(emsg, 'message');
  //       }
  //     );
  //
  //     const req = httpTestingController.expectOne(url);
  //     // Create mock ErrorEvent, raised when something goes wrong at the network level.
  //     // Connection timeout, DNS error, offline, etc
  //     const mockError = new ErrorEvent('Network error', {message: emsg });
  //
  //     // Respond with mock error
  //     req.error(mockError);
  //   });
  // });

    // it(`should emit 'true' for 200 Ok`, () => {
    //
    //   service[functionName](mockData).subscribe((next) => {
    //     expect(next).toBeTruthy();
    //   });
    //
    //   const req = httpTestingController.expectOne(url);
    //
    //   // Assert that the request is a GET.
    //   // expect(req.request.method).toBe('POST');
    //
    //   // Respond with the mock data
    //   req.flush(null, { status: 200, statusText: 'Ok' });
    //
    //   // httpTestingController.expectOne(url).flush(null, {status: 401, statusText: 'Unauthorized'});
    // });



    // it(`should emit 'true' for 200 Ok`, async(inject([AuthInterceptor, HttpTestingController],
    //   (service: HttpClientFeatureService, backend: HttpTestingController) => {
    //     service.login('foo', 'bar').subscribe((next) => {
    //       expect(next).toBeTruthy();
    //     });
    //
    //     backend.expectOne('auth/login').flush(null, { status: 200, statusText: 'Ok' });
    //   })));

    // it('can test for 404 error', () => {
    //   const emsg = 'deliberate 404 error';
    //
    //   service[functionName](mockData).subscribe(
    //     data => fail('should have failed with the 404 error'),
    //     (error: HttpErrorResponse) => {
    //       expect(error.status).toEqual(404, 'status');
    //       expect(error.error).toEqual(emsg, 'message');
    //     }
    //   );
    //
    //   const req = httpTestingController.expectOne(url);
    //
    //   // Respond with mock error
    //   req.flush(emsg, {status: 404, statusText: 'Not Found'});
    // });
  // describe('private .adaptResponse()', () => {
  //
  //   it('should do nothing when empty project', () => {
  //     of().pipe(service.adaptResponse())
  //       .subscribe(
  //         (data) => {
  //           expect(data).toEqual([], 'result data wasn\'t empty');
  //           expect(service.nextPage).toBeUndefined();
  //         });
  //   });
  //
  //   it('should set nexPage as "test-next"', () => {
  //     of({next: 'test-next'}).pipe(service.adaptResponse())
  //       .subscribe(
  //         (data) => {
  //           expect(data).toEqual([], 'result data isn\'t empty');
  //         }
  //       );
  //     expect(service.nextPage).toBe('test-next');
  //   });
  //
  //   it('should set transform taken data', () => {
  //     of(mockJson).pipe(service.adaptResponse())
  //       .subscribe(
  //         (data) => {
  //           expect(data).toEqual(resultData, 'result data is wrong');
  //           expect(service.nextPage).toBe('test-next');
  //         }
  //       );
  //   });
  // });

  // describe('.getProducts()', () => {
  //
  //   it('should return the Product[]', () => {
  //     service.getProducts(0, 12).subscribe(data => {
  //       expect(data).toEqual(resultData);
  //     });
  //
  //     const req = httpTestingController.expectOne(checkUrl(testingUrl), 'call to api');
  //     expect(req.request.method).toBe('GET');
  //
  //     req.flush(mockJson);
  //
  //     httpTestingController.verify();
  //   });
  //
  //   it('should return nothing when empty', () => {
  //     service.getProducts(0, 0).subscribe(data => {
  //       expect(data).toEqual([]);
  //     });
  //
  //     const req = httpTestingController.expectOne(checkUrl(testingUrl), 'call to api');
  //     expect(req.request.method).toBe('GET');
  //
  //     req.flush({});
  //
  //     httpTestingController.verify();
  //   });
  //
  //   it('can test for 404 error', () => {
  //     const emsg = 'deliberate 404 error';
  //
  //     service.getProducts(0, 12).subscribe(
  //       data => fail('should have failed with the 404 error'),
  //       (error: HttpErrorResponse) => {
  //         expect(error.status).toEqual(404, 'status');
  //         expect(error.error).toEqual(emsg, 'message');
  //       }
  //     );
  //
  //     const req = httpTestingController.expectOne(checkUrl(testingUrl));
  //
  //     // Respond with mock error
  //     req.flush(emsg, { status: 404, statusText: 'Not Found' });
  //   });
  //
  //   it('can test for network error', () => {
  //     const emsg = 'simulated network error';
  //
  //     service.getProducts(0, 12).subscribe(
  //       data => fail('should have failed with the network error'),
  //       (error: HttpErrorResponse) => {
  //         expect(error.error.message).toEqual(emsg, 'message');
  //       }
  //     );
  //
  //     const req = httpTestingController.expectOne(checkUrl(testingUrl));
  //
  //     // Create mock ErrorEvent, raised when something goes wrong at the network level.
  //     // Connection timeout, DNS error, offline, etc
  //     const mockError = new ErrorEvent('Network error', {
  //       message: emsg,
  //     });
  //
  //     // Respond with mock error
  //     req.error(mockError);
  //   });
  // });


  // describe('#getProduct', () => {
  //
  //   const id: number = 132;
  //   let params: any[] = [id];
  //   // params.push(132);
  //   const url = ApiUrls.products + id + '/';
  //   const mockData = mockProducts.results[0] as Product;
  //
  //   it('should return the Product', () => {
  //     // service should have made one request to GET data from expected URL
  //     service['getProduct'](...params).subscribe(data => {
  //       expect(data).toEqual(mockData);
  //     });
  //
  //     // The following `expectOne()` will match the request's URL.
  //     const req = httpTestingController.expectOne(url);
  //
  //     // Assert that the request is a GET.
  //     expect(req.request.method).toBe('GET');
  //
  //     // Respond with the mock data
  //     req.flush(mockData);
  //
  //   });
  //
  //   it('can test for 404 error', () => {
  //     const emsg = 'deliberate 404 error';
  //
  //     service['getProduct'](...params).subscribe(
  //       data => fail('should have failed with the 404 error'),
  //       (error: HttpErrorResponse) => {
  //         expect(error.status).toEqual(404, 'status');
  //         expect(error.error).toEqual(emsg, 'message');
  //       }
  //     );
  //
  //     const req = httpTestingController.expectOne(url);
  //
  //     // Respond with mock error
  //     req.flush(emsg, {status: 404, statusText: 'Not Found'});
  //   });
  //
  //   it('can test for network error', () => {
  //     const emsg = 'simulated network error';
  //
  //     service['getProduct'](...params).subscribe(
  //       data => fail('should have failed with the network error'),
  //       (error: HttpErrorResponse) => {
  //         expect(error.error.message).toEqual(emsg, 'message');
  //       }
  //     );
  //
  //     const req = httpTestingController.expectOne(url);
  //
  //     // Create mock ErrorEvent, raised when something goes wrong at the network level.
  //     // Connection timeout, DNS error, offline, etc
  //     const mockError = new ErrorEvent('Network error', {
  //       message: emsg,
  //     });
  //
  //     // Respond with mock error
  //     req.error(mockError);
  //   });
  // });

  // describe('#getProduct', () => {
  //
  //   const id = 132;
  //   const params = id;
  //   const url = ApiUrls.products + id + '/';
  //   const mockData = mockProducts.results[0] as Product;
  //
  //   it('should return the Product', () => {
  //     // service should have made one request to GET data from expected URL
  //     service.getProduct(params).subscribe(data => {
  //       expect(data).toEqual(mockData);
  //     });
  //
  //     // The following `expectOne()` will match the request's URL.
  //     const req = httpTestingController.expectOne(url);
  //
  //     // Assert that the request is a GET.
  //     expect(req.request.method).toBe('GET');
  //
  //     // Respond with the mock data
  //     req.flush(mockData);
  //
  //   });
  //
  //   it('can test for 404 error', () => {
  //     const emsg = 'deliberate 404 error';
  //
  //     service.getProduct(id).subscribe(
  //       data => fail('should have failed with the 404 error'),
  //       (error: HttpErrorResponse) => {
  //         expect(error.status).toEqual(404, 'status');
  //         expect(error.error).toEqual(emsg, 'message');
  //       }
  //     );
  //
  //     const req = httpTestingController.expectOne(url);
  //
  //     // Respond with mock error
  //     req.flush(emsg, {status: 404, statusText: 'Not Found'});
  //   });
  //
  //   it('can test for network error', () => {
  //     const emsg = 'simulated network error';
  //
  //     service.getProduct(id).subscribe(
  //       data => fail('should have failed with the network error'),
  //       (error: HttpErrorResponse) => {
  //         expect(error.error.message).toEqual(emsg, 'message');
  //       }
  //     );
  //
  //     const req = httpTestingController.expectOne(url);
  //
  //     // Create mock ErrorEvent, raised when something goes wrong at the network level.
  //     // Connection timeout, DNS error, offline, etc
  //     const mockError = new ErrorEvent('Network error', {
  //       message: emsg,
  //     });
  //
  //     // Respond with mock error
  //     req.error(mockError);
  //   });
  // });
  //
  // describe('.getNext()', () => {
  //   const testOffset = 25;
  //   const offsetParam = (testOffset * 12).toString(10);
  //
  //   it('should return the Product[]', () => {
  //     service.getNext(testOffset).subscribe(data => {
  //       expect(data).toEqual(resultData);
  //     });
  //
  //     const req = httpTestingController.expectOne(checkUrl(testingUrl), 'call to api');
  //     expect(req.request.method).toBe('GET');
  //     expect(req.request.params.get('offset')).toBe(offsetParam);
  //
  //     req.flush(mockJson);
  //
  //     httpTestingController.verify();
  //   });
  //
  //   it('should return nothing when empty', () => {
  //     service.getNext(testOffset).subscribe(data => {
  //       expect(data).toEqual([]);
  //     });
  //
  //     const req = httpTestingController.expectOne(checkUrl(testingUrl), 'call to api');
  //     expect(req.request.method).toBe('GET');
  //     expect(req.request.params.get('offset')).toBe(offsetParam);
  //
  //
  //     req.flush({});
  //
  //     httpTestingController.verify();
  //   });
  //
  //   it('can test for 404 error', () => {
  //     const emsg = 'deliberate 404 error';
  //
  //     service.getNext(testOffset).subscribe(
  //       data => fail('should have failed with the 404 error'),
  //       (error: HttpErrorResponse) => {
  //         expect(error.status).toEqual(404, 'status');
  //         expect(error.error).toEqual(emsg, 'message');
  //       }
  //     );
  //
  //     const req = httpTestingController.expectOne(checkUrl(testingUrl));
  //
  //     // Respond with mock error
  //     req.flush(emsg, { status: 404, statusText: 'Not Found' });
  //   });
  //
  //   it('can test for network error', () => {
  //     const emsg = 'simulated network error';
  //
  //     service.getNext(testOffset).subscribe(
  //       data => fail('should have failed with the network error'),
  //       (error: HttpErrorResponse) => {
  //         expect(error.error.message).toEqual(emsg, 'message');
  //       }
  //     );
  //
  //     const req = httpTestingController.expectOne(checkUrl(testingUrl));
  //
  //     // Create mock ErrorEvent, raised when something goes wrong at the network level.
  //     // Connection timeout, DNS error, offline, etc
  //     const mockError = new ErrorEvent('Network error', {
  //       message: emsg,
  //     });
  //
  //     // Respond with mock error
  //     req.error(mockError);
  //   });
  // });
});
