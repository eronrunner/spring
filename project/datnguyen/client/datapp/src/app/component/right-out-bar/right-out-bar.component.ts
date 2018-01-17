import { Component, OnInit } from '@angular/core';
import {MatToolbar, MatList, MatListItem, MatMenu, MatMenuItem, MatInput, MatIcon, MatCardImage, MatCardLgImage, MatCardMdImage,
MatGridList, MatGridTile, MatButton} from '@angular/material';
import {Route, Router, RouterLink, RouterLinkActive, RouterOutlet, RouterEvent} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tea-right-out-bar',
  templateUrl: './right-out-bar.component.html',
  styleUrls: ['./right-out-bar.component.css']
})
export class RightOutBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public tiles = [
    { text: 'account_circle', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'info', cols: 1, rows: 1, color: 'lightgreen' },
    { text: 'forum', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'create', cols: 1, rows: 1, color: '#DDBDF1' },
  ];
}
