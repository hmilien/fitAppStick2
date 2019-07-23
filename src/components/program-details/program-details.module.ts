import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgramDetailsComponent } from './program-details';

@NgModule({
  declarations: [
    ProgramDetailsComponent,
  ],
  imports: [
    IonicPageModule.forChild(ProgramDetailsComponent),
  ],
  exports: [
    ProgramDetailsComponent
  ]
})
export class ProgramDetaiilsComponentModule {}
