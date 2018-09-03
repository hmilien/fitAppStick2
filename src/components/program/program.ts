import { Component, Output, Input } from '@angular/core';

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
  
  @Input()name :string = "";
  @Input() description :string = "";
  @Input() summary :string = "";
  @Input() title :string = "";
  @Input() statistics :string = "";
  
  constructor() {
    
    this.name = "High intensity workout";
    this.description = "Great workout for burning fat, boosting endurance,and building explosive speed and strength.";
    this.statistics = "2M downloads";
    this.summary = "High intensity interval training (HIIT) is one of the best ways to get fit quick";
    this.title = "Developped by K Michael";
  }

  preview(){

  }
  buy(){
    
  }

}
