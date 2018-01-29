import { Component, OnInit } from '@angular/core';
import { MatToolbar, MatButton, MatIcon, MatChip, MatToolbarRow, MatTooltip
, MatSidenav, MatSidenavContainer, MatSidenavContent,
} from '@angular/material'
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
}
