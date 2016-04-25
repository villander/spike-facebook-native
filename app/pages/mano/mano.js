import {Page, NavController} from 'ionic-angular';
import {Facebook} from 'ionic-native';
import {IntroPage} from '../intro/intro';

/*
  Generated class for the ManoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/mano/mano.html',
})
export class ManoPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }

  logout(){
    Facebook.logout().then(() => {
      this.nav.setRoot(IntroPage);
    }, (...args) => {
      console.log(args);
    })
  }
}
