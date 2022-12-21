import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  // username: any;
  // password: any;
  form: any = {
    username: null,
    password: null
  }
  constructor(private router:Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
  // console.log(this.form)
  this.http.post('http://localhost:8080/api/auth/signin', this.form).subscribe(data =>
  {
    if(data) {
      let result = data;
      localStorage.setItem("user", JSON.stringify(result));
      this.router.navigate(['/home'])
    } else {
      console.log("identifiants incorrects");

      
    }
   
  }, error => {
    console.log("identifiants non corrects");
    
  });
  

}

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }



  
  // login(f:NgForm){
  //   this.router.navigate(['/accueil'])
  // }

}
