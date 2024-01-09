import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-admin-add-location-package',
  templateUrl: './admin-add-location-package.component.html',
  styleUrls: ['./admin-add-location-package.component.css']
})
export class AdminAddLocationPackageComponent {
  tripForm !: FormGroup;

  constructor(private route:Router ,private formBuilder: FormBuilder,private apiService:ApiService) {
    this.tripForm = this.formBuilder.group({
      location: ['', Validators.required],
      description: ['', Validators.required],
      day: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      price: ['', Validators.required],
      img: ['']
    });
  }

  onSubmit(packageData:any) {
    if (this.tripForm.valid) {
   console.log(packageData);
    this.apiService.addPackage(packageData).subscribe((data)=>{
      console.log(data);
      this.route.navigate(['admin-view-all-packages'])
      alert("Package added Successfully");
    })
  }
 }
    
}
