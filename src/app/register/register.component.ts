import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup
  error = false
  success = false

  constructor(
    private fb: FormBuilder
  ) { 
    this.registerForm = this.fb.group(
      {
        username: ["",[Validators.required]],
        email: ["",[Validators.required,Validators.email]],
        password: ["",[Validators.required]],
        confirmPassword: ["",[Validators.required]],
        rememberMe: [""]
      }
    )
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log(this.registerForm.get("username"))
    console.log(this.registerForm.get("email"))
    console.log(this.registerForm)
    if(this.registerForm.get("username")!.value && this.registerForm.get("email")!.value && this.registerForm.get("password")!.value && this.registerForm.get("confirmPassword")!.value){
      if(this.registerForm.get("password")!.value === this.registerForm.get("confirmPassword")!.value){
        this.success = true
        this.error = false  
      }else{
        this.success = false
        this.error = true
      }
    }else{
      this.error = true
      this.success = false
    }

    
  }

}
