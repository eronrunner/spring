import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemDevelopmentComponent } from './system-development.component';

describe('SystemDevelopmentComponent', () => {
  let component: SystemDevelopmentComponent;
  let fixture: ComponentFixture<SystemDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
