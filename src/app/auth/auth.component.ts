import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FileUpload, FileUploadHandlerEvent } from 'primeng/fileupload';
import { AuthService } from './auth.service';
import { MessageService } from 'primeng/api';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {

  constructor(
    private authService : AuthService,
    private messageService: MessageService
  ) { }

  form: FormGroup;
  @ViewChild('profilePicUpload') profilePicUpload: FileUpload;
  @ViewChild('resumeUpload') resumeUpload: FileUpload;

  cities = [
    { name: 'Ariana', code: 'Ariana' },
    { name: 'Béja', code: 'Béja' },
    { name: 'Ben Arous', code: 'Ben Arous' },
    { name: 'Bizerte', code: 'Bizerte' },
    { name: 'El Kef', code: 'El Kef' },
    { name: 'Gabès', code: 'Gabès' },
    { name: 'Gafsa', code: 'Gafsa' },
    { name: 'Jendouba', code: 'Jendouba' },
    { name: 'Kairouan', code: 'Kairouan' },
    { name: 'Kasserine', code: 'Kasserine' },
    { name: 'Kébili', code: 'Kébili' },
    { name: 'Mahdia', code: 'Mahdia' },
    { name: 'Manouba', code: 'Manouba' },
    { name: 'Medenine', code: 'Medenine' },
    { name: 'Monastir', code: 'Monastir' },
    { name: 'Nabeul', code: 'Nabeul' },
    { name: 'Sfax', code: 'Sfax' },
    { name: 'Siliana', code: 'Siliana' },
    { name: 'Sidi Bouzid', code: 'Sidi Bouzid' },
    { name: 'Sousse', code: 'Sousse' },
    { name: 'Tataouine', code: 'Tataouine' },
    { name: 'Tozeur', code: 'Tozeur' },
    { name: 'Tunis', code: 'Tunis' },
    { name: 'Zaghouan', code: 'Zaghouan' }
  ]
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, {validators:[Validators.required]}),
      email: new FormControl(null, {validators:[Validators.required, Validators.email]}),
      password: new FormControl(null, {validators:[Validators.required]}),
      profilePic: new FormControl(null, {}),
      isCompany: new FormControl(false, {}),
      phone: new FormControl(null, {}),
      birthDate: new FormControl(null, {}),
      governorate: new FormControl(null, {}),
      resume: new FormControl(null, {}),
      links: new FormControl(null, {}),
    });
  }

  onSubmit() {
    this.profilePicUpload.upload();
    if(this.resumeUpload){
      this.resumeUpload.upload();
    }

    // transform birthDate to be in this format dd/mm/yyyy
    if (this.form.value.birthDate) {
      const birthDate = this.form.value.birthDate;
      const birthDateTransformed = `${birthDate.getDate()}/${birthDate.getMonth() + 1}/${birthDate.getFullYear()}`;
      this.form.patchValue({ birthDate: birthDateTransformed });
    }
    if (this.form.value.governorate) {
      this.form.value.governorate = this.form.value.governorate.name;
    }
    this.authService.register(this.form.value).subscribe((res:any) => {
 
      //check for status
      
 
      this.form.reset();
    },err =>{
      console.log(err.error);
      this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error.message });
    });

  }

  onFilePicked(event: FileUploadHandlerEvent, isProfilePic: boolean) {
    if (isProfilePic){
      for (let file of event.files) {
        this.form.patchValue({ profilePic: file });
        this.form.get('profilePic').updateValueAndValidity();
      }
    }
    else{
      for (let file of event.files) {
        this.form.patchValue({ resume: file });
        this.form.get('resume').updateValueAndValidity();
      }
    }
  }
}
