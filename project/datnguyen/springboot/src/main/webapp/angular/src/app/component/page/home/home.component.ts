import { Component, OnInit } from '@angular/core';
import { routerSlideAnimation } from '../../animation/router-slide';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    routerSlideAnimation
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation
  }
}
