import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  currentUser?:User

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.currentUser = this.loginService.currentUser
    if(!this.currentUser){
      this.router.navigate(["login"])
    }

  }

}
