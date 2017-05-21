import { TestBed, inject , async} from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import {
  Http, HttpModule, XHRBackend, ResponseOptions,
  Response, BaseRequestOptions
} from '@angular/http';
import { LoginUserData } from './../models/model.loginUser';
import { CurrentUserData } from './../models/model.currentUser';
import { LoginUserEventService } from './../events/event.loginUser'
import { AuthService } from './service.loginUser';
import { SessionStorageService } from 'ng2-webstorage';
import 'rxjs/Rx';

describe('service: AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Http, useFactory: (backend, options) => {
            return new Http(backend, options);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions,
        AuthService,
        SessionStorageService
      ]
    });
  });

  it('AthuService Login get failed from Api',
    async(inject([AuthService, MockBackend],
                 (service: AuthService, backend: MockBackend) => {
     const loginuser = new LoginUserData('kilian', 'test1234');
     const mockdata = {
      state: 'failed',
      user: {
        username: 'kilian',
        level: '9'
      }
    }

    backend.connections.subscribe((conn: MockConnection) => {
      const options: ResponseOptions = new ResponseOptions({body: mockdata});
      conn.mockRespond(new Response(options));
    });

    service.Login(loginuser).subscribe(res => {
         expect(res.value).toBeFalsy();
    });
  })));

  it('AthuService Login get success from Api',
    async(inject([AuthService, MockBackend ],
                 (service: AuthService, backend: MockBackend) => {
     const loginuser = new LoginUserData('kilian', 'test1234');
     const mockdata = {
      state: 'success',
      user: {
        username: 'kilian',
        level: '9'
      }
    }

    backend.connections.subscribe((conn: MockConnection) => {
      const options: ResponseOptions = new ResponseOptions({body: mockdata});
      conn.mockRespond(new Response(options));
    });

    service.Login(loginuser).subscribe(res => {
         expect(res.value).toBeTruthy();
    });
  })));
});