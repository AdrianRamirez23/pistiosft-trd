import { Component, OnInit } from '@angular/core';
import { ConsentService } from '../../services/consent.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consent.html'
})
export class ConsentComponent implements OnInit {

  consent = false;

  constructor(private consentService: ConsentService) {}

  ngOnInit(): void {
    this.updateStatus();
  }

  updateStatus() {
    this.consentService.status().subscribe((res: any) => {
      this.consent = res.consent;
    });
  }

  grant() {
    this.consentService.grant().subscribe(() => this.updateStatus());
  }

  revoke() {
    this.consentService.revoke().subscribe(() => this.updateStatus());
  }
}