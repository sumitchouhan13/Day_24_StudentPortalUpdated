import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  servicesItem = [
    {
      title: 'Create New User',
    },
    {
      title: 'Read User Details',
    },
    {
      title: 'Upadate Existing User',
    },
    {
      title: 'Delete Existing User',
    },
  ];

}
