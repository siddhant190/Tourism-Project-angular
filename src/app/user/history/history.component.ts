import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {

  userBooking:any;
  username: any;

  constructor(private router: Router, private apiService: ApiService, private route: ActivatedRoute) { 
    this.username = this.route.snapshot.paramMap.get('username')
    console.log(this.username)
  }

  ngOnInit(): void {
    this.getHistory();
  }


  getHistory() {
    this.apiService.getBookingByUser(this.username).subscribe((resultData: any) => {
      this.userBooking = resultData;
      console.log(this.username)
      console.log(resultData)
    })
  }

}
