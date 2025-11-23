import { Component, OnInit } from '@angular/core';
import { FinancialDataService } from '../../services/financial-data.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html'
})
export class DashboardComponent implements OnInit {

  data: any;

  constructor(private financialService: FinancialDataService) {}

  ngOnInit(): void {
    this.financialService.getTransactions().subscribe(res => {
      this.data = res;
    });
  }
}