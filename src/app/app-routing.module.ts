import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Question3/login/login.component';
import { DashboardComponent } from './Question3/dashboard/dashboard.component';
import { RegisterComponent } from './Question3/register/register.component';
import { AccordionComponent } from './Question5/accordion/accordion.component';
import { HomeComponent } from './Question8/home/home.component';
import { StudentComponent } from './Question8/student/student.component';
import { CreateEmployeeCanDeactivateGuardService } from './Question8/create-student-can-deactivate-guard.service';
import { CourselistComponent } from './Question6/courselist/courselist.component';
import { CourseComponent } from './Question6/course/course.component';
const routes: Routes = [
  { path : 'login',component: LoginComponent },
  { path : 'register',component: RegisterComponent },
  { path : 'dashboard',component: DashboardComponent },
  { path : '', redirectTo:"/login", pathMatch: 'full' },


  // {path : 'accordion/:id', component: AccordionComponent},

  // { path : "courselist",component: CourselistComponent },
  // { path : "course/:id",component: CourseComponent },
  // { path : "", redirectTo :"/courselist", pathMatch: 'full' },

    
  // {path : "home", component:HomeComponent},
  // {path: "createstudent", 
  // component:StudentComponent, 
  // canDeactivate:[CreateEmployeeCanDeactivateGuardService]}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
