import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { loginUserdata } from './../shared/shared.loginUserDate'


@Injectable()
export class AuthService {

  constructor(private _http: Http) {

  }

  Login(body: loginUserdata) {
    let headers = new Headers(); // ... Set content type to JSON
    headers.append('withCredentials', 'true');
    headers.append('content-type', 'application/json');
    headers.append('cache-control', 'no-cache');
    let options = new RequestOptions({ headers: headers }); // Create a request option
   
    return this._http.post('http://localhost:3000/auth/login', body, headers) 
      .map((res: Response) => res.json()) 
      .catch(this.handleError);
  };

  Logout() {

  };

  private handleError(error: Response) {
    console.error(error);
    let msg = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(msg);
  }
}