import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: Array<MenuItem>;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'Home', routerLink: 'home' },
      { label: 'About Us', routerLink: 'about' },
      { label: 'Wedding', routerLink: 'wedding' },
      { label: 'Reception', routerLink: 'reception' },
      { label: 'Registry', routerLink: 'registry' },
      { label: 'Contact Us', routerLink: 'contact' },
    ];
  }
}
