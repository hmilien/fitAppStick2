import { Component, Output } from '@angular/core';

/**
 * Generated class for the ProgramComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'program',
  templateUrl: 'program.html'
})
export class ProgramComponent {
  
  @Output() text:string;

  constructor() {
    console.log('Hello ProgramComponent Component');
    this.text = 'Hello World';
  }

}
