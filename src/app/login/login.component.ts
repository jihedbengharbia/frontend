import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ""
  password = ""

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.router.url)
  }

  onSubmit(){
    console.log("email: "+this.email)
    console.log("password: "+this.password)
  }

}
