import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  @ViewChild('signInSlide', {static: true}) slides: IonSlides;

  constructor( private navController: NavController ) { }

  ngOnInit() {
    this.slides.lockSwipes( true );
  }

  home(){
    this.navController.navigateRoot( '/home/tabs', { animated: true } );
  }

}
