import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { User } from '../../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  
  submitted = false;
  user: User ={
    id:null,
    firstName:null,
    lastName :null,
    username : null,
    password : null
  }
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,    
  ) { }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() { return this.registerForm.controls; }

  saveUser() {
    debugger;
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) { 
      return;
    }
    this.user.firstName = this.registerForm.value.firstName;
    this.user.lastName = this.registerForm.value.lastName;
    this.user.username = this.registerForm.value.username;
    this.user.password = this.registerForm.value.password;
    
    this.authService.registerUser(this.user)      
    this.router.navigate(['dashboard']);        
  }
}

