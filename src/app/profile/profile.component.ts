import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser?:User;
  editable = false

  constructor(
    private loginService:LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const user:User = JSON.parse(localStorage.getItem("user")!)
    this.currentUser = user
    if(!this.currentUser){
      this.router.navigate(["login"])
    }
  }

  edit(): void{
    this.editable = true
  }

  update(): void{
    this.loginService.saveCurrentUser(this.currentUser!)
    this.editable = false
  }

}
