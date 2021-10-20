import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('loginSlide', {static: true}) slides: IonSlides;

  textFooter = 'Sign In';

  constructor( private navController: NavController ) { }

  ngOnInit() {
    this.slides.lockSwipes( true );
  }

  signIn() {
    this.textFooter = 'Log In';
    this.slides.lockSwipes( false );
    this.slides.slideTo( 1 );
    this.slides.lockSwipes( true );
  }

  logIn() {
    this.textFooter = 'Sign In';
    this.slides.lockSwipes( false );
    this.slides.slideTo( 0 );
    this.slides.lockSwipes( true );
  }

  nextSlide() {
    this.slides.lockSwipes( false );
    this.slides.slideNext();
    this.slides.lockSwipes( true );
  }

  changeSlide() {
    this.slides.getActiveIndex().then( (index) => {
      if (index === 0) {
        this.signIn();
      } else {
        this.logIn();
      }
    });
  }

  signInPage() {
    this.navController.navigateRoot( '/sign-in', { animated: true } );
  }

  home(){
    this.navController.navigateRoot( '/tabs', { animated: true } );
  }

}
