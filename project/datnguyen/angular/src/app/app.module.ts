import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './module/material/material.module'
import { AppComponent } from './app.component';
import 'hammerjs';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MainContentComponent } from './component/main-content/main-content.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { AssetMapComponent } from './component/page/asset-map/asset-map.component';
import { AssetStatusComponent } from './component/page/asset-status/asset-status.component';
import { AllAssetAlertsComponent } from './component/page/all-asset-alerts/all-asset-alerts.component';
import { ReportsComponent } from './component/page/reports/reports.component';
import { ShareTripsComponent } from './component/page/share-trips/share-trips.component';
import { AdminComponent } from './component/page/admin/admin.component';
import { SystemDevelopmentComponent } from './component/page/system-development/system-development.component';
import { TitleBarComponent } from './component/common/title-bar/title-bar.component';
import { TagBarComponent } from './component/common/tag-bar/tag-bar.component';
import { AssetShortStageComponent } from './component/common/asset-short-stage/asset-short-stage.component';
import { AssetShortStageListComponent } from './component/display/asset-short-stage-list/asset-short-stage-list.component';
import { SearchSuggestionSelectComponent } from './component/common/search-suggestion-select/search-suggestion-select.component';
import { NavLinkTabComponent } from './component/common/nav-link-tab/nav-link-tab.component';
import { RouterModule } from '@angular/router';
import { AssetAlertComponent } from './component/common/asset-alert/asset-alert.component';
import { AssetAlertTableComponent } from './component/display/asset-alert-table/asset-alert-table.component';
import { LoginComponent } from './component/page/login/login.component';
import { LoginFormComponent } from './component/common/login-form/login-form.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import 'rxjs/Rx';
import { HomeComponent } from './component/page/home/home.component';
import { Routes } from '@angular/router/src/config';
import { assertNotNull } from '@angular/compiler/src/output/output_ast';
import { ObservationMapComponent } from './component/common/observation-map/observation-map.component';

const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch:'full'},
  {path: 'login', component: LoginComponent, data: {animation: 'login'}},
  {path: 'home', component: HomeComponent, children: [
    {path: 'asset-map', component: AssetStatusComponent, data: {animation: 'all-asset-alerts'}},
    {path: 'all-asset-alerts', component: AllAssetAlertsComponent, data: {animation: 'asset-map'}},
    {path: 'asset-status', component: AssetMapComponent, data: {animation: 'asset-status'}},
    {path: 'reports', component: ReportsComponent, data: {animation: 'reports'}},
    {path: 'share-trips', component: ShareTripsComponent, data: {animation: 'share-trips'}},
    {path: 'admin', component: AdminComponent, data: {animation: 'admin'}},
    {path: 'system-developer', component: SystemDevelopmentComponent, data: {animation: 'system-devlopment'}}
  ], data: {animation: 'home'}},
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    SideBarComponent,
    AssetMapComponent,
    AssetStatusComponent,
    AllAssetAlertsComponent,
    ReportsComponent,
    ShareTripsComponent,
    AdminComponent,
    SystemDevelopmentComponent,
    TitleBarComponent,
    TagBarComponent,
    AssetShortStageComponent,
    AssetShortStageListComponent,
    SearchSuggestionSelectComponent,
    NavLinkTabComponent,
    AssetAlertComponent,
    AssetAlertTableComponent,
    LoginComponent,
    LoginFormComponent,
    HomeComponent,
    ObservationMapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes, {useHash: true}),
    ReactiveFormsModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

