import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  Route,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { LoginUserdata } from './../../shared/shared.loginUserData';

@Injectable()
export class CanActivateAuthGuard implements CanActivate, CanActivateChild {
  constructor(private LoginUserdata: LoginUserdata, private router: Router) { }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(next, state);
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.LoginUserdata.auth) {
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { redirectTo: state.url } });
    return false;
  }
}