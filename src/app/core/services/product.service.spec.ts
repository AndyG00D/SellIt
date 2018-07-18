///<reference path="product.service.ts"/>
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
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
import {OptionsConf} from '../../dynamic-form/dynamic-form.model';

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

      it(`#${functionName}: can test for 404 error`, () => {
        const emsg = 'deliberate 404 error';
        // function should have made one request and get respond fail
        service[functionName](...params).subscribe(
          data => fail,
          (error: HttpErrorResponse) => {
            expect(error.status).toEqual(404, 'status');
            expect(error.error).toEqual(emsg, 'message');
          }
        );

        const req = httpTestingController.expectOne(url);
        expect(req.request.method).toBe(type);

        // Respond with mock error
        req.flush(emsg, {status: 404, statusText: 'Not Found'});
      });

      it(`#${functionName}: can test for network error`, () => {
        const emsg = 'simulated network error';

        // function should have made one request and get respond fail
        service[functionName](...params).subscribe(
          data => fail,
          (error: HttpErrorResponse) => {
            expect(error.error.message).toEqual(emsg, 'message');
          }
        );

        const req = httpTestingController.expectOne(url);
        expect(req.request.method).toBe(type);

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
      expect(req.request.method).toBe(type);

      // Assert that the request is a GET.
      // expect(req.request.method).toBe('POST');

      // Respond with the mock data
      req.flush(null, {status: 401, statusText: 'Unauthorized'});

      // httpTestingController.expectOne(url).flush(null, {status: 401, statusText: 'Unauthorized'});
    });
  };

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

  // test service
  it('should have a service instance', () => {
    expect(service).toBeDefined();
  });

  it('should be created', inject([ProductService], (serviceAnother: ProductService) => {
    expect(serviceAnother).toBeTruthy();
  }));

  // test functions
  const id = 132;
  const offset = 0;
  const limit = 12;
  const resProducts = mockProducts.results as Product[];
  const mockProduct = mockProducts.results[0] as Product;
  const resProduct = mockProducts.results[0] as Product;
  const newProduct = mockProducts.results[0] as Product;
  const mockLocat = [{name: 'here', id: 1}];
  const resLocat = [{value: 1, label: 'here'}] as OptionsConf[];
  let testUrl;

  testUrl = `${ApiUrls.products}?offset=${offset}&limit=${limit}`;
  testRequestFunction('getProducts', testUrl, 'GET', mockProducts, resProducts, offset, limit);

  testUrl = ApiUrls.products + 132 + '/';
  testRequestFunction('getProduct', testUrl, 'GET', mockProduct, resProduct, id);

  testUrl = ApiUrls.products;
  testRequestFunction('addProduct', testUrl, 'POST', mockProduct, resProducts, newProduct);

  testUrl = ApiUrls.products + 132 + '/';
  testRequestFunction('updateProduct', testUrl, 'PATCH', mockProduct, resProduct, id, newProduct);

  testUrl = ApiUrls.products + 132 + '/';
  testRequestFunction('deleteProduct', testUrl, 'DELETE', mockProduct, resProduct, id);

  testUrl = ApiUrls.locations;
  testRequestFunction('getLocations', testUrl, 'GET', mockLocat, resLocat);
});
