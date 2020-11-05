import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatmentonRacketComponent } from './batmenton-racket.component';

describe('BatmentonRacketComponent', () => {
  let component: BatmentonRacketComponent;
  let fixture: ComponentFixture<BatmentonRacketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatmentonRacketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatmentonRacketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
