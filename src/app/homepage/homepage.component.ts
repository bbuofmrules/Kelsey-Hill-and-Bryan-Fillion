import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(
      private _router: Router
  ) { }

  ngOnInit() {
  }

  about():void{
    this._router.navigate(["/about"]);
  }

}