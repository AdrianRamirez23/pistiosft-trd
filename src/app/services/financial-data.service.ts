import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class FinancialDataService {

  private baseUrl = 'http://localhost:5212/api/data';

  constructor(private http: HttpClient) {}

  getTransactions() {
    return this.http.get(`${this.baseUrl}/transactions`);
  }
}