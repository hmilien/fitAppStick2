import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgramContent } from './program-content';
@NgModule({
  declarations: [
    ProgramContent,
  ],
  imports: [
    IonicPageModule.forChild(ProgramContent),
  ],
})
export class ProgramContentPageModule {}

