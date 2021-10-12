import { Component, OnInit } from '@angular/core';
import { User } from '../modal';
import { UserService } from '../user.service';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { AttendanceList } from '../attendanceModal';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
  providers: [DatePipe],
})
export class AttendanceComponent implements OnInit {
  myDate: any = new Date();
  userList: Array<User> = [];
  studentList: Array<AttendanceList> = [];
  form: FormGroup;
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private router: Router
  ) {
    this.userService.getAllUser().subscribe((data) => {
      this.userList = data;
    });
    // this.form = this.fb.group({
    //   present: this.fb.array([]),
    //   date: new FormControl('' , [Validators.required]),
    // });
    this.form = new FormGroup({
      present: this.fb.array([]),
      date: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.myDate = this.datePipe.transform(new Date(), 'dd-MM-yy');
  }

  onCheckboxChange(e: any) {
    const present: FormArray = this.form.get('present') as FormArray;

    if (e.target.checked) {
      present.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      present.controls.forEach((item) => {
        if (item.value == e.target.value) {
          present.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  submitForm() {
    this.userService.saveAttendance(this.form.value).subscribe(
      () => {
        this.router.navigate(['/dashboard']);
      },
      () => {
        alert('Something Went Wrong');
      }
    );
  }
}
