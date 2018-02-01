import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { AssetAlert } from '../../common/asset-alert/asset-alert.component';

@Component({
  selector: 'app-all-asset-alerts',
  templateUrl: './all-asset-alerts.component.html',
  styleUrls: ['./all-asset-alerts.component.css']
})
export class AllAssetAlertsComponent implements OnInit {
  // @Input() tabLinks: TabLink[];
  displayedColumns = ['asset', 'alertType', 'alertName', 'raisedAt', 'detected', 'clear', 'callbacks'];
  
  ELEMENT_DATA: AssetAlert[] = [
    {asset: 1, alertType: 'Hydrogen', alertName: 1.0079, raisedAt: 'H', detected: 1.0079, clear: 1.0079, callbacks: 1.0079},
    {asset: 2, alertType: 'Helium', alertName: 4.0026, raisedAt: 'He', detected: 1.0079, clear: 1.0079, callbacks: 1.0079},
    {asset: 3, alertType: 'Lithium', alertName: 6.941, raisedAt: 'Li', detected: 1.0079, clear: 1.0079, callbacks: 1.0079},
    {asset: 4, alertType: 'Beryllium', alertName: 9.0122, raisedAt: 'Be', detected: 1.0079, clear: 1.0079, callbacks: 1.0079},
    {asset: 5, alertType: 'Boron', alertName: 10.811, raisedAt: 'B', detected: 1.0079, clear: 1.0079, callbacks: 1.0079},
    {asset: 6, alertType: 'Carbon', alertName: 12.0107, raisedAt: 'C', detected: 1.0079, clear: 1.0079, callbacks: 1.0079},
    {asset: 7, alertType: 'Nitrogen', alertName: 14.0067, raisedAt: 'N', detected: 1.0079, clear: 1.0079, callbacks: 1.0079},
    {asset: 8, alertType: 'Oxygen', alertName: 15.9994, raisedAt: 'O', detected: 1.0079, clear: 1.0079, callbacks: 1.0079},
    {asset: 9, alertType: 'Fluorine', alertName: 18.9984, raisedAt: 'F', detected: 1.0079, clear: 1.0079, callbacks: 1.0079},
    {asset: 10, alertType: 'Neon', alertName: 20.1797, raisedAt: 'Ne', detected: 1.0079, clear: 1.0079, callbacks: 1.0079},
  ];
  constructor() {}

  ngOnInit() {
    // this.tabLinks = [
    //   new TabLink("Activate alerts", "./active-alert-table", "0"),
    //   new TabLink("Historical alerts", "./historical-alert-table", "1")
    // ];
  }

}

export interface Element {
  alertType: string;
  asset: number;
  alertName: number;
  raisedAt: string;
  detected: number;
  clear: number;
  callbacks: number;
}
