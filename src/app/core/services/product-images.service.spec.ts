///<reference path="product-images.service.ts"/>
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {inject, TestBed} from '@angular/core/testing';


import {ApiUrls} from '../api-urls';
import {Image, Product} from '../models/product';
import {mockProducts} from '../../../assets/mock-data/products';
import {mockLocation} from '../../../assets/mock-data/location';
import {HttpErrorHandler} from './http-error-handler.service';
import {MessageService} from './message.service';
import {OptionsConf} from '../../dynamic-form/dynamic-form.model';
import {ProductImagesService} from './product-images.service';

describe('ProductImagesService', () => {

  let service: ProductImagesService;
  let httpTestingController: HttpTestingController;

  const testRequestFunction = (
    functionName,
    url,
    type,
    mockData,
    resData,
    ...params) => {
    describe(`Testing #${functionName}`, () => {

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
      // auth
      // it(`#${functionName}: should emit 'false' for 401 Unauthorized`, () => {
      //
      //   service[functionName](mockData).subscribe((next) => {
      //     expect(next).toBeTruthy();
      //   });
      //
      //   const req = httpTestingController.expectOne(url);
      //   expect(req.request.method).toBe(type);
      //   req.flush(null, {status: 401, statusText: 'Unauthorized'});
      // });
    });
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductImagesService, HttpClient, HttpErrorHandler, MessageService]
    });
    // injects the service
    service = TestBed.get(ProductImagesService);
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

  it('should be created', inject([ProductImagesService], (serviceAnother: ProductImagesService) => {
    expect(serviceAnother).toBeTruthy();
  }));

  // test functions
  const advertPK = 132;
  const imageID = 132;
  const mockImages = mockProducts.results[3].images as Image[];
  const resImages = mockProducts.results[3].images as Image[];
  const mockImage = mockImages[0] as Image;
  const resImage = mockImages[0] as Image;
  const newImageFile = 'fileInBase64Format';
  const newImageFiles = [newImageFile, newImageFile, newImageFile];
  let testUrl;

  testUrl = ApiUrls.products + advertPK + '/image/';
  testRequestFunction('getImages', testUrl, 'GET', mockImages, resImages, advertPK);

  testUrl = ApiUrls.products + advertPK + '/image/';
  testRequestFunction('uploadImage', testUrl, 'POST', mockImage, resImage, advertPK, newImageFile);

  testUrl = ApiUrls.products + advertPK + '/image/' + imageID;
  testRequestFunction('updateImage', testUrl, 'PATCH', mockImage, resImage, imageID, advertPK, newImageFile);

  testUrl = ApiUrls.products + advertPK + '/image/' + imageID;
  testRequestFunction('deleteImage', testUrl, 'DELETE', null, null, imageID, advertPK);
});
