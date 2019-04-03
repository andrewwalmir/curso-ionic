import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public nomeUsuario:string = "Andrew";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public alert(num1:number, num2:number): void{
    alert(num1 + num2);
  }

  //SEMPRE EXECUTA ESSA FUNÇÃO QUANDO A PÁGINA CARREGAR
  ionViewDidLoad() {
    //this.alert(10, 10);

  }

}
