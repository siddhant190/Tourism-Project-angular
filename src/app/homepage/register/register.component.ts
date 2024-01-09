import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm!: FormGroup;

  constructor(private route:Router, private fb: FormBuilder, private http: HttpClient, private apiService:ApiService) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      mobile: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submitForm(user:any) {
    if(this.registrationForm.valid) {
      console.log(user);
      this.apiService.register(user).subscribe((resultData: any) => {
        alert("Employee Registered Successfully");
        this.route.navigate(['login'])
       })
      }
      else{
        alert("User not Registered");
      }; 
   
  }



}
