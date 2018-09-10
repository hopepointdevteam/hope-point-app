import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { OutreachMissions } from '../../../../build/constants/outreach-missions';

@Component({
  selector: 'app-outreach',
  templateUrl: './outreach.component.html',
  styleUrls: ['./outreach.component.css']
})
export class OutreachComponent implements OnInit {
  missions = OutreachMissions;
  base: any;
  constructor(private title: Title) {
    this.title.setTitle('Hope Point Nazarene Outreach Missions')
  }

  ngOnInit() {
    this.base = window.location.href 
    this.base = /(http\:\/\/[a-z\.\:0-9]+)\/([a-z]+)*\/*/g.exec(this.base);
    if(this.base[2] != 'preview' || !this.base[2]){
      this.base = this.base[1] + '/'
    } else {
      this.base = this.base[1] + '/' + this.base[2]
    }
  }

}
