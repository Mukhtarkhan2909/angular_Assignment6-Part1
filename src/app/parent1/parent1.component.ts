import { Component, OnInit } from '@angular/core';
import { SharedService, User } from '../services/shared.service';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.scss']
})
export class Parent1Component implements OnInit {

  userService: SharedService;
  userList: User[] = [];

  constructor() {
    this.userService = new SharedService();
  }

  ngOnInit(): void{
  }

  getUsers(): void {
    this.userList = this.userService.getUsers();
  }

}
