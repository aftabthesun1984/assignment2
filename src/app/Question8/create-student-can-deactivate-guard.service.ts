import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { StudentComponent } from './student/student.component';

@Injectable()
export class CreateEmployeeCanDeactivateGuardService
    implements CanDeactivate<StudentComponent> {

    constructor() { }

    canDeactivate(component: StudentComponent): boolean {
        if (component.createStudentForm.dirty) {
            return confirm('Are you sure you want to discard your changes?');
        }

        return true;
    }
}