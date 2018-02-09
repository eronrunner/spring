import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareTripsComponent } from './share-trips.component';

describe('ShareTripsComponent', () => {
  let component: ShareTripsComponent;
  let fixture: ComponentFixture<ShareTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
