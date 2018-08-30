import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  NavClass= '';
  TogglerClass = ''; 

  constructor(
    
  ) { 
    
  }
 

  ngOnInit() {
    this.NavClass = 'navbar navbar-expand-lg navbar-dark fixed-top';
    this.TogglerClass =  'collapse navbar-collapse';
   }

  
   @HostListener("window:scroll", [])
   onWindowScroll() {
 
     const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
     if(number < 10) {
      this.NavClass = 'navbar navbar-expand-md navbar-dark fixed-top';
     } else {
      this.NavClass = 'navbar navbar-expand-md navbar-dark fixed-top dark';
     }
 
   }

}
