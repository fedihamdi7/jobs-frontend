import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PostService } from 'src/app/post/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent implements OnInit {
  post : any;
  mode :string;
  sexe = [
    {name : "Male", code :'M'},
    {name : "Female", code :'F'},
    {name : "Both", code :'M/F'},
  ]
  listLanguages= [
    {name : "Arabic", code :'AR'},
    {name : "English", code :'EN'},
    {name : "French", code :'FR'},
    {name : "German", code :'DE'},
    {name : "Italian", code :'IT'},
    {name : "Spanish", code :'ES'}
  ]

  listTypesOfEmployment = [
    {name : "Full time", code :'FT'},
    {name : "Part time", code :'PT'},
    {name : "Internship", code :'IN'},
    {name : "Freelance", code :'FR'},
    {name : "Temporary", code :'TE'},
  ]

  listExperienceLevels = [
    {name : "No Experience", code :'NE'},
    {name : "Under 1 year", code :'U1'},
    {name : "1 year", code :'1y'},
    {name : "2 years", code :'2y'},
    {name : "3 years", code :'3y'},
    {name : "4 years", code :'4y'},
    {name : "5 years", code :'5y'},
    {name : "6 years", code :'6y'},
    {name : "7 years", code :'7y'},
    {name : "8 years", code :'8y'},
    {name : "9 years", code :'9y'},
    {name : "10 years", code :'10y'},
    {name : "More Than 10 years", code :'mt10y'},

  ]

  listOfEducationLevels = [
    {name : "BAC", code :'BAC'},
    {name : "License (BAC+3)", code :'BD'},
    {name : "Master (BAC+5)", code :'MD'},
    {name : "Engineer (BAC+5)", code :'ENG'},
    {name : "Doctorate", code :'DR'},
  ]
  formAdd : FormGroup;
  constructor(
    public config: DynamicDialogConfig,
    private datePipe: DatePipe,
    private postService: PostService,
    private messageService: MessageService,
    private dialogRef: DynamicDialogRef,
  ) { }

  ngOnInit(): void {
    this.post = this.config.data.post;   
    this.mode = this.config.data.mode;
    this.formAdd = new FormGroup({
      title : new FormControl(null, Validators.required),
      numberOfAvailablePositions : new FormControl(null),
      language : new FormControl(null),
      dateOfExpiration : new FormControl(null),
      typeOfEmployment : new FormControl(null),
      sexe : new FormControl(null),
      experienceLevel : new FormControl(null),
      levelOfStudy : new FormControl(null),
      description : new FormControl(null,Validators.required),
    });
  }

  onAddPost(){
    const post = this.formAdd.value;
    if (this.formAdd.value.dateOfExpiration) post.dateOfExpiration = this.datePipe.transform(post.dateOfExpiration, 'yyyy-MM-ddTHH:mm:ss.SSS');
    if (this.formAdd.value.language) post.language = (this.formAdd.value.language).map((item)=>item.name);
    if (this.formAdd.value.levelOfStudy) post.levelOfStudy = (this.formAdd.value.levelOfStudy).map((item)=>item.name);
    if (this.formAdd.value.typeOfEmployment) post.typeOfEmployment = (this.formAdd.value.typeOfEmployment).map((item)=>item.name);
    if (this.formAdd.value.sexe) post.sexe = this.formAdd.value.sexe.name;
    // console.log(post);
    
    this.postService.addPost(post).subscribe(
      (response)=>{
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Post added successfully'});
        this.dialogRef.close();
      },
      (error)=>{
        this.messageService.add({severity:'error', summary: 'Error', detail: error.error.message});
      }
    );
    
  }

}
