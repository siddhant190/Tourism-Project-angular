import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-admin-view-reservation',
  templateUrl: './admin-view-reservation.component.html',
  styleUrls: ['./admin-view-reservation.component.css']
})
export class AdminViewReservationComponent {
  userBookings:any;

  constructor(private router: Router, private apiService: ApiService) {
   
  }
  ngOnInit(): void {
    this.apiService.getAllBooking().subscribe((resultData:any) => {
      console.log(resultData);
      this.userBookings=resultData;
      console.log(resultData)
    })
  }

}
