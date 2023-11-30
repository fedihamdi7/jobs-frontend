import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-company-negotiation-overlay',
  templateUrl: './company-negotiation-overlay.component.html',
  styleUrl: './company-negotiation-overlay.component.css'
})
export class CompanyNegotiationOverlayComponent implements OnInit {

  constructor(
    private config: DynamicDialogConfig,
  ) { }

  ngOnInit(): void {
    console.log(this.config.data);

  }
  
}
