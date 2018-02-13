import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredAccountComponent } from './registered-account.component';

describe('RegisteredAccountComponent', () => {
  let component: RegisteredAccountComponent;
  let fixture: ComponentFixture<RegisteredAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
