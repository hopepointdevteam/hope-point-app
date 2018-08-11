import { Component, OnInit } from '@angular/core';
import { StaffMembers } from '../../constants/staff-members';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  staffMembers = StaffMembers;
  constructor() { }

  ngOnInit() {
  }

}
