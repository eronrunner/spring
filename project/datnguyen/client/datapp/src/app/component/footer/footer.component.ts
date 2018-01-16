import { Component, OnInit, Input, Output, AfterViewInit } from '@angular/core';
import {MatToolbar, MatList, MatListItem, MatMenu, MatMenuItem, MatInput, 
  MatCardHeader, MatCardTitle, MatCardTitleGroup, MatCardSubtitle, MatCardContent, MatCardAvatar, MatCardFooter, MatIcon, 
  MatCardImage, MatCardLgImage, MatCardMdImage, MatCard, MatGridList, MatGridTile} from '@angular/material';

@Component({
  selector: 'tea-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, AfterViewInit {
  @Input() supports = new Map();
  // @Input() location: Object[];
  // @Input() social: Object[];

  constructor() { }

  ngAfterViewInit(){
    this.supports.set("location", [
      {address: "Lab 1", detail: "AAAAAAAAAAAAAA"},
      {address: "Lab 2", detail: "BBBBBBBBBBBB"},
      {address: "Lab 3", detail: "BBBBBBBBBBBB"},
      {address: "Lab 4", detail: "BBBBBBBBBBBB"},
      {address: "Lab 5", detail: "BBBBBBBBBBBB"},
      {address: "Lab 6", detail: "BBBBBBBBBBBB"},
    ]);
    this.supports.set("social", [
      {address: "Gmail", detail: "AAAAAAAAAAAAAA"},
      {address: "FaceBook", detail: "BBBBBBBBBBBB"},
      {address: "Yahoo", detail: "BBBBBBBBBBBB"},
    ]);
  }

  ngOnInit() {
  }
}
