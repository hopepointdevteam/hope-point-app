import { Component, OnInit } from '@angular/core';
import { StaffMembers } from '../../constants/staff-members'; 
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
  constructor(private _eventService: EventsService, private sanitizer: DomSanitizer, private meta: Meta, private title: Title) { 
    this.meta.addTag({'description': 'Hope Point Nazarene church in Yuba City, California welcomes you! Come as you are and join our family. Make Hope Point your home and grow in your walk with Christ.'})
    this.title.setTitle('Hope Point Nazarene Church')
  }
 
  ngOnInit() {
    // if(!this.events){
    //   this.loadEvents();
    //   console.log(this.events)
    // }
  }

  loadEvents(){
    this._eventService.getEvents().subscribe(e => {
      this.events = e;
    })
  }

}
