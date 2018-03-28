import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RadioApiProvider } from '../../providers/radio-api/radio-api';
import { PostDetailPage } from '../post-detail/post-detail';
import { RadioStreamProvider } from '../../providers/radio-stream/radio-stream';
import { MusicControls } from '@ionic-native/music-controls';

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
    private _musicControls: MusicControls
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
    this._player.playAudioProvider();
    this.startMusicControls();
  }

  stopStream(){
    console.log('Stop Button');
    this.showButton = false;
    this._player.pauseProvider();
    this._musicControls.updateIsPlaying(true);
    
  }

  startMusicControls(){
    this._musicControls.destroy(); // it's the same with or without the destroy 
    this._musicControls.create({
      track       : 'Radio Pelangi',        // optional, default : ''
      artist      : '',                       // optional, default : ''
      cover       : '',      // optional, default : nothing
      // cover can be a local path (use fullpath 'file:///storage/emulated/...', or only 'my_image.jpg' if my_image.jpg is in the www folder of your app)
      //           or a remote url ('http://...', 'https://...', 'ftp://...')
      isPlaying   : true,                         // optional, default : true
      dismissable : true,                         // optional, default : false
    
      // hide previous/next/close buttons:
      hasPrev   : false,      // show previous button, optional, default: true
      hasNext   : false,      // show next button, optional, default: true
      hasClose  : false,       // show close button, optional, default: false
      hasSkipForward : false,  // show skip forward button, optional, default: false
      hasSkipBackward : false, // show skip backward button, optional, default: false
      skipForwardInterval: 0, // display number for skip forward, optional, default: 0
      skipBackwardInterval: 0, // display number for skip backward, optional, default: 0
    // iOS only, optional
      album       : 'Radio Pelangi Player',     // optional, default: ''
      duration : 0, // optional, default: 0
      elapsed : 0, // optional, default: 0
    
      // Android only, optional
      // text displayed in the status bar when the notific\ation (and the ticker) are updated
      ticker    : 'Now playing'
     });
     this._musicControls.subscribe().subscribe((action) => {
      console.log('action', action);
          const message = JSON.parse(action).message;
          console.log('message', message);
          switch(message) {
            case 'music-controls-next':
               // Do something
               break;
            case 'music-controls-previous':
               // Do something
               break;
            case 'music-controls-pause':
               // Do something
               console.log('music pause');
               this._player.pauseProvider();
               this._musicControls.listen(); 
               this._musicControls.updateIsPlaying(false);
               break;
            case 'music-controls-play':
               // Do something
               console.log('music play');
               
               this._player.playAudioProvider();
               this._musicControls.listen(); 
               this._musicControls.updateIsPlaying(true);
               break;
            case 'music-controls-destroy':
               // Do something
               break;
            // External controls (iOS only)
            case 'music-controls-toggle-play-pause' :
              // Do something
              break;
            case 'music-controls-seek-to':
              // Do something
              break;
            case 'music-controls-skip-forward':
              // Do something
              break;
            case 'music-controls-skip-backward':
              // Do something
              break;

              // Headset events (Android only)
              // All media button events are listed below
            case 'music-controls-media-button' :
                // Do something
                break;
            case 'music-controls-headset-unplugged':
                // Do something
                break;
            case 'music-controls-headset-plugged':
                // Do something
                break;
            default:
                break;
          }
    });
    this._musicControls.listen(); // activates the observable above
    this._musicControls.updateIsPlaying(true);
  }

}
