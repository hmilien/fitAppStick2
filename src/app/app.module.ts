import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { Workouts } from '../pages/workouts/workouts';
import { DataRecord } from '../pages/datarecord/datarecord';
import { Profile } from '../pages/profile/profile';
import { Login } from '../pages/login/login';
import { WorkoutRoutine } from '../pages/workoutroutine/workoutroutine';
import { Workout } from '../pages/workout/workout';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {RoundProgressModule} from 'angular-svg-round-progressbar';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { Assessment } from '../pages/assessment/assessment';
import { Programs } from '../pages/programs/programs';
import { ProgramComponent } from '../components/program/program';
import {FilterComponent} from '../components/filter/filter';
import {TrainerItemComponent} from '../components/trainer-item/trainer-item'
import {ProgramContent} from '../pages/program-content/program-content';
import {Trainers} from '../pages/trainers/trainers';
import { Dashboard } from '../pages/dashboard/dashboard';
import { PopoverActionComponent } from '../components/popover-action/popover-action';


@NgModule({
    declarations: [
        MyApp,
        Dashboard,
        Workouts,
        DataRecord,
        Profile,
        Login,
        Assessment,
        WorkoutRoutine,
        Workout,
        ProgressBarComponent,
        Programs,
        ProgramComponent,
        FilterComponent,
        TrainerItemComponent,
        ProgramContent,
        Trainers,
        PopoverActionComponent,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        RoundProgressModule,
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        Dashboard,
        Workouts,
        DataRecord,
        Profile,
        Login,
        Assessment,
        WorkoutRoutine,
        Workout,
        Programs,
        ProgramContent,
        Trainers,
        PopoverActionComponent,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
