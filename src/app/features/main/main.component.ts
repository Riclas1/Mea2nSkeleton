import { Component } from '@angular/core';
import { ApiService } from './../../services/service.apiCalls';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'

})
export class AppMainComponent {

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {

  };

  ApiButton() {
    this.apiService.Get().subscribe(
      data => {
        console.warn(data);
        this.router.navigate(['setup']);
      },
      error => {
      }
    )
  }
}
