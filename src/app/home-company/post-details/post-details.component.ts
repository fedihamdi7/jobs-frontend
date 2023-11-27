import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent implements OnInit {
  post : any;
  isEdit = false;
  constructor(
    public config: DynamicDialogConfig,

  ) { }

  ngOnInit(): void {
    this.post = this.config.data.post;   
    if(this.config.data.isEdit){
      this.isEdit = true;
    }
  }

}
