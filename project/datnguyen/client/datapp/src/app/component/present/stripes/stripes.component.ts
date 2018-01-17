import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import {MatToolbar, MatList, MatListItem, MatMenu, MatMenuItem, MatInput, 
  MatCardHeader, MatCardTitle, MatCardTitleGroup, MatCardSubtitle, MatCardContent, MatCardAvatar, MatCardFooter, MatIcon, 
  MatCardImage, MatCardLgImage, MatCardMdImage, MatCard, MatGridList, MatGridTile} from '@angular/material';
import {Route, Router, RouterLink, RouterLinkActive, RouterOutlet, RouterEvent} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

export class Stripe implements OnInit {
  @Input() title: String;
  @Input() subtitle: String;
  @Input() content: String;
  @Input() subcontent: String;
  // @Input() card: MatCard;
  @Input() image: String;

  constructor(title:String, subtitle:String, content:String, subcontent:String, image:String) {
    this.title = title;
    this.subtitle = subtitle;
    this.content = content;
    this.subcontent = subcontent;
    this.image = image;
  }
  ngOnInit(){
    
  }
}

@Component({
  selector: 'tea-stripes',
  templateUrl: './stripes.component.html',
  styleUrls: ['./stripes.component.css']
})
export class StripesComponent implements OnInit {
  @Input('stripe') stripe: Stripe;

  ngOnInit() {

  }

}
