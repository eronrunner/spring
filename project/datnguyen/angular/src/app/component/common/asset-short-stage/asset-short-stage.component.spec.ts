import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetShortStageComponent } from './asset-short-stage.component';

describe('AssetShortStageComponent', () => {
  let component: AssetShortStageComponent;
  let fixture: ComponentFixture<AssetShortStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetShortStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetShortStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
