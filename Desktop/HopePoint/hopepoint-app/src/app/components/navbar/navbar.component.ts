import { Component, OnInit, HostListener } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mobile = false;
  deviceInfo = null;
  NavClass= '';
  TogglerClass = ''; 

  constructor(private deviceService: DeviceDetectorService
  ) { 
    this.getDevice();
  }

  getDevice() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    console.log(this.deviceInfo);
  }  

  ngOnInit() {
    /*
      Check for device type to set navbar styles
    */
    if(this.deviceInfo.device == 'iphone' || this.deviceInfo.device == 'android'){
      /*
        If mobile device detected load in mobile class
      */
      this.NavClass="navbar navbar-expand-lg darken";
      this.TogglerClass = "collapse navbar-collapse mobile-nav px-3";
    } else {
      /*
        If desktop detected, load in normal classes
      */
      this.NavClass="navbar navbar-expand-lg mainNav";
      this.TogglerClass = "collapse navbar-collapse justify-content-center";
    } 
   }
  
  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    /*
      Check height of screen
    */
    if(number <= 100){
      /*
        If no scroll has been detected, load in transparent navbar classes
      */
      if(this.deviceInfo.device == 'iphone' || this.deviceInfo.device == 'android'){
        this.NavClass="navbar navbar-expand-lg darken";
        this.TogglerClass = "collapse navbar-collapse mobile-nav px-3";
      } else {
        this.NavClass="navbar navbar-expand-lg mainNav";
        this.TogglerClass = "collapse navbar-collapse justify-content-center";
      }      
    } else {
      /*
        Once scroll has been detected, load in darker transparent navbar classes
      */
      if(this.deviceInfo.device == 'iphone' || this.deviceInfo.device == 'android'){
        this.NavClass="navbar navbar-expand-lg darken";
        this.TogglerClass = "collapse navbar-collapse mobile-nav px-3";
      } else {
        this.NavClass="navbar navbar-expand-lg mainNavDark";
        this.TogglerClass = "collapse navbar-collapse justify-content-center";
      } 
    }
  }

}
