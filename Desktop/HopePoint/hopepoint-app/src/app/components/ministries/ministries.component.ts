import { Component, OnInit } from '@angular/core';

import { AllMinistries } from '../../constants/all-ministries';

@Component({
  selector: 'app-ministries',
  templateUrl: './ministries.component.html',
  styleUrls: ['./ministries.component.css']
})


export class MinistriesComponent implements OnInit {
  ministries = AllMinistries;
  title = 'Hope Point Ministries';
  constructor() { }

  ngOnInit() {
  }

}
