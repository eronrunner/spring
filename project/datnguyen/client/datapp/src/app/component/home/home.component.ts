import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import {MatToolbar, MatList, MatListItem, MatMenu, MatMenuItem, MatInput, MatIcon, MatCardImage, MatCardLgImage, MatCardMdImage} from '@angular/material';
import { StripesComponent, Stripe } from '../present/stripes/stripes.component';
import {Route, Router, RouterLink, RouterLinkActive, RouterOutlet, RouterEvent} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() stripes: Stripe[];

  constructor() { 
    this.stripes = [
      new Stripe("About Us", "", "We are the ....", "teacode", "https://cdn.dribbble.com/users/358786/screenshots/1339220/logodrible.png"),
      new Stripe("Members", "", "We are the ....", "teacode", "https://cdn.dribbble.com/users/358786/screenshots/1339220/logodrible.png"),
      new Stripe("Production", "", "We are the ....", "teacode", "https://cdn.dribbble.com/users/358786/screenshots/1339220/logodrible.png"),
    ];
    console.log(this.stripes[1]);
  }

  ngOnInit() {
    
  }
}
