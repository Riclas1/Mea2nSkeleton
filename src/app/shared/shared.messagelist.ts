import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Message } from './../models/model.message';

@Injectable()
/**
*
*/
export class MessageList{
    list : Message[];

    /**
     *
     */
    constructor() {
    console.log('message created');
    //this.list = new Observable<Message[]>();
    };

    add(message : Message){
       if (message) {
          this.list.push(message); 
       };
    }

    get(): Observable<any>{
        return Observable.of(this.list);
    }

}
