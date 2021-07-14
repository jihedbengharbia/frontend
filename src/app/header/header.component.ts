import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(
  ) { }

  ngOnInit(): void {
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

}
