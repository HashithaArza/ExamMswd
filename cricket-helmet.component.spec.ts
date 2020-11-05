import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketHelmetComponent } from './cricket-helmet.component';

describe('CricketHelmetComponent', () => {
  let component: CricketHelmetComponent;
  let fixture: ComponentFixture<CricketHelmetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricketHelmetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CricketHelmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
