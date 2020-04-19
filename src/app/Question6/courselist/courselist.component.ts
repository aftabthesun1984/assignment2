import { Component, OnInit, Input } from '@angular/core';
import { CourselistService } from './courselist.service';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {
  title: string = "Course List";
  courseList : any[] = [];  
  
  constructor(private courseService : CourselistService) {
    this.courseList = courseService.getcourseList();
   }
  ngOnInit() {
  }

}
