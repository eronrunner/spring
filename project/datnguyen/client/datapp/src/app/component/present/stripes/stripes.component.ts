import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import {MatToolbar, MatList, MatListItem, MatMenu, MatMenuItem, MatInput, 
  MatCardHeader, MatCardTitle, MatCardTitleGroup, MatCardSubtitle, MatCardContent, MatCardAvatar, MatCardFooter, MatIcon, 
  MatCardImage, MatCardLgImage, MatCardMdImage, MatCard, MatGridList, MatGridTile} from '@angular/material';


@Component({
  selector: 'tea-stripes',
  templateUrl: './stripes.component.html',
  styleUrls: ['./stripes.component.css']
})
export class StripesComponent implements OnInit {
  // @Input() title: String = "";
  // @Input() subtitle: String = "";
  // @Input() content: String = "";
  // @Input() subcontent: String = "";
  // // @Input() card: MatCard;
  // @Input() image: String = "";
  @Input() stripe: {};

  constructor() {
  }

  ngOnInit() {

  }

}
