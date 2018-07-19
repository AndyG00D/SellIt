import {inject, TestBed} from '@angular/core/testing';
import {mockLogin} from '../../../assets/mock-data/login';
import {MessageService} from './message.service';
import {HttpErrorHandler} from './http-error-handler.service';

describe('HttpErrorHandler', () => {

  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        HttpErrorHandler,
        MessageService,
      ]
    });
    // injects the service
    service = TestBed.get(HttpErrorHandler);
  });

  // test service
  it('should have a service instance', () => {
    expect(service).toBeDefined();
  });

  it('should be created', inject([HttpErrorHandler], (serviceAnother: HttpErrorHandler) => {
    expect(serviceAnother).toBeTruthy();
  }));
});
