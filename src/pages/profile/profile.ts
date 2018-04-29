import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class Profile {

  	current: number = 60;
	max: number = 100;
	stroke: number = 6;
	radius: number = 50;
	semicircle: boolean = false;
	rounded: boolean = false;
	responsive: boolean = false;
	clockwise: boolean = true;
	color: string = '#4dc27b';
	background: string = '#333333';
	duration: number = 3000;
	animation: string = 'easeOutCubic';
	animationDelay: number = 0;
	animations: string[] = [];
	gradient: boolean = false;
	realCurrent: number = 0;

	constructor(public navCtrl: NavController, public navParams: NavParams) {

	}


	getOverlayStyle() {
		let isSemi = this.semicircle;
		let transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

		return {
		  'top': isSemi ? 'auto' : '50%',
		  'bottom': isSemi ? '5%' : 'auto',
		  'left': '50%',
		  'transform': transform,
		  '-moz-transform': transform,
		  '-webkit-transform': transform,
		  'font-size': this.radius / 2.5 + 'px'
		};
	}

}
