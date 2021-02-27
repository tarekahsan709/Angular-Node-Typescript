import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import RoutesUrl from 'client/app/shared/util/routes-url';

import { AuthService } from '../../shared/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(public auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this.auth.hasAuthenticated()) {
      this.router.navigate([RoutesUrl.LOGIN]);
      return false;
    }
    return true;
  }
}
