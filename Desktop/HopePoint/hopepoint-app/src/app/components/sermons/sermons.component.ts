import { Component, OnInit } from '@angular/core';
import { SermonsService } from '../../services/sermons-service.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { Video } from '../../models/videos';

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.component.html',
  styleUrls: ['./sermons.component.css']
})


export class SermonsComponent implements OnInit {
  sermons: Video[];
  clips = [];
  
  constructor(private _sermonService: SermonsService, private sanitizer: DomSanitizer){}
  
  ngOnInit(){
    if(!this.sermons){
      this.loadSermons();
    }
  }
  loadSermons(){
    this._sermonService.getVideos().subscribe(sermons => {
      this.sermons = sermons.items;
    })
  }
  
  sanatizeUrl(url){
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + url);
  }
}
