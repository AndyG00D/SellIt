import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ProfilePageComponent} from './profile-page.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ProfileService} from '../core/services/profile.service';
import {mockProducts} from '../../assets/mock-data/products';
import {mockLogin} from '../../assets/mock-data/login';
import {of} from 'rxjs';
import {User} from '../core/models/user';
import {DynamicFormModule} from '../dynamic-form/dynamic-form.module';
import {Base64ValidatorsService} from '../core/services/base64-validators.service';
import {avatarFormConf, changePasswordFormConf, profileFormConf} from '../dynamic-form/config/profileFormConf';
import {By} from '@angular/platform-browser';


describe('ProfilePageComponent', () => {
  let component: ProfilePageComponent;
  let fixture: ComponentFixture<ProfilePageComponent>;
  let profileService: ProfileService;
  let updateProfileSpy: jasmine.Spy;
  let getChangePasswordSpy: jasmine.Spy;

  beforeEach(async(() => {

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
      imports: [DynamicFormModule],
      declarations: [ProfilePageComponent],
      providers: [
        {
          provide: Base64ValidatorsService, useValue: jasmine.createSpyObj(
            'Base64ValidatorsService',
            ['isValidType', 'isValidSize', 'isValidCount']
          )
        },
        {
          provide: ProfileService, useValue: profileServiceStub
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    profileService = TestBed.get(ProfileService);
    fixture = TestBed.createComponent(ProfilePageComponent);
    component = fixture.componentInstance;
    updateProfileSpy = spyOn(profileService, 'updateProfile').and.returnValue(of(mockLogin.user));
    getChangePasswordSpy = spyOn(profileService, 'getChangePassword').and.returnValue(of());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test init data', () => {
    fixture.detectChanges();
    expect(component.user).toEqual(mockLogin.user);
    expect(component.userProps).toEqual(profileFormConf);
    expect(component.avatarProps).toEqual(avatarFormConf);
    expect(component.passProps).toEqual(changePasswordFormConf);
  });

  it('Test submit', (done: DoneFn) => {
    const forms = fixture.debugElement.queryAll(By.css('form'));

    forms[0].triggerEventHandler('submit', null);
    fixture.detectChanges();
    expect(updateProfileSpy).toHaveBeenCalledTimes(1);

    forms[1].triggerEventHandler('submit', null);
    fixture.detectChanges();
    expect(updateProfileSpy).toHaveBeenCalledTimes(2);

    done();
  });

});
