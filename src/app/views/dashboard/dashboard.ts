import { Component, OnInit } from '@angular/core';
import { FinancialDataService } from '../../services/financial-data.service';
import { CommonModule, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DecimalPipe],
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