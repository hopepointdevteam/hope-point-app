import { Component, OnInit } from '@angular/core';
import { Ministry } from '../../models/ministries';
import { AdultMinistries } from '../../constants/adult-ministries';
import { FamilyMinistries } from '../../constants/family-ministries';



@Component({
  selector: 'app-navbar-ministry-modal',
  templateUrl: './navbar-ministry-modal.component.html',
  styleUrls: ['./navbar-ministry-modal.component.css']
})
export class NavbarMinistryModalComponent implements OnInit {
  
  adultMinistries = AdultMinistries;
  familyMinistries = FamilyMinistries;

  constructor() { }

  ngOnInit() { }

}
