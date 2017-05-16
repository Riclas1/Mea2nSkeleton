import { Component } from '@angular/core';
import { AuthService, Userdata } from './../../services/login.service';
import { Router } from '@angular/router';
import { LoginUserEventService } from './../../events/event.loginUser.service';
import { LoginUserdata } from './../../shared/shared.loginUserData';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers:[AuthService]
})
export class AppLoginComponent {
  errorMessage: any;
  userName: String;
  userPassword: String;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loginUserShared: LoginUserEventService
  ) {

  };

  loginButton() {
    let _user = new Userdata(this.userName, this.userPassword);
    let _loginUser;

    this.authService.Login(_user)
      .subscribe(
      data => {
        console.log(data);
        if (data.state === 'success') {
          _loginUser = new LoginUserdata(data.user.username, data.user.level, true);
          this.loginUserShared.emitChange(_loginUser);
          this.router.navigate(['main']);
        }
        /*else{
          _loginUser = new LoginUserdata('', '', false);
          this.loginUserShared.emitChange(_loginUser);
          this.router.navigate(['login']);
        }*/
      },
      error => { this.errorMessage = <any>error }
      );

  };


}
