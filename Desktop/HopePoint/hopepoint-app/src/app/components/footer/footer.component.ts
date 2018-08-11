import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { FormsModule }   from '@angular/forms';
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
  message: Message = {
    name: '',
    email: '',
    message: '',
  };
  hidden: boolean = true;
  messageSent = false;
  messageConfirmationHidden = true;

  @ViewChild('infoMessage') form: any;

  constructor() { }

  ngOnInit() { }

  toggleForm(e){
    this.hidden = !this.hidden;
  }

  sendMessage({value, valid}: {value: Message, valid: boolean}){
    if(!valid){
        console.log('Form is not valid');
    } else {
      console.log(value);
      this.messageConfirmationHidden = false;
      this.hidden = true;
      //TODO: add send logic
      this.form.reset();
    }
    
  }
}
