import { Component } from '@angular/core';
import {} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(
    
    ){
    }
    changed(user: any) {
    if (user) {
      console.log(`Event Emitter said you selected ${user}`);
    }};

}
