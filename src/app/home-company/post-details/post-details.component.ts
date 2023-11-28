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
  post: any;
  mode: string;
  sexe = [
    "Male",
    "Female",
    "Both",
  ]
  listLanguages = [
    "Arabic",
    "English",
    "French",
    "German",
    "Italian",
    "Spanish",
  ]

  listTypesOfEmployment = [
    "Full time",
    "Part time",
    "Internship",
    "Freelance",
    "Temporary",
  ]

  listExperienceLevels = [
    "No Experience",
    "Under 1 year",
    "1 year",
    "2 years",
    "3 years",
    "4 years",
    "5 years",
    "6 years",
    "7 years",
    "8 years",
    "9 years",
    "10 years",
    "More Than 10 years",

  ]

  listOfEducationLevels = [
    "BAC",
    "License (BAC+3)",
    "Master (BAC+5)",
    "Engineer (BAC+5)",
    "Doctorate",
  ]
  formAdd: FormGroup;
  formEdit: FormGroup;
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
    if (this.mode == "ADD") {
      this.formAdd = new FormGroup({
        title: new FormControl(null, Validators.required),
        numberOfAvailablePositions: new FormControl(null),
        language: new FormControl(null),
        dateOfExpiration: new FormControl(null),
        typeOfEmployment: new FormControl(null),
        sexe: new FormControl(null),
        experienceLevel: new FormControl(null),
        levelOfStudy: new FormControl(null),
        description: new FormControl(null, Validators.required),
      });
    }
    if (this.mode == "EDIT") {

      this.formEdit = new FormGroup({
        title: new FormControl(this.config.data.post.title, Validators.required),
        numberOfAvailablePositions: new FormControl(this.config.data.post.numberOfAvailablePositions),
        language: new FormControl(this.config.data.post.language),
        dateOfExpiration: new FormControl(this.datePipe.transform(this.config.data.post.dateOfExpiration, 'MM/dd/yyyy')),
        typeOfEmployment: new FormControl(this.config.data.post.typeOfEmployment),
        sexe: new FormControl(this.config.data.post.sexe),
        experienceLevel: new FormControl(this.config.data.post.experienceLevel),
        levelOfStudy: new FormControl(this.config.data.post.levelOfStudy),
        description: new FormControl(this.config.data.post.description, Validators.required),
      })
    }
  }

  onAddPost() {
    const post = this.formAdd.value;
    if (this.formAdd.value.dateOfExpiration) post.dateOfExpiration = this.datePipe.transform(post.dateOfExpiration, 'yyyy-MM-ddTHH:mm:ss.SSS');

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
  onEditPost() {
    const post = this.formEdit.value;

    if (this.formEdit.value.dateOfExpiration) post.dateOfExpiration = this.datePipe.transform(post.dateOfExpiration, 'yyyy-MM-ddTHH:mm:ss.SSS');
    post.id = this.post._id;    
    this.postService.editPost(post).subscribe(
      (response)=>{
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Post edited successfully'});
        this.dialogRef.close();
      },
      (error)=>{
        this.messageService.add({severity:'error', summary: 'Error', detail: error.error.message});
      }
    );

  }
}
