import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  var1 = "testing2"
  size = "font-size: 60px"
  hidden = "display: none"
  /////////////////////////////////////////
  constructor() { 
    
  }

  ngOnInit(): void {
  }

  clicked(): void{
    this.hidden = "display: block"
  }

}
