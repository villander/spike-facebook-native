import {Page, NavController, Platform} from 'ionic-angular';
import {Facebook} from 'ionic-native';
import {ManoPage} from '../mano/mano';

/*
  Generated class for the IntroPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/intro/intro.html',
})
export class IntroPage {
  static get parameters() {
    return [[NavController], [Platform]];
  }

  constructor(nav, Platform) {
    this.nav = nav;
    this.Platform = Platform;
  }

  login() {
    this.Platform.ready().then(() => {
      Facebook.login(["public_profile", "user_birthday"]).then(() => {
        this.nav.setRoot(ManoPage, {}, {directon: 'back'});
      }, (...args) => {
        console.log(args);
      })
    })
  }
}
