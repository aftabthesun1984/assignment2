import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;  
  submitted = false;
  message :string

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    
  ) {    
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.f.username.value, this.f.password.value)
    .subscribe(m => {
      debugger;
      if(m) 
      this.router.navigateByUrl('/dashboard');    
      else
      {
        this.message ="Invalid User"
        alert(this.message);
      }        
    });
      
  }
}