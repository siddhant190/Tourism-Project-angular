import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  items:any;
  userId:any;

  constructor(private router: Router, private apiService: ApiService,private route:ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.userId = params['userId'];
    });

  }

  ngOnInit(): void {
    
    this.apiService.getAllPackages().subscribe((resultData) => {
      console.log("resultdata"+resultData);
      this.items=resultData;
      console.log(resultData)
    })
  }
 
  logout() {
    // Add logic for logout (e.g., clear user session)
    console.log('Logout clicked');
    sessionStorage.removeItem("access_token")
    // Redirect to the login page or another desired page
    this.router.navigate(['/login']);
  }

  isMenuOpen: boolean = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


  bookItem(item: any) {
    // Add logic to handle booking for the selected item
    this.router.navigate(['/booking'],{ queryParams: { id: item.id , uId :this.userId}})
    console.log('Booking item:', item.name);
  }
  
  profile(){
    this.router.navigate(['/profile']);
    console.log("moving to the profile page")
  }

}
