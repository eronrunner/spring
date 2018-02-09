import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-suggestion-select',
  templateUrl: './search-suggestion-select.component.html',
  styleUrls: ['./search-suggestion-select.component.css']
})


export class SearchSuggestionSelectComponent implements OnInit {
  @Input() options: String[];

  constructor() { }

  ngOnInit() {
    this.options = [
      "System account",
      "1 account partner",
      "2 account partner"
    ];
  }

}
