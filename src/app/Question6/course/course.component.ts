import { Component, OnInit } from '@angular/core';
import { CourselistService } from '../courselist/courselist.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course : any;
  constructor(private courseService : CourselistService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.course = this.courseService.getCourse(
      +this.route.snapshot.params['id'])
  }

}
