import { Component } from '@angular/core';
import { NavController, NavParams,Events, Popover } from 'ionic-angular';
import { Programs } from '../programs/programs';
import { DataRecord } from '../datarecord/datarecord';
import { PopoverActionComponent } from '../../components/popover-action/popover-action';
import { PopoverController } from 'ionic-angular'
import { Social } from '../social/social';
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
	constructor(public navCtrl: NavController, 
							public navParams: NavParams, 
							public popoverController: PopoverController) {
		
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

	openSocial(){
		this.navCtrl.push(Social);
	};
	
	presentPopover(myEvent: any) {
		let popover = this.popoverController.create(PopoverActionComponent);
    popover.present({
      ev: myEvent
    });
	}
}
