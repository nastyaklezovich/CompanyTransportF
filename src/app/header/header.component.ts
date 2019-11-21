import { Component, OnInit } from '@angular/core';
import { User, AuthService } from '../core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private currentUser: User;

  constructor(private authService: AuthService) { }

  role: string;

  ngOnInit() {
    this.authService.currentUser.subscribe(val => (this.currentUser = val));
  }

  public logout() {
    this.authService.logout();
  }

  public get isAuthenthicated(): boolean {
    return this.currentUser !== null;
  }

  public get isAdmin(): boolean{
    console.log("aa")
    console.log(this.currentUser.roles);
    return this.currentUser.roles == "ADMIN";
  }

}
