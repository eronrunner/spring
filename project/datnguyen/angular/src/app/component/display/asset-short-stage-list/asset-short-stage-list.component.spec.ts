import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetShortStageListComponent } from './asset-short-stage-list.component';

describe('AssetShortStageListComponent', () => {
  let component: AssetShortStageListComponent;
  let fixture: ComponentFixture<AssetShortStageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetShortStageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetShortStageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
