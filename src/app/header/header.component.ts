import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'app/service/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn = false;

  constructor(public loginService: AuthentificationService) { }

  ngOnInit() {
    this.isUserLoggedIn = this.loginService.isUserLoggedIn();
  }

}
