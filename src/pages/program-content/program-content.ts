import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProgramContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'program-content',
  templateUrl: 'program-content.html',
})
export class ProgramContent {

  @Input()
  name :string = "High intensity workout";
  @Input() 
  description :string = "The Basic Strength and Muscle program is not just for beginners: you should use it if you want a formalized and precise program following casual experience with weights. As the name implies, it's an all-around program for basic strength and muscle building. This could be used in off-season training if your sport has elements of strength, power and strength endurance, which fits many sports. Consult your coach to ensure it doesn't conflict with other training priorities. Training programs are always most efficient when tailored specifically for individuals and their goals."
  @Input() 
  nutritionPlan :string = "You'll need to eat more starchy carbs and fewer fats before and after workouts to promote energy and muscle growth. If you're training to pack on size, you'll eat like this more frequently. And when you're hours removed from a workout, you'll limit starches and increase fats, which will keep you on track to meet your fat-loss goals.";
  @Input() 
  supplementPlan :string = "Whey is a complete protein, meaning it has all nine essential amino acids necessary for protein synthesis. Whey is a foundational supplement and supports a huge range of goals for both men and women. It's fast-digesting and perfect for muscle building and fat loss in combination with a healthy diet and exercise.*";
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramContent');
  }
}
