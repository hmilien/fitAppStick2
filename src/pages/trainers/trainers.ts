import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events } from 'ionic-angular';
import {ProgramContent} from '../program-content/program-content'

/**
 * Generated class for the Trainers page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-trainers',
  templateUrl: 'trainers.html',
})
export class Trainers {

  trainerList:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getTrainerList();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainersPage');
  }

  getTrainerList(){
		this.trainerList = [
			{	"name" :"K Michael",
				"description" : "Program content Workout: 20; Nutrition plan : 2 Supplement plan : 6",
				"summary" : "High intensity interval training (HIIT) is one of the best ways to get fit quick",
				"title" : "Developped by K Michael",
				"statistics" : "2M downloads"
			},
			{	"name" :"K Michael",
				"description" : "Program content Workout: 20; Nutrition plan : 2 Supplement plan : 6",
				"summary" : "High intensity interval training (HIIT) is one of the best ways to get fit quick",
				"title" : "Developped by K Michael",
				"statistics" : "2M downloads"
			},
			{	"name" :"K Michael",
				"description" : "Program content Workout: 20; Nutrition plan : 2 Supplement plan : 6",
				"summary" : "High intensity interval training (HIIT) is one of the best ways to get fit quick",
				"title" : "Developped by K Michael",
				"statistics" : "2M downloads"
			},	
			
			{	"name" :"K Michael",
			"description" : "Program content Workout: 20; Nutrition plan : 2 Supplement plan : 6",
			"summary" : "High intensity interval training (HIIT) is one of the best ways to get fit quick",
			"title" : "Developped by K Michael",
			"statistics" : "2M downloads"
			}
		];
	}
}
