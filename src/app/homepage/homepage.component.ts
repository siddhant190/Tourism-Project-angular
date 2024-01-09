import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  showDropdown: boolean = false;
  isLoggedIn= false;

  constructor(){
    this.isLoggedIn = !!(sessionStorage.getItem("access_token"))
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  loginAs(role: string) {
    console.log('Logging in as:', role);
  }

  onClickLogOut(){
    sessionStorage.removeItem("access_token")
    this.isLoggedIn = false;
  }

}
