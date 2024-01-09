import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  registrationForm!: FormGroup;

  constructor(private router:Router,private fb: FormBuilder, private http: HttpClient, private apiService:ApiService) { }

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
       })
      }
      else{
        alert("Employee not Registered");
      }; 
      this.router.navigate(['/profile'])
   
  }

}
