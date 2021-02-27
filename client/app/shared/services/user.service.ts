import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IUser } from '../models/user.model';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  register(user: IUser): Observable<IUser> {
    return this.http.post<IUser>('/api/v1/users/register', user);
  }

  login(credentials): Observable<any> {
    return this.http.post('/api/v1/users/login', credentials);
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('/api/v1/users/all');
  }

  countUsers(): Observable<number> {
    return this.http.get<number>('/api/v1/users/count');
  }

  getUser(user: IUser): Observable<IUser> {
    return this.http.get<IUser>(`/api/v1/users/${user.id}`);
  }

  editUser(user: IUser): Observable<any> {
    return this.http.put(`/api/v1/users/${user.id}`, user, {
      responseType: 'text',
    });
  }

  deleteUser(user: IUser): Observable<any> {
    return this.http.delete(`/api/v1/users/${user.id}`, {
      responseType: 'text',
    });
  }
}
