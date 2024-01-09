import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-edit-package',
  templateUrl: './edit-package.component.html',
  styleUrls: ['./edit-package.component.css']
})
export class EditPackageComponent implements OnInit{

package: any;
updatePackage!: FormGroup;
packageId:any;

constructor(
  private router: Router,
  private route: ActivatedRoute,
  private apiService: ApiService,
  private formBuilder: FormBuilder
) {
  this.updatePackage = this.formBuilder.group({
    location: [''],
    description: [''],
    day:[''],
    price:[''],
    img:['']
  });

  this.packageId = this.route.snapshot.paramMap.get("id");
}

  ngOnInit(): void {

   this.updateForm();
 
  }

  updateForm(){
    this.apiService.getPackageById(this.packageId).subscribe((res:any) =>{
      if(res){
        this.updatePackage.setValue({
          location:res.location,
          description:res.description,
          img:res.img,
          price:res.price,
          day:res.day
        })
        console.log(this.updatePackage.value)
      }
    })
  }

  saveChanges(updatedData:any): void {

    this.apiService.updatePackage(this.packageId, updatedData).subscribe(() => {
      console.log('Package updated successfully'+this.packageId);
      this.router.navigate(['/admin-view-all-packages']);
    });
  }

}
