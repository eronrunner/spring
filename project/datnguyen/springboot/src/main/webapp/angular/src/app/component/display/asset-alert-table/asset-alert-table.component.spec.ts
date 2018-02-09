import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetAlertTableComponent } from './asset-alert-table.component';

describe('AssetAlertTableComponent', () => {
  let component: AssetAlertTableComponent;
  let fixture: ComponentFixture<AssetAlertTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetAlertTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetAlertTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
