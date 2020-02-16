import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  items: Array<MenuItem>;
  activeItem: MenuItem;

  constructor(

  ) { }

  ngOnInit(): void {
  }
}