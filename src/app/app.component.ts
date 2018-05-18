import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Tabs } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';

import { Workouts } from '../pages/workouts/workouts';
import { DataRecord } from '../pages/datarecord/datarecord';
import { Profile } from '../pages/profile/profile';
import { Login } from '../pages/login/login';
import { Assessment } from '../pages/assessment/assessment';
import { Programs } from '../pages/programs/programs';


@Component({
    selector: 'page-menu',
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = Login;
    activePage: any;

    pages: Array<{title: string, component: any, icon : string}>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public alertCtrl: AlertController) {
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Workouts', component: Workouts, icon: 'ios-man-outline' },
            { title: 'Progress', component: DataRecord, icon: 'ios-list-box-outline' },
            { title: 'Profile', component: Profile, icon: 'ios-person-outline' },
            { title: 'Assessment', component: Assessment, icon: 'ios-person-outline' },
        ];

        this.activePage = this.pages[0];
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
        this.activePage = page;
    }

    activeMenu(page) {
        return page == this.activePage;
    }

    openLogout() {
        let alertLogout = this.alertCtrl.create({
            title: 'Logout',
            subTitle: 'You are going out!!',
            buttons: [{
                text: 'OK',
                handler: () => {
                    this.nav.setRoot(Login);
                    this.activePage = this.pages[0];
                }
            }]
        });
        alertLogout.present();
    }
}
