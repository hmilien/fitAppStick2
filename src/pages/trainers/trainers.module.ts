import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Trainers } from './trainers';

@NgModule({
  declarations: [
    Trainers,
  ],
  imports: [
    IonicPageModule.forChild(Trainers),
  ],
})
export class TrainersPageModule {}
