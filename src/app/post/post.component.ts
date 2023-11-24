import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { LocalStorageService } from '../shared/local-storage.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit{
  post : any;
  alreadyApplied : boolean = false;
  constructor(
    public config: DynamicDialogConfig,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.post = this.config.data;   
    if(this.localStorageService.getUser().postsAppliedIn.includes(this.post._id)){
      this.alreadyApplied = true;
    }
  }
}
