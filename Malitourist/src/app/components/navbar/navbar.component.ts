import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: any;
  constructor() { }

  ngOnInit(): void {
    if (localStorage["user"]) {
      this.user = JSON.parse(localStorage["user"]);
    }
  }

}
