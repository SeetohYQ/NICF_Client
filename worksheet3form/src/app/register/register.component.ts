import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { RSVP} from '../models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f',{static:false}) regForm: NgForm;
  @Output() onNewRSVP = new EventEmitter<RSVP>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    const values = this.regForm.value;
  
    const rsvp: RSVP = {
      name: values.name,
      numGuests : parseInt(values.numGuests) || 0,
      phone: values.phone,
      day: (new Date(values.day)).getTime(),
      vegetarian: values.vegetarian === 'Yes',
      allergies: [],
      comments: values.comments
    }
    for (let i in values){
      if (i.startsWith('allergies') && values[i])
        rsvp.allergies.push(i)
    }
    console.log(rsvp);
    this.regForm.resetForm();
    this.onNewRSVP.next(rsvp);
  }

}
