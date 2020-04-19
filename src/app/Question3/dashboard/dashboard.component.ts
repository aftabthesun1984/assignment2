import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { User } from '../../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title: string = "Dashboard";
  message: string;
  users: any[] = [];
  @Input() user : User;
  constructor(private authService: AuthService, private router: Router, ) {
      
  }
  ngOnInit() {
    this.authService.getUserList().subscribe((userList)=>{
    this.users = userList});
  }
  deleteUser(id) {
    debugger;
    this.authService.deleteUser(id);    
    }
  }


