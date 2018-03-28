import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-post-detail',
  templateUrl: 'post-detail.html',
})
export class PostDetailPage {

  //
  post: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,

  ) {
    //
    this.post = this.navParams.get('post');
    console.log( this.post );
  }

}
