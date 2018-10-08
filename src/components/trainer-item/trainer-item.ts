import { Component, Input } from '@angular/core';

/**
 * Generated class for the TrainerItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'trainer-item',
  templateUrl: 'trainer-item.html'
})
export class TrainerItemComponent {

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
    
    constructor() {
    }

    preview(){

    }
    buy(){
      
    }
  }
