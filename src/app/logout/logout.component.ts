import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'app/service/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authenticationService: AuthentificationService,
    private router: Router) {
  }

  ngOnInit() {
    this.authenticationService.logOut();
    this.router.navigate(['login']);
  }

}
