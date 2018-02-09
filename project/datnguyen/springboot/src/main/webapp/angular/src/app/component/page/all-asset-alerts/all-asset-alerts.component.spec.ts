import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAssetAlertsComponent } from './all-asset-alerts.component';

describe('AllAssetAlertsComponent', () => {
  let component: AllAssetAlertsComponent;
  let fixture: ComponentFixture<AllAssetAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAssetAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAssetAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
