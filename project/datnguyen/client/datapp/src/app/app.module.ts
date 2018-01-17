import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {ApplicationMaterialModule} from './module/application-material/application-material.module'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MainContentComponent } from './component/main-content/main-content.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { StripesComponent } from './component/present/stripes/stripes.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { AboutUsComponent } from './component/page/about-us/about-us.component';
import { ProductionComponent } from './component/page/production/production.component';
import { MembersComponent } from './component/page/members/members.component';
import { RightOutBarComponent } from './component/right-out-bar/right-out-bar.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { MemberRegistrationComponent } from './component/form/member-registration/member-registration.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "about-us", component: AboutUsComponent},
  {path: "members", component: MembersComponent},
  {path: "production", component: ProductionComponent},
  {path: "register/form", component: MemberRegistrationComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
    HomeComponent,
    StripesComponent,
    GalleryComponent,
    AboutUsComponent,
    ProductionComponent,
    MembersComponent,
    RightOutBarComponent,
    MemberRegistrationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    ApplicationMaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
