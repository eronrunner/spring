import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetMapComponent } from './asset-map.component';

describe('AssetMapComponent', () => {
  let component: AssetMapComponent;
  let fixture: ComponentFixture<AssetMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
