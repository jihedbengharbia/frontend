import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  var1 = "testing2"
  size = "font-size: 60px"
  hidden = "display: none"
  usersList?: User[]
  /////////////////////////////////////////
  constructor(
    private loginService:LoginService
  ) { 
    
  }

  ngOnInit(): void {
    this.loginService.getUsersList().subscribe(
      (usersList)=>{
        this.usersList = usersList
      }
    )
  }

  clicked(): void{
    this.hidden = "display: block"
  }

  scroll(el:HTMLElement){
    el.scrollIntoView()
  }

  download(){

  }

}
