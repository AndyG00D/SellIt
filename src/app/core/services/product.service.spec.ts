import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import {HttpClient} from "@angular/common/http";
import {HttpErrorHandler} from "./http-error-handler.service";
import {MessageService} from "./message.service";
import {Product} from "../models/product";

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;
  let products: Product[];
  products = [new Product];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService, HttpClient, HttpErrorHandler, MessageService]
    });

    // inject the service
    service = TestBed.get(ProductService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should have a service instance', () => {
    expect(service).toBeDefined();
  });

  it('should return the observable', () => {
    service.getProducts(0, 1).subscribe(data => {
      expect(data.results).toBe(products);
    });

    // const req = httpMock.expectOne('/someendpoint/people.json', 'call to api');
    // expect(req.request.method).toBe('GET');
    //
    // req.flush({
    //   name: 'Juri'
    // });
  });
});
