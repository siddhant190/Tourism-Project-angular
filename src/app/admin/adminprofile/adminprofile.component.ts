import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent {
  userData = {
    name: "John Doe",
    email: "Johndoe68@gmail.com",
    phone: "9866489795",
    address: "Delhi",
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
