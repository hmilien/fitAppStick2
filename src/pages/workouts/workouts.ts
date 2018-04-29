import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WorkoutRoutine } from '../workoutroutine/workoutroutine';

@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html'
})
export class Workouts {

  constructor(public navCtrl: NavController) {

  }

  goToWorkoutRoutine() {
    this.navCtrl.push(WorkoutRoutine);
  }

}
