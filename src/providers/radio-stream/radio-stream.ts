import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RadioStreamProvider {

  url:string;
  stream:any;
  promise:any;

  constructor(
    public http: HttpClient,
  ) {

    //
    this.url = "http://188.166.234.48:8000/radio_pelangi";
    //
    this.stream = new Audio(this.url);
  }

  playAudioProvider(){
    //
    this.stream.play();

    //
    this.promise = new Promise((resolve,reject) => {
      this.stream.addEventListener('playing', () => {
        resolve(true);
      });
      this.stream.addEventListener('error', () => {
        reject(false);
      });

      //
      return this.promise;
    });
  }

  //
  pauseProvider() {
    this.stream.pause();
  };

}
