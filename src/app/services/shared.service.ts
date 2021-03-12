import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public getUsers(): User[]{
    let userList: User[];
    userList = [
      new User(1, 'Mark', 25),
      new User(2, 'Tom', 50),
      new User(3, 'Bob', 40)
    ];
    return userList;
  }
}
export class User {
  id: number;
  name: string;
  age: number;
  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}
