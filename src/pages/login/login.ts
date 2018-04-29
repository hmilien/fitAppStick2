import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

import { Workouts } from '../../pages/workouts/workouts';

@Component({
  	selector: 'page-login',
  	templateUrl: 'login.html',
})
export class Login {

  	constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {

  		this.menuCtrl.enable(false);
  	
  	}

 	openWorkouts() {
    	this.navCtrl.setRoot(Workouts);
    	this.menuCtrl.enable(true);
  	}
}
