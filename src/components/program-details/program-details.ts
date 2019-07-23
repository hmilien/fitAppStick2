import { Component, Output, Input} from '@angular/core';
import { Events } from 'ionic-angular';

/**
 * Generated class for the ProgramComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'program-details',
  templateUrl: 'program-details.html'
})
export class ProgramDetailsComponent {
  
    @Input()
    name :string = "High intensity workout";
    @Input() 
    description :string = "Program content Workout: 20; Nutrition plan : 2 Supplement plan : 6"
    @Input() 
    summary :string = "High intensity interval training (HIIT) is one of the best ways to get fit quick";
    @Input() 
    title :string = "Developped by K Michael";
    @Input() 
    statistics :string = "2M downloads";
    
    events:Events;

    constructor(_events:Events) {

      this.events = _events;
    }

    preview(){
      this.events.publish('preview');
    }
    buy(){
      
    }
}
