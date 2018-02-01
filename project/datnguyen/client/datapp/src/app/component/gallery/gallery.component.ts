import { Component, OnInit } from '@angular/core';
import {MatToolbar, MatList, MatListItem, MatMenu, MatMenuItem, MatInput, 
  MatCardHeader, MatCardTitle, MatCardTitleGroup, MatCardSubtitle, MatCardContent, MatCardAvatar, MatCardFooter, MatIcon, 
  MatCardImage, MatCardLgImage, MatCardMdImage, MatCard, MatGridList, MatGridTile } from '@angular/material';
  import {Route, Router, RouterLink, RouterLinkActive, RouterOutlet, RouterEvent} from '@angular/router';
  import { ActivatedRoute } from '@angular/router';
  
@Component({
  selector: 'tea-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // public galleryBoot = [
  //   {cols: 1, rows: 1, text: "Well To TeaCode Provider", action: "click", actionTitle: "Register"},
  //   {cols: 1, rows: 1, text: "Let's Start Your Mind", action: "click", actionTitle: "Contact Us"}
  // ];

}
