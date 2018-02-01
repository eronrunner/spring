import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLinkTabComponent } from './nav-link-tab.component';

describe('NavLinkTabComponent', () => {
  let component: NavLinkTabComponent;
  let fixture: ComponentFixture<NavLinkTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavLinkTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLinkTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
