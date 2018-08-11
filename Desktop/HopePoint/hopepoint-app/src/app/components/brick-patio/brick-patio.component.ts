import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Connections } from '../../models/connections';
import { HPConnections } from '../../constants/connection-constants';

@Component({
  selector: 'app-brick-patio',
  templateUrl: './brick-patio.component.html',
  styleUrls: ['./brick-patio.component.css']
})
export class BrickPatioComponent implements OnInit {
  hidden: any = {};
  connections = HPConnections;

  constructor() { }

  ngOnInit() { }

  // onClick(item) {
  //   Object.keys(this.hidden).forEach(h => {
  //     this.hidden[h] = false;
  //   });
  //   this.hidden[item.id] = true;
  // }
 
}
