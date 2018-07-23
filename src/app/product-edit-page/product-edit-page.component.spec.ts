import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ProductEditPageComponent} from './product-edit-page.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {of} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../core/models/user';
import {mockLogin} from '../../assets/mock-data/login';
import {mockProducts} from '../../assets/mock-data/products';
import {ProfileService} from '../core/services/profile.service';
import {Product} from '../core/models/product';
import {DynamicFormModule} from '../dynamic-form/dynamic-form.module';
import {ProductService} from '../core/services/product.service';
import {MessageService} from '../core/services/message.service';

describe('ProductEditPageComponent', () => {
  let component: ProductEditPageComponent;
  let fixture: ComponentFixture<ProductEditPageComponent>;

  const activatedRouteStub = {
    data: of({data: mockProducts.results[0] as Product}),
  };

  const profileServiceStub = {
    getUser() {
      return of(mockLogin.user as User);
    }
  };

  const productServiceStub = jasmine.createSpyObj(
    'ProductService',
    ['getProduct', 'deleteProduct', 'updateProduct', 'getLocations']
  );

  // const dynamicFormService = {
  //   getUser() {
  //     return of(mockLogin.user as User);
  //   },
  // };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DynamicFormModule],
      declarations: [ProductEditPageComponent],
      providers: [
        MessageService,
        // {provide: DynamicFormService, useValue: dynamicFormService},
        {provide: ActivatedRoute, useValue: activatedRouteStub},
        {provide: ProfileService, useValue: profileServiceStub},
        {
          provide: Router, useValue: jasmine.createSpyObj(
            'Router',
            ['navigate']
          )
        },
        {
          provide: ProductService, useValue: productServiceStub
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test init data', () => {
    fixture.detectChanges();
    expect(component.user).toEqual(mockLogin.user);
    expect(component.product).toEqual(mockProducts.results[0]);
  });
});
