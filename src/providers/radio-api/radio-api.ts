import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RadioApiProvider {

  posts: any;
  private apiUrl = 'http://radiopelangimakassar.com/wp-json/wp/v2';

  constructor(
    public http: HttpClient,
  ) { }

  async getPosts(){
    return new Promise( resolve => {
      this.http.get(this.apiUrl+'/posts/?_embed').subscribe(data =>{
        resolve(data);
      })
    })
  }

}
