import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
//import {TrainerItemComponent} from '../../components/trainer-item/trainer-item'



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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainersPage');
  }

}
