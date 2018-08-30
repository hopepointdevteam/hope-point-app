import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AllMinistries } from '../../constants/all-ministries';

@Component({
  selector: 'app-ministries',
  templateUrl: './ministries.component.html',
  styleUrls: ['./ministries.component.css']
})


export class MinistriesComponent implements OnInit {
  ministries = AllMinistries;
  constructor(private meta: Meta, private title: Title) {
    this.meta.addTag({'description': 'Hope Point Nazarene has many family, adult, and children ministries to choose from. Find yours today!'})
    this.title.setTitle('Hope Point Nazarene Ministries')
   }

  ngOnInit() {
  }

}
