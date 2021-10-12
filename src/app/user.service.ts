import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './modal';
import { AttendanceList } from './attendanceModal';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userData: Array<User> = [];
  attendanceData: Array<AttendanceList> = [];
  constructor(private http: HttpClient) {}

  saveUser(user: User) {
    // this.userData.push(user);
    return this.http.post(
      `https://615f09dfaf3659001720479a.mockapi.io/api/users`,
      user
    );
  }

  getAllUser() {
    return this.http.get<Array<User>>(
      `https://615f09dfaf3659001720479a.mockapi.io/api/users`
    );
  }

  getUserByID(id: number) {
    return this.http.get<User>(
      `https://615f09dfaf3659001720479a.mockapi.io/api/users/${id}`
    );
  }

  updateUserById(userId: number, userdata: User) {
    return this.http.put(
      `https://615f09dfaf3659001720479a.mockapi.io/api/users/${userId}`,
      userdata
    );
  }

  deleteUserById(id: any) {
    return this.http.delete(
      `https://615f09dfaf3659001720479a.mockapi.io/api/users/${id}`
    );
  }

  saveAttendance(attendance: AttendanceList) {
    return this.http.post(
      `https://615f09dfaf3659001720479a.mockapi.io/api/attendance`,
      attendance
    );
  }

  getAllAttendance() {
    return this.http.get<Array<AttendanceList>>(
      `https://615f09dfaf3659001720479a.mockapi.io/api/attendance`
    );
  }
}
