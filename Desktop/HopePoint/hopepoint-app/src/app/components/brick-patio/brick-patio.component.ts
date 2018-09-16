import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HPConnections } from '../../../../build/constants/connection-constants';
import { EventsService } from '../../services/events-service.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl, Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-brick-patio',
  templateUrl: './brick-patio.component.html',
  styleUrls: ['./brick-patio.component.scss']
})
export class BrickPatioComponent implements OnInit {
  hidden = [];
  expanded = [];
  IAmEvents: Event[];
  connections = HPConnections;
  base: any;
  constructor(private _eventService: EventsService, private sanitizer: DomSanitizer, private meta: Meta, private title: Title) { }

  ngOnInit() {
    this.base = window.location.href 
    this.base = /(http\:\/\/[a-z\.\:0-9]+)\/([a-z]+)*\/*/g.exec(this.base);
    if(this.base[2] != 'preview' || !this.base[2]){
      this.base = this.base[1] + '/'
    } else {
      this.base = this.base[1] + '/' + this.base[2]
    }
    if(!this.IAmEvents){
      this.loadEvents();
    }
  }

  loadEvents(){
    this._eventService.getEvents().subscribe(e => {
      this.scrubEvents(e);
    })
  }

  scrubEvents(events){
    var IAmEvents = []
    events.forEach((e) => {
      if(e.group_name == "I Am Hope Point Membership Class" ){
        IAmEvents.push(e);
      }   
    })
      
    this.IAmEvents = IAmEvents;
  }

  sanatizeHtml(string){
    return this.sanitizer.bypassSecurityTrustHtml(string);
  }
 
  returnContact(contact){
    if(contact.length === undefined){
      return ''
    } else {
      return '<a href="tel:' + contact + '">Call:&nbsp;<i class="fas fa-mobile-alt"></i></a> ' + contact
    }
  }

  returnEmail(email, event){
    if(email.length === undefined){
      return ''
    } else {
      return '<a href="mailto:' + email + '?Subject=Information%20About%20' + event + '" target="_top">Email:&nbsp;<i class="fas fa-envelope"></i></a> ' + email
    }
  }

}
