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

@NgModule({
    declarations: [
        MyApp,
        Workouts,
        DataRecord,
        Profile,
        Login,
        WorkoutRoutine,
        Workout,
        ProgressBarComponent
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        RoundProgressModule,
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        Workouts,
        DataRecord,
        Profile,
        Login,
        WorkoutRoutine,
        Workout
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
