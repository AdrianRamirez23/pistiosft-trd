import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ConsentService {

  private baseUrl = 'http://localhost:5212/api/consent';

  constructor(private http: HttpClient) {}

  status() {
    return this.http.get(`${this.baseUrl}/status`);
  }

  grant() {
    return this.http.post(`${this.baseUrl}/grant`, {});
  }

  revoke() {
    return this.http.post(`${this.baseUrl}/revoke`, {});
  }
}