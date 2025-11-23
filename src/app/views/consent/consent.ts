import { Component, OnInit } from '@angular/core';
import { ConsentService } from '../../services/consent.service';

@Component({
  selector: 'app-consent',
  standalone: true,
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