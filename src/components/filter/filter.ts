import { Component, Output, Input, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the FilterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'filter',
  templateUrl: 'filter.html'
})
export class FilterComponent {

  @Output() footerClicked = new EventEmitter();
  text: string;

  constructor() {
    console.log('Hello FilterComponent Component');
    this.text = 'Hello World';
  }

  handleClick(){
  
  }



}
