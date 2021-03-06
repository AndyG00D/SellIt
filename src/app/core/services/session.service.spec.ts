import {inject, TestBed} from '@angular/core/testing';
import {mockLogin} from '../../../assets/mock-data/login';
import {SessionService} from './session.service';
import {CookieService} from 'ngx-cookie-service';

describe('SessionService', () => {

  let service: SessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        SessionService,
        CookieService
      ]
    });
    // injects the service
    service = TestBed.get(SessionService);
  });

  // test service
  it('should have a service instance', () => {
    expect(service).toBeDefined();
  });

  it('should be created', inject([SessionService], (serviceAnother: SessionService) => {
    expect(serviceAnother).toBeTruthy();
  }));

});
