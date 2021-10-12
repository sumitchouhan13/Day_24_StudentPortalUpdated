import { Component, OnInit } from '@angular/core';
import { User } from '../modal';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  userList: Array<User> = [];
  constructor(private userService: UserService) {
    this.userService.getAllUser().subscribe((data) => {
      this.userList = data;
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.userService.getAllUser().subscribe((data) => {
      this.userList = data;
    });
  }

  cardItem = [
    {
      title: 'Earnings (Monthly)',
      price: '$40,000',
    },
    {
      title: 'Earnings (Annual)',
      price: '$215,000',
    },
    {
      title: 'Tasks',
      price: '50%',
    },
    {
      title: 'Pending Requests',
      price: '18',
    },
  ];
  deleteUser(id: any) {
    this.userService.deleteUserById(id).subscribe((data) => {
      this.loadData();
    });
  }
}
