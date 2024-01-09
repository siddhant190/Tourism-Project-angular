import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private router: Router) {}
  logout(){
    this.router.navigate(['/login'])
  }
  
addLocationandpackage() {
  this.router.navigate(['/admin-add-location'])
  console.log('Add Location clicked');
  // Add your logic for adding a location here
}

viewAllPackages(){
  this.router.navigate(['/admin-view-all-packages']);
  console.log('View All Packages');
}


viewReservation() {
  this.router.navigate(['/admin-view-reservation'])
  console.log('View Reservation clicked');
  // Add your logic for viewing reservations here
}

viewUsers() {
  this.router.navigate(['/admin-view-users'])
  console.log('View Users clicked');
  // Add your logic for viewing users here
}
editPackages(){
  this.router.navigate(['/edit-package'])
  console.log('edit-package')
}

}
