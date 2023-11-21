import { Component, OnInit, ViewChild, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FileUpload, FileUploadHandlerEvent } from 'primeng/fileupload';
import { AuthService } from './auth.service';
import { MessageService } from 'primeng/api';
import { LocalStorageService } from '../shared/local-storage.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {

  constructor(
    private authService : AuthService,
    private messageService: MessageService,
    private fb: FormBuilder,
    private localStorageService: LocalStorageService
  ) { }

  form: FormGroup;
  loginForm: FormGroup;
  isRegister = false;
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
    this.form = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      profilePic: [null],
      isCompany: [false],
      phone: [null],
      birthDate: [null],
      governorate: [null],
      resume: [null],
      links: this.fb.group({
        github: [null],
        linkedin: [null],
        facebook: [null],
        twitter: [null],
        instagram: [null],
        website: [null],
        location: [null]
      })
    });
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    })
  }

  alterLoginRegister(){
    this.isRegister = !this.isRegister;
  }
  onSubmitLogin(){
    this.authService.login(this.loginForm.value).subscribe((res:any) => {
      
      if (res.code == 401){
        this.messageService.add({ severity: 'error', summary: 'Error', detail: res.message });
      }else if ( res.code == 200){
        this.localStorageService.saveToken(res.token);
        this.messageService.add({ severity: 'success', summary: 'Login Successfully', detail: "You are logged in" });
      }
      
    })
    
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
      this.messageService.add({ severity: 'success', summary: 'Register Successfully', detail: "Your profile is created, check your email" });
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
