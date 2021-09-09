import { User } from './../../model/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIS } from 'src/app/utils/api';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private logger = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post(APIS.login, user);
  }

  isLoggedIn(): boolean {
    return !! localStorage.getItem('userToken');
  }

  logout() {
    localStorage.removeItem('userToken');
  }
}
