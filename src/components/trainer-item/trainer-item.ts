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
    name :string = "D Michael";
    @Input() 
    bio :string = "Dante trained a range of clients, including weekend warriors, desk jockeys and the elderly. He believes exercise is fundamental to living a well-balanced life, and truly enjoys helping people.";
    @Input() 
    statistics :string = "2M downloads";
    constructor() {
    }

    preview(){

    }
    buy(){
      
    }
  }
