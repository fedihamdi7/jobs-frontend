import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { LocalStorageService } from '../shared/local-storage.service';
import { PostService } from './post.service';
import { MessageService } from 'primeng/api';

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
    private localStorageService: LocalStorageService,
    private postService : PostService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.post = this.config.data;   
    if(this.localStorageService.getUser().postsAppliedIn.includes(this.post._id)){
      this.alreadyApplied = true;
    }
  }
// TODO : make it that applying open another dialog and in that dialog the user can write a message to the post owner + select resume to send 
// and update user in localstorage
  apply(){
    this.postService.applyToPost(this.localStorageService.getUser()._id,this.post._id).subscribe(
      (res)=>{
        this.alreadyApplied = true;
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Applied Successfully'});
      },
      (err)=>{
        this.messageService.add({severity:'error', summary: 'Error', detail: err.error.message});
      }
    );
  }
}
