import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Credentials } from '../../modelos/userModel';
import { LoginService } from 'src/app/service/login.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  form!: FormGroup; 
  credentials!: Credentials;
  constructor(private loginService:LoginService, private router: Router){}
  ngOnInit(): void {
    this.initForm()
  }
  initForm(){
    this.form = new FormGroup({
      user: new FormControl('user1',[Validators.required]),
      password: new FormControl('12345',[Validators.required]),
    })
  }
  onSubmit(){
    this.credentials={
      username:this.form.controls['user'].value,
      password:this.form.controls['password'].value,
    }
    console.log(this.credentials)
    this.loginService.login(this.credentials).subscribe((res:any)=>{
      console.log(res.token);
      localStorage.setItem("TOKEN",res.token)
      this.router.navigate(['/home/home'])
    })
  }
}
