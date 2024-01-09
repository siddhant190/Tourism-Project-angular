import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-admin-view-all-packages',
  templateUrl: './admin-view-all-packages.component.html',
  styleUrls: ['./admin-view-all-packages.component.css']
})
export class AdminViewAllPackagesComponent implements OnInit{

  items:any;
  deleteStatus: string | undefined;

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {

    this.loadPackages();
    this.allPackages();
    
  }

  allPackages(){
    this.apiService.getAllPackages().subscribe((resultData) => {
      console.log("resultdata"+resultData);
      this.items=resultData;
      console.log(resultData)
    })
  }

  editpackage(id:any) {
    this.router.navigate(['/edit-package',id])
  }

  loadPackages() {
    this.apiService.getAllPackages().subscribe((resultData) => {
      this.items = resultData;
    });
  }

  deletePackage(id:any) {
    this.apiService.deletePackage(id).subscribe(resultData=>{
      this.deleteStatus=resultData;
      console.log("package delete")
      this.router.navigate(['admin'])
    });
    
  }

}
