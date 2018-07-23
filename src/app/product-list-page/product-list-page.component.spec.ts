import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductListPageComponent} from './product-list-page.component';
import {MessageService} from '../core/services/message.service';
import {HttpErrorHandler} from '../core/services/http-error-handler.service';
import {ProductService} from '../core/services/product.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {ProfileService} from '../core/services/profile.service';
import {SessionService} from '../core/services/session.service';
import {Router} from '@angular/router';
import {mockProducts} from '../../assets/mock-data/products';
import {mockLogin} from '../../assets/mock-data/login';
import {of} from 'rxjs';
import {Component, Input, NO_ERRORS_SCHEMA} from '@angular/core';
import {User} from '../core/models/user';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';

describe('ProductListPageComponent', () => {
  let component: ProductListPageComponent;
  let fixture: ComponentFixture<ProductListPageComponent>;
  let productService: jasmine.SpyObj<ProductService>; // the TestBed injected service
  let profileService: ProfileService;
  // let getProductsSpy: jasmine.Spy;

  beforeEach(async(() => {
    // const productServiceStub = {
    //   infoMsg: 'info',
    //   getProducts() {
    //     return of(mockProducts.results);
    //   },
    // };

    const productServiceStub = jasmine.createSpyObj(
      'ProductService',
      ['getProducts']
    );

    const profileServiceStub = {
      getUser() {
        return of(mockLogin.user);
      },

      updateProfile(user: User) {
        return of(mockLogin.user);
      },

      getChangePassword() {
        return of();
      }
    };

    TestBed.configureTestingModule({
      imports: [
        BrowserDynamicTestingModule,
      ],
      declarations: [
        ProductListPageComponent
      ],
      providers: [
        HttpClient,
        HttpClient,
        HttpErrorHandler,
        {
          provide: ProductService, useValue: productServiceStub
        },
        {
          provide: ProfileService, useValue: profileServiceStub
        },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {

    productService = TestBed.get(ProductService);
    profileService = TestBed.get(ProfileService);
    fixture = TestBed.createComponent(ProductListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    productService.getProducts.and.returnValue(of(mockProducts.results));
    expect(component).toBeTruthy();
  });

  it('Test init data', () => {
    fixture.detectChanges();
    expect(component.user).toEqual(mockLogin.user);
    expect(component.products).toEqual(mockProducts.results);
  });
});
