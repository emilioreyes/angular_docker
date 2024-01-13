import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Credentials } from '../modelos/userModel';
import { Route, Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  form!: FormGroup; 
  credentials!: Credentials;
  router=inject( Router)
  loginService=inject(LoginService)

  ngOnInit(): void {
    this.initForm()
  }
  initForm(){
    this.form = new FormGroup({
      user: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
    })
  }
    onSubmit(){
    this.credentials={
      username:this.form.controls['user'].value,
      password:this.form.controls['password'].value,
    }
    console.log(this.credentials)
    this.loginService.login(this.credentials).subscribe(res=>{

    console.log(res);
    this.router.navigate(['/home'])
  })

  
  
   
   //this.router.navigate(['home'])
   /* this.loginService.login(this.credentials).subscribe((res:any)=>{
    })*/
  }
}
