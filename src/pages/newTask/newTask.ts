import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-newTask',
  templateUrl: 'newTask.html'
})
export class newTaskPage {
user_Name: string;
password: string;
return_label: string;
task_description: string;

  constructor(public navCtrl: NavController, public http: Http,public storage: Storage,public events: Events) {
  }

  onSubmit(myForm){
    /*Async Function*/
    this.storage.get("userName").then((userNameD) => {
      this.user_Name = userNameD;
      this.http.post('http://localhost:5001/api/tasks/addTask',{"email": this.user_Name,"tasks":this.task_description}).subscribe(res => {
        if(res.json() != null){
              this.navCtrl.pop();
              this.events.publish('return-from-add-task-screen', res.json().tasks);
        }
        else {
              this.return_label = "Oppppps something is not workin :(";
              myForm.reset();
             }
      })
    });
    
    //Need to use CUID instad of password...like AWZ...
    //https://myserverniv.herokuapp.com/api/tasks/addTask
  }
}
