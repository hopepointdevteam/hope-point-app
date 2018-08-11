import { Component, OnInit } from '@angular/core';
import { WorshipLeaders } from '../../constants/worship-leaders';

@Component({
  selector: 'app-house-of-prayer',
  templateUrl: './house-of-prayer.component.html',
  styleUrls: ['./house-of-prayer.component.css']
})
export class HouseOfPrayerComponent implements OnInit {

  worshipLeaders = WorshipLeaders;

  constructor() { }

  ngOnInit() {
  }

}
