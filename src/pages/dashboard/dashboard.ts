import { Component } from '@angular/core';
import { NavController, NavParams,Events } from 'ionic-angular';
import { Programs } from '../programs/programs';
import { DataRecord } from '../datarecord/datarecord';

/**
 * Generated class for the Dashboard page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class Dashboard {

  trainerList:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainersPage');
  }


	openPrograms(){
		
		this.navCtrl.push(Programs);
	};

	openProgress(){
		this.navCtrl.push(DataRecord);
	};
}
