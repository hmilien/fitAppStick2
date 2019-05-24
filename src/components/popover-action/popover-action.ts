import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { Workouts } from '../../pages/workouts/workouts';
import { Programs } from '../../pages/programs/programs';
import { CustomFood } from '../../pages/customFood/customFood';
/**
 * Generated class for the PopoverActionComponent.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popover-action',
  templateUrl: 'popover-action.html'
})
export class PopoverActionComponent {

    constructor(public navCtrl: NavController, public navParams: NavParams, public events:Events) {
      
    }

    workouts(_event){
      this.navCtrl.push(Workouts);
    }

    findProgram(){
      this.navCtrl.push(Programs);
    }

    logMeal(){
      this.navCtrl.push(CustomFood);
    }

    logSupplement(){
      
    }
   
  }
