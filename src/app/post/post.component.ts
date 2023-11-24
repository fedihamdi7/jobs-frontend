import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit{
  post : any;
  constructor(
    public config: DynamicDialogConfig
  ) { }

  ngOnInit(): void {
    this.post = this.config.data;    
  }
}
