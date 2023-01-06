import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLoggedIn : boolean = false

  constructor(
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authenticationService.isLoggedIn()
  }

  logout(): void {
    this.isLoggedIn = false
    this.authenticationService.logout();
  }

}
