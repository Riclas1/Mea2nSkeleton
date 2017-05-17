import { Component } from '@angular/core';
import { AuthService } from './../../services/service.loginUser';
import { Router } from '@angular/router';
import { LoginUserEventService } from './../../events/event.loginUser';
import { currentUserdata } from './../../shared/shared.currentUserData';
import { loginUserdata } from './../../shared/shared.loginUserDate'




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
    let _user = new loginUserdata(this.userName, this.userPassword);
    let _loginUser;

    this.authService.Login(_user)
      .subscribe(
      data => {
        console.log(data);
        if (data.state === 'success') {
          _loginUser = new currentUserdata(data.user.username, data.user.level, true);
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
