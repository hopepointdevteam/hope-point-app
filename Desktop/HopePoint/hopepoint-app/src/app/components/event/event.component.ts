import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../services/events-service.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl, Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-event', 
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  event: any[];

  constructor(
    private route: ActivatedRoute, 
    private service: EventsService,
    private sanitizer: DomSanitizer,
    private meta: Meta,
    private title: Title
  ) {
    
   }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getEvent(id).subscribe((event) => {
      event.forEach(e => {
        if(e['@attributes'].id == id){
          this.event = e
          console.log(e)
          this.meta.addTag({'description': e.description})
          this.title.setTitle(e.name)
        }
      })
    })
    
  }

  sanatizeHtml(string){
    return this.sanitizer.bypassSecurityTrustHtml(string);
  }

}
