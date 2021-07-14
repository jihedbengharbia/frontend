import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(
    private fb: FormBuilder
  ) { 
    this.registerForm = this.fb.group(
      {
        username: [],
        email: [],
        password: [],
        confirmPassword: [],
        rememberMe: []
      }
    )
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    const username = this.registerForm.get("username")
    if(username){
      username.value
    }

    console.log(this.registerForm.get("username")!.value)
    console.log(this.registerForm.get("email")!.value)
    console.log(this.registerForm.get("email")!.value)
    console.log(this.registerForm.get("email")!.value)
    console.log(this.registerForm.get("email")!.value)
    
  }

}
