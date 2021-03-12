import { Component, OnInit } from '@angular/core';
import {SharedService, User} from '../services/shared.service';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.scss'],
})
export class Parent2Component implements OnInit {

  userService: SharedService;
  userList: User[] = [];

  constructor() {
    this.userService = new SharedService();
  }

  ngOnInit(): void {
  }

  getUsers(): void {
    this.userList = this.userService.getUsers();
  }
}
