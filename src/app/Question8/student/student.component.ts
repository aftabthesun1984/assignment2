import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @ViewChild('studentForm') public createStudentForm:NgForm;
  fullName :string
  email:string;
  constructor() { }

  ngOnInit() { 
    
  }

  saveStudent(studentForm: NgForm): void {
    this.fullName= studentForm.value.fullName;
    this.email = studentForm.value.email;
    alert("Full Name :"+this.fullName +"\n" + "Email : "+ this.email) 
  }

}
