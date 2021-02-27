import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IUser } from '../models/user.model';
import RoutesUrl from '../util/routes-url';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userSubject: BehaviorSubject<IUser>;

  constructor(
    private router: Router,
    private http: HttpClient,
    public toastr: ToastrService,
    public jwtHelperSvc: JwtHelperService
  ) {
    this.userSubject = new BehaviorSubject<IUser>(null);
  }

  register(user: IUser): Observable<IUser> {
    return this.http.post<IUser>('/api/v1/users/register', user);
  }

  login(credentials): Observable<any> {
    return this.http.post<any>('/api/v1/users/login', credentials).pipe(
      map((user: IUser) => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.userSubject.next(user);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.userSubject.next(null);
    this.router.navigateByUrl(RoutesUrl.LOGIN);
  }

  public hasAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelperSvc.isTokenExpired(token);
  }
}
