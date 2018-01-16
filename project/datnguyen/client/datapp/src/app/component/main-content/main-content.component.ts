import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import {MatToolbar, MatList, MatListItem, MatMenu, MatMenuItem, MatInput, MatIcon, MatCardImage, MatCardLgImage, MatCardMdImage} from '@angular/material';
import { StripesComponent } from '../present/stripes/stripes.component';
import { AfterContentInit, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'tea-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit, AfterViewInit {
  @Input() stripes: StripesComponent[];

  constructor() { 
    
  }

  ngAfterViewInit(){
    this.stripes = [
      {title:"About Us", subtitle: "", content: "We are the .....", subcontent: "teacode", image: "https://cdn.dribbble.com/users/358786/screenshots/1339220/logodrible.png"},
      {title:"About Us", subtitle: "", content: "We are the .....", subcontent: "teacode", image: "https://cdn.dribbble.com/users/358786/screenshots/1339220/logodrible.png"},
      {title:"About Us", subtitle: "", content: "We are the .....", subcontent: "teacode", image: "https://cdn.dribbble.com/users/358786/screenshots/1339220/logodrible.png"},
      {title:"About Us", subtitle: "", content: "We are the .....", subcontent: "teacode", image: "https://cdn.dribbble.com/users/358786/screenshots/1339220/logodrible.png"}
    ];
  }

  ngOnInit() {
  }

}
