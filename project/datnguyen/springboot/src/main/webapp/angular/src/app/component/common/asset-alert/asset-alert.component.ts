import { Component, OnInit, Input } from '@angular/core';


export class AssetAlert {
  alertType: string;
  asset: number;
  alertName: number;
  raisedAt: string;
  detected: number;
  clear: number;
  callbacks: number;
  constructor(alertType, asset, alertName, raisedAt, detected, clear, callbacks){
    this.alertType = alertType;
    this.asset = asset;
    this.alertName = alertName;
    this.raisedAt = raisedAt;
    this.detected = detected;
    this.clear = clear;
    this.callbacks = callbacks;
  }
}

@Component({
  selector: 'app-asset-alert',
  templateUrl: './asset-alert.component.html',
  styleUrls: ['./asset-alert.component.css']
})
export class AssetAlertComponent implements OnInit {
  @Input() assetAlert: AssetAlert;
  
  constructor() { }

  ngOnInit() {
  }

}
