import { Component, OnInit } from '@angular/core';
import { MatToolbar, MatButton, MatInput, MatIcon, MatCardImage, MatCardSmImage
,MatChip, MatButtonBase, MatInputBase, MatCard, MatCardTitle, MatCardContent,
MatCardSubtitle, MatCardAvatar, MatCardMdImage, MatTable, MatTableDataSource,
MatHeaderCell, MatCell, MatHeaderRow, MatRadioGroup, MatRowDef, MatHeaderRowDef,
MatHeaderCellDef, MatCellDef, MatColumnDef,
} from '@angular/material';
import { AssetShortStage } from '../../common/asset-short-stage/asset-short-stage.component';
@Component({
  selector: 'app-asset-map',
  templateUrl: './asset-map.component.html',
  styleUrls: ['./asset-map.component.css']
})
export class AssetMapComponent implements OnInit {
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  displayedColumns = ['title', 'value'];
  assets = assets;
  defaultSize = 5;

  constructor() { }

  ngOnInit() {
  }

}

export interface Element {
  title: String;
  value: String;
}

const ELEMENT_DATA: Element[] = [
  {title: "Status:", value: "Offline"},
  {title: "Last activity:", value: "2 years ago"},
  {title: "Last location update:", value: "2 years ago"},
  {title: "Last seen alive:", value: "2 years ago"},
  {title: "Alert", value: "2"},
];

const assets: AssetShortStage[] = [
  new AssetShortStage("https://github.com/eronrunner/example/blob/master/icono-teas.png?raw=true",
  "Name", "Offline", "2 years ago", "2 years ago", "2 years ago", "2"
  ),
  new AssetShortStage("https://github.com/eronrunner/example/blob/master/icono-teas.png?raw=true",
  "Name", "Offline", "2 years ago", "2 years ago", "2 years ago", "2"
  ),
  new AssetShortStage("https://github.com/eronrunner/example/blob/master/icono-teas.png?raw=true",
  "Name", "Offline", "2 years ago", "2 years ago", "2 years ago", "2"
  ),
  new AssetShortStage("https://github.com/eronrunner/example/blob/master/icono-teas.png?raw=true",
  "Name", "Offline", "2 years ago", "2 years ago", "2 years ago", "2"
  ),
  new AssetShortStage("https://github.com/eronrunner/example/blob/master/icono-teas.png?raw=true",
  "Name", "Offline", "2 years ago", "2 years ago", "2 years ago", "2"
  ),
];