import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-admin-view-users',
  templateUrl: './admin-view-users.component.html',
  styleUrls: ['./admin-view-users.component.css']
})
export class AdminViewUsersComponent implements OnInit{

  users:any;

  constructor(private router: Router, private apiService: ApiService) {
   
  }
  ngOnInit(): void {
    this.apiService.getAllUsers().subscribe((resultData:any) => {
      console.log(resultData);
      this.users=resultData;
      console.log(resultData)
    })
  }
  

}
