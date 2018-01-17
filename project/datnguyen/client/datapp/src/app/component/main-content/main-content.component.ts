import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import {MatToolbar, MatList, MatListItem, MatMenu, MatMenuItem, MatInput, MatIcon, MatCardImage, MatCardLgImage, MatCardMdImage} from '@angular/material';
import { StripesComponent } from '../present/stripes/stripes.component';
import { AfterContentInit, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { HomeComponent } from '../home/home.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'tea-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit, AfterViewInit {
  homePage: HomeComponent;

  constructor() { 
    
  }

  ngAfterViewInit(){

  }

  ngOnInit() {
  }

}
