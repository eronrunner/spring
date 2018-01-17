import { Component, OnInit } from '@angular/core';
import {MatToolbar, MatList, MatListItem, MatMenu, MatMenuItem, MatInput, MatIcon, MatCardImage, MatCardLgImage, MatCardMdImage} from '@angular/material';
import { StripesComponent, Stripe } from '../../present/stripes/stripes.component';
import {Route, Router, RouterLink, RouterLinkActive, RouterOutlet, RouterEvent} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'page-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent implements OnInit {
  stripes: Stripe[];

  constructor() { }

  ngOnInit() {
    this.stripes = [
      new Stripe("Web Tech", "", `WEB Technology designs, manufactures, markets, and services a wide range of handling and other test related equipment for packaged integrated circuits. Originally founded in 1982, our current product range includes the following:

    Series 6000 Bubble Detection Systems
    Series 7000 Vapor Detection Gross Leak Test Systems
    Series 8000 and 8050 Gross Leak/Fine Leak Preconditioning Systems
    Series 9000 Centrifuge Systems and supporting line of Centrifuge Inserts
    Model QT Bench Top Test Handler
    Model 5800 Turret Test Handler
    Model 8832 Turret Test Handler
    Series 4800 Burn-In Board Loader/Unloader Systems
    Model ATS-6000 Component Test System
`, "teacode", "https://cdn.dribbble.com/users/358786/screenshots/1339220/logodrible.png"),

      new Stripe("Mobile Development", "", `Mobile app development is a term used to denote the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones. These applications can be pre-installed on phones during manufacturing platforms, or delivered as web applications using server-side or client-side processing (e.g., JavaScript) to provide an "application-like" experience within a Web browser. Application software developers also must consider a long array of screen sizes, hardware specifications, and configurations because of intense competition in mobile software and changes within each of the platforms. Mobile app development has been steadily growing, in revenues and jobs created. A 2013 analyst report estimates there are 529,000 direct app economy jobs within the EU 28 members, 60% of which are mobile app developers.[1]

      As part of the development process, mobile user interface (UI) design is also essential in the creation of mobile apps. Mobile UI considers constraints, contexts, screen, input, and mobility as outlines for design. The user is often the focus of interaction with their device, and the interface entails components of both hardware and software. User input allows for the users to manipulate a system, and device's output allows the system to indicate the effects of the users' manipulation. Mobile UI design constraints include limited attention and form factors, such as a mobile device's screen size for a user's hand(s). Mobile UI contexts signal cues from user activity, such as location and scheduling that can be shown from user interactions within a mobile app. Overall, mobile UI design's goal is mainly for an understandable, user-friendly interface. The UI of mobile apps should: consider users' limited attention, minimize keystrokes, and be task-oriented with a minimum set of functions. This functionality is supported by mobile enterprise application platforms or integrated development environments (IDEs).
      
      `, "teacode", "https://cdn.dribbble.com/users/358786/screenshots/1339220/logodrible.png"),
    ];
  }

}
