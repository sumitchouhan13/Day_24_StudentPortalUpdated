import { Component, OnInit } from '@angular/core';
import { AttendanceList } from '../attendanceModal';
import { UserService } from '../user.service';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.css']
})
export class AttendanceListComponent implements OnInit {
  presentList: Array<AttendanceList> = [];
  constructor(private userService: UserService) { 
    this.userService.getAllAttendance().subscribe((data) => {
      this.presentList = data;
    })
  }

  ngOnInit(): void {
  }

}
