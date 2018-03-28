import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RadioApiProvider } from '../../providers/radio-api/radio-api';
import { PostDetailPage } from '../post-detail/post-detail';
import { RadioStreamProvider } from '../../providers/radio-stream/radio-stream';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //
  posts: any;

  //
  showButton : boolean;

  constructor(
    public navCtrl: NavController,
    public api: RadioApiProvider,
    public _player: RadioStreamProvider,
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

  playStream(){
    console.log('Play Button clicked');
    this.showButton = true;
    this._player.playAudioProvider;
    //this.startMusicControls();
  }

  stopStream(){
    console.log('Stop Button');
    this.showButton = false;
    this._player.pauseProvider();
    //this._musicControls.updateIsPlaying(true);
    
  }

}
