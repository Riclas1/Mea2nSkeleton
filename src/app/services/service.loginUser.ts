import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { LoginUserData } from './../models/model.loginUser';
//import { LoginUserEventService } from './../events/event.loginUser';
import { CurrentUserData } from './../models/model.currentUser';
import { SessionStorageService } from 'ng2-webstorage';

@Injectable()
export class AuthService {

  constructor(
    private http: Http,
    //private loginusereventservice: LoginUserEventService,
    private storage: SessionStorageService
  ) {

  };

  Login(body: LoginUserData): any {
    let headers = new Headers(); // ... Set content type to JSON
    headers.append('withCredentials', 'true');
    headers.append('content-type', 'application/json');
    headers.append('cache-control', 'no-cache');
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post('auth/login', body, headers)
      .map((res: Response) => {
        let resjson = res.json();
        if (resjson.state === 'success' && !(resjson.user === undefined)) {
          let sessiondata = new CurrentUserData(resjson.user.username, resjson.user.level, true);
          
          this.storage.store('currentuser', sessiondata);
          return Observable.of(true);
        }
        let sessiondata = new CurrentUserData('***', '', false);
        //this.setCurrentUser(sessiondata);
        this.storage.store('currentuser', sessiondata);
        return Observable.of(false);
      })
      .catch((err: Response) => {
        let sessiondata = new CurrentUserData('***', '', false);
        //this.setCurrentUser(sessiondata);
        this.storage.store('currentuser', sessiondata);
        console.error(`Error status code ${err.status} at ${err.url}`);
        return Observable.of(false);
      });
  };


  Logout(): any {
    let headers = new Headers();
    return this.http.get('auth/logout', headers)
      .map((res: Response) => {
        let sessiondata = new CurrentUserData('***', '', false);
        this.storage.store('currentuser', sessiondata);
        return Observable.of(true);
      })
      .catch((err: Response) => {
        let sessiondata = new CurrentUserData('***', '', false);
        this.storage.store('currentuser', sessiondata);
        console.error(`Error status code ${err.status} at ${err.url}`);
        return Observable.of(true);
      });
  };

  isAuth(): any {
    let headers = new Headers();
    return this.http.get('auth/isauth', headers)
      .map((res: Response) => {
        let resjson = res.json();
        if (resjson.state === 'success') {
          let sessiondata = new CurrentUserData(resjson.user.username, resjson.user.level, true);
          //this.setCurrentUser(sessiondata);
          this.storage.store('currentuser', sessiondata);
          return Observable.of(true);
        }
        let sessiondata = new CurrentUserData('***', '', false);
        //this.setCurrentUser(sessiondata);
        this.storage.store('currentuser', sessiondata);
        return Observable.of(false);
      })
      .catch((err: Response) => {
        let sessiondata = new CurrentUserData('***', '', false);
        //this.setCurrentUser(sessiondata);
        this.storage.store('currentuser', sessiondata);
        console.error(`Error status code ${err.status} at ${err.url}`);
        return Observable.of(false);
      });
  };


  private handleError(error: Response) {
    console.error(error);
    let msg = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(msg);
  }

  

}