import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Ouvriers',  icon: 'pe-7s-id', class: '' },
    { path: '/user', title: 'Clients',  icon: 'pe-7s-users', class: '' },
    { path: '/table', title: 'Services',  icon: 'pe-7s-menu', class: '' },
    { path: '/ajououvrier', title: 'Ajouter Ouvrier',  icon: 'pe-7s-add-user', class: '' },
    { path: '/ajouclient', title: 'Ajouter Client',  icon: 'pe-7s-plus', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
