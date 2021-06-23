import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  showErrorMsg: boolean;
  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      fullName: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      email: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$')]),
      password: new FormControl(null, [Validators.required,
      Validators.pattern('^[a-zA-Z0-9]+$'), Validators.maxLength(20)]),
    });


  }

  register() {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;
      this.authService.register(userData);
      this.router.navigate(['/auth']);
      this.snackBar.open('Registered Successfully', 'Dismiss');
    }
    else {
      this.snackBar.open('Registration failed', 'Dismiss');
    }
    //
  }

}
