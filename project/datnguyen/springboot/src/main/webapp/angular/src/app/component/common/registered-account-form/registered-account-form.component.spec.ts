import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredAccountFormComponent } from './registered-account-form.component';

describe('RegisteredAccountFormComponent', () => {
  let component: RegisteredAccountFormComponent;
  let fixture: ComponentFixture<RegisteredAccountFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredAccountFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredAccountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
