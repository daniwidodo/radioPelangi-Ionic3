import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RadioApiProvider } from '../../providers/radio-api/radio-api';
import { PostDetailPage } from '../post-detail/post-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //
  posts: any;

  constructor(
    public navCtrl: NavController,
    public api: RadioApiProvider
  ) { 

  }

  ngOnInit(){
    this.getPostList();
  }

  async getPostList(){
    this.api.getPosts()
    .then(data =>{ this.posts = data;
      console.log(this.posts);
    })
  }

  bacaPost(post){
    this.navCtrl.push(PostDetailPage, {'post':post})
    console.log('klik baca ...')
  }

}
