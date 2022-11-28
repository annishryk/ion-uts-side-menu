import { Component } from '@angular/core';

//tambahlan Import component
import { Platform } from '@ionic/angular'; 
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx'; 

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // Tambahkan
  activePageTitle = 'Dashboard';
  Pages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'home'
    },
    {
      title: 'Product',
      url: '/product',
      icon: 'pricetags'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'flower'
    },
    {
      title: 'Contact',
      url: '/contact',
      icon: 'call'
    },
  ];

  // Tambahkan
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
