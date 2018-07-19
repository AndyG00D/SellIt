import {inject, TestBed} from '@angular/core/testing';
import {mockLogin} from '../../../assets/mock-data/login';
import {MessageService} from './message.service';
import {Base64ValidatorsService} from './base64-validators.service';

describe('Base64ValidatorsService', () => {

  let service: Base64ValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        Base64ValidatorsService,
        MessageService,
      ]
    });
    // injects the service
    service = TestBed.get(Base64ValidatorsService);
  });

  // test service
  it('should have a service instance', () => {
    expect(service).toBeDefined();
  });

  it('should be created', inject([Base64ValidatorsService], (serviceAnother: Base64ValidatorsService) => {
    expect(serviceAnother).toBeTruthy();
  }));

});
