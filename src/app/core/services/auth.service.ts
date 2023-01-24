import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User|null>;

  constructor(private http: HttpClient, public _router: Router) {
    this.currentUserSubject = new BehaviorSubject<User|null>(JSON.parse(localStorage.getItem('currentUser')!));
  }

  public get currentUserValue(): User|null {
    return this.currentUserSubject.value;
  }

  login(user: any) {
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, user)
      .pipe(map(user => {

        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this._router.navigate(['home-content']);
  }

  isLoggedIn() {
    const currentUser = this.currentUserValue;
    const isLoggedIn = currentUser && currentUser.token;
    return isLoggedIn;
  }

}
