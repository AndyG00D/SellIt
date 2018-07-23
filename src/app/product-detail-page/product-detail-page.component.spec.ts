import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ProductDetailPageComponent} from './product-detail-page.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {of} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../core/models/user';
import {mockLogin} from '../../assets/mock-data/login';
import {mockProducts} from '../../assets/mock-data/products';
import {ProfileService} from '../core/services/profile.service';
import {Product} from '../core/models/product';

describe('ProductDetailPageComponent', () => {
  let component: ProductDetailPageComponent;
  let fixture: ComponentFixture<ProductDetailPageComponent>;

  const activatedRouteStub = {
    data: of({data: mockProducts.results[0] as Product}),
  };

  const profileServiceStub = {
    getUser() {
      return of(mockLogin.user as User);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailPageComponent],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRouteStub},
        {provide: ProfileService, useValue: profileServiceStub},
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test init data', () => {
    // fixture.detectChanges();
    expect(component.user).toEqual(mockLogin.user);
    expect(component.product).toEqual(mockProducts.results[0]);
  });
});
