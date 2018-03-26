import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { TasksPage } from '../tasks/tasks';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  userName;
  pass;
  err_label;
  constructor(public navCtrl: NavController, public http: Http) {
  }

  onSubmit(myForm){
    this.http.post('http://localhost:5001/api/users/login',{"email": this.userName, "password": this.pass}).subscribe(res => {
      if(res.json() != null)
            this.navCtrl.push(TasksPage, res.json());
      else {
            this.err_label = "Username OR Password is wrong";
            myForm.reset();
           }
    })
  }
}
