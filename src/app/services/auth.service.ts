import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private baseUrl = 'http://localhost:5212/api/auth';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<any>(`${this.baseUrl}/login`, { username, password })
      .pipe(
        tap(res => localStorage.setItem('mock_token', res.token))
      );
  }

  logout() {
    localStorage.removeItem('mock_token');
  }

  isAuthenticated() {
    return !!localStorage.getItem('mock_token');
  }
}