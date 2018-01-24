import { Component, OnInit, Input } from '@angular/core';
import { stagger } from '@angular/animations/src/animation_metadata';


export class AssetShortStage {
  assetIcon: String;
  assetName: String;
  status: String;
  lastActivity: String;
  lastLocationUpdate: String;
  lastSeenAlive: String;
  alerts: String;

  constructor(assetIcon, assetName, status, lastActivity, lastLocationUpdate, lastSeenAlive, alerts){
    this.alerts = alerts;
    this.status = status;
    this.assetIcon = assetIcon;
    this.assetName = assetName;
    this.lastActivity = lastActivity;
    this.lastLocationUpdate = lastLocationUpdate;
    this.lastSeenAlive = lastSeenAlive;
  }
}


@Component({
  selector: 'app-asset-short-stage',
  templateUrl: './asset-short-stage.component.html',
  styleUrls: ['./asset-short-stage.component.css']
})
export class AssetShortStageComponent implements OnInit {
  @Input('assetShortStage') assetShortStage: AssetShortStage;

  constructor() { }

  ngOnInit() {
  }

}
