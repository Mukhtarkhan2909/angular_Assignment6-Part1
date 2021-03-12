import {Component, Input, OnInit} from '@angular/core';
import {SharedService, User} from '../../services/shared.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss'],
  providers: [SharedService]
})
export class Child3Component implements OnInit {

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
