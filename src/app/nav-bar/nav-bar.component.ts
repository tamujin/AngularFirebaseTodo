import { Router } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  title = "Angular Firebase Todo";
  user: Observable<firebase.User>;

  constructor(private authService: AuthenticationService, private router:Router) { }

  ngOnInit() {
    this.user = this.authService.authUser();
    
  }

  logOut() {
    this.authService.logout().then(onResolve => this.router.navigate['/']);
  }

}
