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
    
  }

  ngOnInit() {
    this.supports.set("location", [
      {address: "Lab 1", detail: "22/xx Phan Huy Liệu"},
      {address: "Lab 4", detail: "33/@@ Đặng Văn Ngữ"},
      {address: "Lab 4", detail: "33/@@ Đặng Văn Ngữ"},
      {address: "Lab 4", detail: "33/@@ Đặng Văn Ngữ"},
      {address: "Lab 4", detail: "33/@@ Đặng Văn Ngữ"},
    ]);
    this.supports.set("social", [
      {address: "Gmail", detail: "teacode.runner@gmail.com"},
      {address: "FaceBook", detail: "tea.code.3@facebook"},
    ]);
  }
}
