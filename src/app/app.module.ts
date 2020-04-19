import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './Question1&2/parent/parent.component';
import { ChildComponent } from './Question1&2/child/child.component';
import { HobbyComponent } from './Question1&2/hobby/hobby.component';
import { ShopkeeperComponent } from './Question4/shopkeeper/shopkeeper.component';
import { ImageserviceService } from './Question4/shopkeeper/imageservice.service';
import { ImagefilterPipe } from './Question4/shopkeeper/imagefilter.pipe';
import { LoginComponent } from './Question3/login/login.component';
import { RegisterComponent } from './Question3/register/register.component';
import { DashboardComponent } from './Question3/dashboard/dashboard.component';
import { AuthService } from './auth.service';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CourselistComponent } from './Question6/courselist/courselist.component';
import { CourselistService } from './Question6/courselist/courselist.service';
import { CourseComponent } from './Question6/course/course.component';
import { RegistrationFromComponent } from './Question7/registration-from/registration-from.component';
import { CardlayoutComponent } from './Question5/cardlayout/cardlayout.component';
import { AccordionComponent } from './Question5/accordion/accordion.component';
import { CardlayoutService } from './Question5/cardlayout/cardlayout.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Question8/home/home.component';
import { StudentComponent } from './Question8/student/student.component';
import { CreateEmployeeCanDeactivateGuardService } from './Question8/create-student-can-deactivate-guard.service';
import {RouterModule, Routes} from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,    
    ParentComponent,
    ChildComponent,
    HobbyComponent,
    ShopkeeperComponent,
    ImagefilterPipe,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CourselistComponent,
    CourseComponent,
    RegistrationFromComponent,
    CardlayoutComponent,
    AccordionComponent,
    HomeComponent,
    StudentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [ImageserviceService,ImagefilterPipe, AuthService, CourselistService, CardlayoutService, CreateEmployeeCanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
