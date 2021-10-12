import { Component, OnInit } from '@angular/core';
// import { single } from '../data';
import { AttendanceList } from '../attendanceModal';
import { UserService } from '../user.service';
import { attendanceChart } from '../attendanceModal';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  single: Array<attendanceChart> = [];
  temp: Array<attendanceChart> = [];

  view: [number, number] = [900, 350];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Attendance Date';
  showYAxisLabel = true;
  yAxisLabel = 'Number of Students Present';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  constructor(private userService: UserService) {
    this.userService.getAllAttendance().subscribe((data) => {
      data.forEach((date) => {
        let count = 0;
        date.present.forEach((present) => {
          count++;
        });
        this.temp.push({ name: date.date, value: count });
      });
      this.single = this.temp;
    });
  }

  // onSelect(event: any) {
  //   console.log(event);
  // }

  ngOnInit(): void {}
}
