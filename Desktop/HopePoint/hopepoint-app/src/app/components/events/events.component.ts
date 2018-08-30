import { Component, OnInit } from '@angular/core';

import { EventsService } from '../../services/events-service.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl, Meta, Title } from '@angular/platform-browser';

// import { Event } from '../../models/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events;
  constructor(private _eventService: EventsService, private sanitizer: DomSanitizer, private meta: Meta, private title: Title) { }

  ngOnInit() {
    console.log(this.events)
    if(!this.events){
      this.loadEvents();
    }
  }

  loadEvents(){
    this._eventService.getEvents().subscribe(e => {
      console.log(e)
      this.events = e;
    })
  }

  sanatizeHtml(string){
    return this.sanitizer.bypassSecurityTrustHtml(string);
  }
}
