import { Component, OnInit } from '@angular/core';
import { StaffMembers } from '../../../../build/constants/staff-members'; 
import { EventsService } from '../../services/events-service.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl, Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  staffMembers = StaffMembers;
  events: any[];
  base: any;
  constructor(private _eventService: EventsService, private sanitizer: DomSanitizer, private meta: Meta, private title: Title) { 
    // this.meta.addTag({'description': 'Hope Point Nazarene church in Yuba City, California welcomes you! Come as you are and join our family. Make Hope Point your home and grow in your walk with Christ.'})
    this.title.setTitle('Hope Point Nazarene Church')
  }
  ngOnInit(){
    this.base = window.location.href 
    this.base = /(http\:\/\/[a-z\.\:0-9]+)\/([a-z]+)*\/*/g.exec(this.base);
    if(this.base[2] != 'preview' || !this.base[2]){
      this.base = this.base[1] + '/'
    } else {
      this.base = this.base[1] + '/' + this.base[2]
    }    
  }
}
