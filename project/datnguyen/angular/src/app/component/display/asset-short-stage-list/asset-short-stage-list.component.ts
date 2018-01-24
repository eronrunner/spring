import { Component, OnInit, Input } from '@angular/core';
import { AssetShortStage } from '../../common/asset-short-stage/asset-short-stage.component';

@Component({
  selector: 'app-asset-short-stage-list',
  templateUrl: './asset-short-stage-list.component.html',
  styleUrls: ['./asset-short-stage-list.component.css']
})
export class AssetShortStageListComponent implements OnInit {
  @Input() stages: AssetShortStage[];

  constructor() { }

  ngOnInit() {
  }

}
