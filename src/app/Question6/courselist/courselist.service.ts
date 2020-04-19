import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourselistService {
  visibleCourse= [];
  constructor() { }
  getcourseList(){
    debugger;
    return this.visibleCourse = courseList.slice(0);
  }
  getCourse(id: number){
    return courseList.slice(0).find(cousre=>cousre.id ==id);
  }  
}

const courseList= [
  {"id":1, "name":"Spring", "Descrtiption":"About Spring", "url":"assets/images/spring.jpg"},
  {"id":2, "name":"Hibernate", "Descrtiption":"About Hibernate", "url":"assets/images/Hibernate.jpg"},
  {"id":3, "name":"Junit", "Descrtiption":"About Junit", "url":"assets/images/Junit.png"},
  {"id":4, "name":"Html", "Descrtiption":"About Html", "url":"assets/images/Html.jpg"},
  {"id":4, "name":"CSS", "Descrtiption":"About CSS", "url":"assets/images/CSS.jpg"},

];