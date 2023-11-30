import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-applicant-overlay',
  templateUrl: './applicant-overlay.component.html',
  styleUrl: './applicant-overlay.component.css'
})
export class ApplicantOverlayComponent implements OnInit {
  
  applicant: any;

  constructor(
    private config: DynamicDialogConfig,
  ) { }

  ngOnInit(): void {
    this.applicant = this.config.data;
    for (let link in this.applicant.links) {  
      if (!this.applicant.links[link]?.startsWith("http://") && !this.applicant.links[link]?.startsWith("https://") && this.applicant.links[link]) {
        this.applicant.links[link] = "http://" + this.applicant.links[link];
      }
  }
    console.log(this.applicant);
    
  }
}
