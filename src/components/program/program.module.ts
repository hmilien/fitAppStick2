import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgramComponent } from './program';

@NgModule({
  declarations: [
    ProgramComponent,
  ],
  imports: [
    IonicPageModule.forChild(ProgramComponent),
  ],
  exports: [
    ProgramComponent
  ]
})
export class ProgramBarComponentModule {}
