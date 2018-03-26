import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { newTaskPage } from '../pages/newTask/newTask';
import { TasksPage } from '../pages/tasks/tasks';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { IonicStorageModule } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Http, HttpModule , Response, RequestOptions, Headers } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    newTaskPage,
    TasksPage,
    TabsControllerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot() ,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    newTaskPage,
    TasksPage,
    TabsControllerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
   
  ]
})
export class AppModule {}