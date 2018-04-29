import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Workout } from '../workout/workout';


@Component({
  selector: 'page-workoutroutine',
  templateUrl: 'workoutroutine.html',
})
export class WorkoutRoutine {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToWorkout() {
    this.navCtrl.push(Workout);
  }

}
