import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { DomainData } from './../shared/shared.domainData';
import { Router } from '@angular/router';


@Injectable()
export class ApiService {
    constructor(
        private http: Http,
        private router : Router
    ){

    };

    Get() {
        let domain = new DomainData()
        let headers = new Headers(); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.get(domain.domain + '/api/post', headers)
            .map((res: Response) => res.json())
            .catch((error) => {return this.handleError(error)});
    };

    Post() {

    };

   private handleError(error: Response) {
        console.error(error);
        this.router.navigate(['login']);
        return Observable.throw(error);
    };
}