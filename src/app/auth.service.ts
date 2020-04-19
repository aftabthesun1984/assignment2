import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  private userList: User[] = [
    { id: 1, firstName: "Suraj", lastName: "Kumar", username: "ajay@gmail.com", password: "123456" },
    { id: 2, firstName: "Aftab", lastName: "Ahmad", username: "aftab@gmail.com", password: "123456" },
  ];


  constructor() { }
  login(username: string, password: string): Observable<boolean> {
    debugger;
    if (this.user = this.userList.slice(0).find(u => u.username == username && u.password == password))
      return of(true);
    else
      return of(false);
  }
  getUserList(): Observable<User[]> {
    return of(this.userList);
  }

  deleteUser(id: number) {
    debugger;
    const i = this.userList.findIndex(e => e.id === id);
    if (i !== -1) {
      this.userList.splice(i, 1);
    }
  }

  registerUser(user: User) {
    debugger;
    this.userList.push(user);
  }
}

