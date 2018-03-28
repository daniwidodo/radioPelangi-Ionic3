import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RadioApiProvider } from '../providers/radio-api/radio-api';
import { RadioStreamProvider } from '../providers/radio-stream/radio-stream';
import { HttpClientModule } from '@angular/common/http';
import { PostDetailPageModule } from '../pages/post-detail/post-detail.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PostDetailPageModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RadioApiProvider,
    RadioStreamProvider,
    HttpClientModule
  ]
})
export class AppModule {}
