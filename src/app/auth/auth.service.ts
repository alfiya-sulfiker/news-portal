import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn;
  users: Array<object> = [];
  constructor(private router: Router) {
  }
  register(userData) {
    this.users.push(userData);
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  login(userData): Observable<boolean> {
    const users = JSON.parse(localStorage.getItem('users'));
    const userPresent = users.find(user => user.email === userData.email && user.password === userData.password);

    this.isLoggedIn = userPresent;
    return of(this.isLoggedIn).pipe(
      delay(1000),
      tap(() =>
        this.isLoggedIn)
    );

  }

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/auth']);
  }
}
