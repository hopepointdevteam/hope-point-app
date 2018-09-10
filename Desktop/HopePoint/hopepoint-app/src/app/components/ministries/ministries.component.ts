import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AllMinistries } from '../../../../build/constants/all-ministries'; 

@Component({
  selector: 'app-ministries',
  templateUrl: './ministries.component.html',
  styleUrls: ['./ministries.component.css']
})


export class MinistriesComponent implements OnInit {
  ministries = AllMinistries;
  base: any;
  constructor(private meta: Meta, private title: Title) {
    this.meta.addTag({'description': 'Hope Point Nazarene has many family, adult, and children ministries to choose from. Find yours today!'})
    this.title.setTitle('Hope Point Nazarene Ministries')
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
