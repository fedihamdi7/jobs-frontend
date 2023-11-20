import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.css'
})
export class VerifyComponent implements OnInit {
  
  constructor(
    private route: ActivatedRoute,
    private authService : AuthService
  ) { }
  errMessage : string ="";
  isSuccessful = false;
  ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.authService.verify(params['token']).subscribe((res : any)=>{
          if(res.code == 200){
            this.isSuccessful = true;
          }
          
        },err =>{
          this.errMessage = err.error.message;
        })
      });
  }
}
