import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetAlertComponent } from './asset-alert.component';

describe('AssetAlertComponent', () => {
  let component: AssetAlertComponent;
  let fixture: ComponentFixture<AssetAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
