import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-social',
  templateUrl: 'social.html'
})
export class Social {
  comments = [];
  message: string;
  url: string = 'http://localhost:4000/message'
  rating = {
    bad : 0,
    good : 0,
  }
  constructor(public navCtrl: NavController) {}

  sendComment(){
    /* if(this.message != ''){
      //this.http.post(this.url, {message : this.message}).subscribe((res : any) => {
        this.message = '';
      }) */
    //}
  }

  ionViewDidLoad(){}
}