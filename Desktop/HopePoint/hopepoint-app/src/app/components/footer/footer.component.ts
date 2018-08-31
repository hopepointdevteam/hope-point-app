import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Message } from '../../models/message';
import { HPConnections } from '../../constants/connection-constants';
import { AllMinistries } from '../../constants/all-ministries';

@Component({ 
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  connections = HPConnections;
  allMinistries = AllMinistries;
  today: number = Date.now();
  deviceInfo = null;
  downloadLink;
  message: Message = {
    name: '',
    email: '',
    message: '',
  };
  hidden: boolean = true;
  messageSent = false;
  messageConfirmationHidden = true;

  @ViewChild('infoMessage') form: any;

  constructor(private deviceService: DeviceDetectorService) { 
    this.getDevice();
  }

  ngOnInit() { }

  toggleForm(e){
    this.hidden = !this.hidden;
  }

  getDevice() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    
    if(this.deviceInfo.os == 'mac'){
      this.downloadLink = 'appStore'
    } else if(this.deviceInfo.os == 'android'){
      this.downloadLink = 'playStore'
    } else {
      this.downloadLink = 'desktop'
    }
  } 

  sendMessage({value, valid}: {value: Message, valid: boolean}){
    if(!valid){
        console.log('Form is not valid');
    } else {
      this.messageConfirmationHidden = false;
      this.hidden = true;
      //TODO: add send logic
      this.form.reset();
    }
    
  }
}
