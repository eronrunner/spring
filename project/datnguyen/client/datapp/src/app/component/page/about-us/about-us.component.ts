import { Component, OnInit } from '@angular/core';
import { StripesComponent, Stripe } from '../../present/stripes/stripes.component';
import {MatToolbar, MatList, MatListItem, MatMenu, MatMenuItem, MatInput, MatIcon, MatCardImage, MatCardLgImage, MatCardMdImage} from '@angular/material';
import {Route, Router, RouterLink, RouterLinkActive, RouterOutlet, RouterEvent} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'page-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  stripes: Stripe[];

  constructor() { }

  ngOnInit() {
    this.stripes = [
      new Stripe("About Us", "", `Mobile app development is a term used to denote the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones. These applications can be pre-installed on phones during manufacturing platforms, or delivered as web applications using server-side or client-side processing (e.g., JavaScript) to provide an "application-like" experience within a Web browser. Application software developers also must consider a long array of screen sizes, hardware specifications, and configurations because of intense competition in mobile software and changes within each of the platforms. Mobile app development has been steadily growing, in revenues and jobs created. A 2013 analyst report estimates there are 529,000 direct app economy jobs within the EU 28 members, 60% of which are mobile app developers.[1]

      As part of the development process, mobile user interface (UI) design `, "teacode", "https://cdn.dribbble.com/users/358786/screenshots/1339220/logodrible.png"),
      new Stripe("Terms", "", `Mobile app development is a term used to denote the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones. These applications can be pre-installed on phones during manufacturing platforms, or delivered as web applications using server-side or client-side processing (e.g., JavaScript) to provide an "application-like" experience within a Web browser. Application software developers also must consider a long array of screen sizes, hardware specifications, and configurations because of intense competition in mobile software and changes within each of the platforms. Mobile app development has been steadily growing, in revenues and jobs created. A 2013 analyst report estimates there are 529,000 direct app economy jobs within the EU 28 members, 60% of which are mobile app developers.[1]
`, "teacode", "https://cdn.dribbble.com/users/358786/screenshots/1339220/logodrible.png"),
    ];
  }

}
