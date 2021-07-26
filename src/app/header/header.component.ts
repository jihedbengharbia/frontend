import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  var1 = ""

  loginActive = false
  homeActive = false
  registerActive = false
  currentUser?:User

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    /* const user:User = JSON.parse(localStorage.getItem("user")!)
    this.currentUser = user
    if(!this.currentUser){
      this.router.navigate(["login"])
    } */
    if(!this.loginService.currentUserObservable){
      const user:User = JSON.parse(localStorage.getItem("user")!)
      this.loginService.currentUserObservable =new Observable(
        (observable)=>{
            observable.next(user)
        }
    )
    }
    this.loginService.currentUserObservable!.subscribe(
      (user)=>{
        this.currentUser = user
      }
    )
    console.log("url: " + location.href)
    console.log("location: "  + location.href.includes("/login"))
    if(location.href.includes("/login")){
      this.loginActive = true
      this.homeActive = false
      this.registerActive = false
    }else if(location.href.includes("/register")){
      this.registerActive = true
      this.loginActive = false
      this.homeActive = false
    }else{
      this.homeActive = true
      this.loginActive = false
      this.registerActive = false
    }
  }

  logout(): void{
    localStorage.removeItem("user")
    this.router.navigate(["login"])
  }

}
