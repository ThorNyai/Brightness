import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NavController } from 'ionic-angular';
import { Brightness } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private ServerUrl = 'http://192.168.0.13:8080/post';

  constructor(public navCtrl: NavController, private http: Http) {
    this.http = http;
  }
getData(){
  Brightness.getBrightness().then(data => {
    return data;
  })
}

SendData(){
this.http.post(this.ServerUrl, this.getData())
          .subscribe(data => {alert('ok');}, 
          error => {console.log(JSON.stringify(error.json()));});
}

}
