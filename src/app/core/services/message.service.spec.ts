import {inject, TestBed} from '@angular/core/testing';
import {mockLogin} from '../../../assets/mock-data/login';
import {MessageService} from './message.service';

describe('MessageService', () => {

  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        MessageService,
      ]
    });
    // injects the service
    service = TestBed.get(MessageService);
  });

  // test service
  it('should have a service instance', () => {
    expect(service).toBeDefined();
  });

  // it('should be created', inject([MessageService], (serviceAnother: MessageService) => {
  //   expect(serviceAnother).toBeTruthy();
  // }));

});
