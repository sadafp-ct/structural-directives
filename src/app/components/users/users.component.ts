import { Component, OnInit } from '@angular/core';

import { users } from '../../data/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = users;
  description = true;

  constructor() {}

  ngOnInit() {}

  toggleFlag() {
    this.description = !this.description;
  }

}
