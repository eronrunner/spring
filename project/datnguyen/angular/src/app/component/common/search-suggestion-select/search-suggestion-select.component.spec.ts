import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSuggestionSelectComponent } from './search-suggestion-select.component';

describe('SearchSuggestionSelectComponent', () => {
  let component: SearchSuggestionSelectComponent;
  let fixture: ComponentFixture<SearchSuggestionSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSuggestionSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSuggestionSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
