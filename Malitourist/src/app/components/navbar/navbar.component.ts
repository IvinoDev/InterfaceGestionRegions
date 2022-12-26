
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    if (localStorage["user"]) {
      this.user = JSON.parse(localStorage["user"]);
      console.log(this.user);
    }
  }

  logout() {
    localStorage.removeItem("user");
    this.router.navigate(["login"]);
    location.reload();
  }

}
