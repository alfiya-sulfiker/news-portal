import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  //   console.log("Dsdssds")
  // }
  loginForm: FormGroup;
  showErrorMsg: boolean;
  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  login() {
    const userData = this.loginForm.value;
    this.authService.login(userData).subscribe(response => {
      if (response) {
        this.router.navigate(['/news']);
      } else {
        this.snackBar.open('Invalid credentials', 'Dismiss');
      }

    });
  }
  logout() {
    this.authService.logout();
  }

}
