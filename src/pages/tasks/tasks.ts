import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { newTaskPage } from '../newTask/newTask';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html'
})
export class TasksPage {
  tasks: string[];
  task: string;
  userName: string;
  pass: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,public storage: Storage,public events: Events, public alertCtrl: AlertController) {
    events.subscribe('return-from-add-task-screen', (tasks) => {
      this.tasks = tasks;
      this.presentAlert(this.tasks[this.tasks.length-1]);      
    });

    this.tasks = navParams.data[0].tasks;
    this.userName = navParams.data[0].email;
    this.pass = navParams.data[0].password;
   
  /*User Credentials*/
  storage.set('userName', navParams.data[0].email);
  storage.set('pass', navParams.data[0].password);

  }

  delete(i : string){
/*     delete this.tasks[i];    
 */    this.http.post('http://localhost:5001/api/tasks/delete',{"email": this.userName,"index": i}).subscribe(res => {
      if(res.json() != null){
        console.log(res.json().tasks);
        this.tasks = res.json().tasks;

      }
      else {
         //   this.err_label = "Username OR Password is wrong";
          //  myForm.reset();
           }
    })
  }

  add(){
    this.navCtrl.push(newTaskPage);
  }

  presentAlert(text: string) {
    let alert = this.alertCtrl.create({
      title: 'Task created',
      message: "\""+ text +"\"",
      cssClass: 'myAlret',
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
