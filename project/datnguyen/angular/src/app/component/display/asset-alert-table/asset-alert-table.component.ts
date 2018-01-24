import { Component, OnInit, Input } from '@angular/core';
import { AssetAlert } from '../../common/asset-alert/asset-alert.component';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-asset-alert-table',
  templateUrl: './asset-alert-table.component.html',
  styleUrls: ['./asset-alert-table.component.css']
})
export class AssetAlertTableComponent implements OnInit {
  @Input() assetAlerts: AssetAlert[];
  @Input() displayedColumns: String[];
  @Input() dataSource: MatTableDataSource<AssetAlert>;
  constructor() { }

  ngOnInit() {
    if(this.assetAlerts){
      this.dataSource =  new MatTableDataSource(this.assetAlerts);
    }
  }

}
