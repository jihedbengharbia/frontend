import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ""
  password = ""
  errorMessage = ""
  error = false
  success = false
  // router?: Router

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    console.log(this.router.url)
  }

  onSubmit(){
    console.log("email: "+this.email)
    console.log("password: "+this.password)
    let user: User = new User()
    user.username = this.email
    user.password = this.password
    this.loginService.signin(user).subscribe(
      (result) => this.handleSuccess(result),
      (error) => this.handleError(error)
    )
  }

  handleSuccess(result: any){
    console.log("Success")
    console.log(result)
    this.error = false
    this.success = true
    this.loginService.getUser().subscribe(
      (result)=>{
        this.loginService.saveCurrentUser(result)
        this.router.navigate([""])
      },
      (error)=>{
        alert("Error: "+error);
      }
    )
  }

  handleError(error: any){
    console.log("Error")
    console.log(error)
    this.error = true
    this.success = false
    // this.errorMessage = error.message
    if(error.message.includes(401)){
      this.errorMessage = "Username or password is incorrect"
    }
  }

}
