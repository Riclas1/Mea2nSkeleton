import { Component } from '@angular/core';
import { AuthService } from './../../services/service.loginUser';
import { Router } from '@angular/router';
import { LoginUserData } from './../../models/model.loginUser';
import { CurrentUserData } from './../../models/model.currentUser';
import { SessionStorageService } from 'ng2-webstorage';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [AuthService]
})
export class AppLoginComponent {
  errormessage: any;
  username: String;
  userpassword: String;
  authfailed = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private storage: SessionStorageService
  ) {

  };

  loginButton() {
    let user = new LoginUserData(this.username, this.userpassword);
    this.authService.Login(user)
    .subscribe((data) =>{
      if (data.value) {
          this.router.navigate(['main']);
          return;
        }
       this.authfailed = true;
    }, (err) => {
        this.authfailed = true;
    })
  };
}