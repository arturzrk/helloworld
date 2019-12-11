import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import * as $ from 'jquery';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    'username': new FormControl(),
    'password': new FormControl()
  });

  Clicked(aButton) {
    //console.log(aButton.target.attributes['id']);
  }
}
