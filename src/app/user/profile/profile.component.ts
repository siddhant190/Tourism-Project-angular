import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  userData = {
    name: "Rasheed Khan",
    email: "Rasheed768@gmail.com",
    phone: "9866433295",
    address: "Hyderabad",
    gender: "Male"
  };
  
  constructor(private router:Router){}
  ngOnInit(){}
  changepassword(){
    this.router.navigate(['/forgetpwd'])

  }
  editProfile(){
    this.router.navigate(['/settings'])
  }

}
