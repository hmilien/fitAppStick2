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
  
    @Input()
    name :string = "High intensity workout";
    @Input() 
    description :string = "Great workout for burning fat, boosting endurance,and building explosive speed and strength.";
    @Input() 
    summary :string = "High intensity interval training (HIIT) is one of the best ways to get fit quick";
    @Input() 
    title :string = "Developped by K Michael";
    @Input() 
    statistics :string = "2M downloads";
    
    constructor() {
    }

    preview(){

    }
    buy(){
      
    }

}
