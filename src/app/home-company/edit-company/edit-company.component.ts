import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FileUpload, FileUploadHandlerEvent } from 'primeng/fileupload';
import { CompanyService } from '../company.service';
import { LocalStorageService } from 'src/app/shared/local-storage.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrl: './edit-company.component.css'
})
export class EditCompanyComponent implements OnInit {
  company : any;
  form: FormGroup;
  

  constructor(
    public config: DynamicDialogConfig,
    private fb: FormBuilder,
    private companyService : CompanyService,
    private localStorageService: LocalStorageService,
    private messageService: MessageService,
    private ref : DynamicDialogRef
  ) { }

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
    this.companyService.getCompany(this.config.data.company._id).subscribe((res)=>{
      this.company = res;
      this.form = this.fb.group({
        name: [this.company.name, Validators.required],
        email: [this.company.email, [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
        password: [null],
        phone: [this.company.phone],
        governorate: [this.company.governorate],
        profilePic: [this.company.profilePic],
        links: this.fb.group({
          github: [this.company.links.github],
          linkedin: [this.company.links.linkedin],
          facebook: [this.company.links.facebook],
          twitter: [this.company.links.twitter],
          instagram: [this.company.links.instagram],
          website: [this.company.links.website],
          location: [this.company.links.location]
        })
      }) 
    });

    
    
  }

  onSubmit(){
    this.profilePicUpload.upload();
    
    this.companyService.updateCompany(this.company._id,this.form.value).subscribe(
      (res)=>{
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Company Updated Successfully'});
        this.localStorageService.saveUser(res);
        this.ref.close();
      },
      (err)=>{
        this.messageService.add({severity:'error', summary: 'Error', detail: err.error.message});
      }
    );
  }

  @ViewChild('profilePicUpload') profilePicUpload: FileUpload;

  onFilePicked(event: FileUploadHandlerEvent) {
    for (let file of event.files) {
      this.form.patchValue({ profilePic: file });
      this.form.get('profilePic').updateValueAndValidity();
    }
  }
}
