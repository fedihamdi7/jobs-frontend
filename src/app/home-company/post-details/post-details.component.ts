import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent implements OnInit {
  post : any;

  constructor(
    public config: DynamicDialogConfig,

  ) { }

  ngOnInit(): void {
    this.post = this.config.data;   

  }

}
