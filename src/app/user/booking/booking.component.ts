import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  userId: any;
  packageId: any;
  travellerName: any;
  travellerMobile: any;
  tourStartDate: any;
  totalMember: any;


  constructor(private router: Router, private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.packageId = params['id'];
      this.userId = params['uId'];
    });
  }


  reserveNow() {
    const bodyData = {
      travellerName: this.travellerName,
      travellerMobile: this.travellerMobile,
      tourStartDate: this.tourStartDate,
      totalMember: this.totalMember,
      username :this.userId,
      packages :this.packageId

    };

    this.apiService.bookPackage(bodyData).subscribe((resultData: any) => {
      console.log(resultData)
      if (resultData) {
        alert("Booking Package Successfully");
      }
      else {
        alert("Package not Book");
      };
      this.router.navigate(['/payment']);

    })
  }

}
