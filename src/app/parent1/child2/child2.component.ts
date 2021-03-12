import {Component, OnInit} from '@angular/core';
import {SharedService, User} from '../../services/shared.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss'],
  providers: [SharedService]
})
export class Child2Component implements OnInit {

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
