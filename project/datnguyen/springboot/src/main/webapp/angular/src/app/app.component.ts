import { Component } from '@angular/core';
import { routerSlideAnimation } from '../app/component/animation/router-slide'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    routerSlideAnimation
  ]
})
export class AppComponent {
  title = 'app';
  sidebarToogle = true;
  
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation
  }
}
