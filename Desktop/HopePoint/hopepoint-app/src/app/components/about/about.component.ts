import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PageLayoutService } from '../../services/page-layout.service';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  base: any;
  layout: any;
  constructor(private _pageService: PageLayoutService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.base = window.location.href 
    this.base = /(http\:\/\/[a-z\.\:0-9]+)\/([a-z]+)*\/*/g.exec(this.base);
    if(this.base[2] != 'preview' || !this.base[2]){
      this.base = this.base[1] + '/'
    } else {
      this.base = this.base[1] + '/' + this.base[2]
    }
    this.getCurrentBuild()
  }

  getCurrentBuild(){
    const page = 'about'
    this._pageService.getPageLayout(page).subscribe(e => {
      this.layout = e
    })
  }

  sanatizeHtml(string){
    return this.sanitizer.bypassSecurityTrustHtml(string);
  }

}
