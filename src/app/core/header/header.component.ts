import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (this.router.url === '/news') {
          this.isLoggedIn = true;
        }
      });
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
  }
  editProfile() {

  }
}
