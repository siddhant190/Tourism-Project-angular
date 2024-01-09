import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetpwd',
  templateUrl: './forgetpwd.component.html',
  styleUrls: ['./forgetpwd.component.css']
})
export class ForgetpwdComponent {
  forgetPasswordForm!: FormGroup; // Add the "!" to indicate it will be initialized

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.forgetPasswordForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(): void {
    // Ensure forgetPasswordForm is defined before accessing its properties
    if (this.forgetPasswordForm && this.forgetPasswordForm.valid) {
      const username = this.forgetPasswordForm.get('username')?.value;
      const phone = this.forgetPasswordForm.get('phone')?.value;
      const newPassword = this.forgetPasswordForm.get('newPassword')?.value;

      // Add your logic to handle the submitted data (e.g., send to backend API)
      console.log('Submitted Data:', { username, phone, newPassword });
    }
  }
}
