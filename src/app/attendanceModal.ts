export interface AttendanceList {
  id?: number;
  date: string;
  present: Array<number>;
}

export interface attendanceChart {
  name: string;
  value: number;
}
