import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightOutBarComponent } from './right-out-bar.component';

describe('RightOutBarComponent', () => {
  let component: RightOutBarComponent;
  let fixture: ComponentFixture<RightOutBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightOutBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightOutBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
