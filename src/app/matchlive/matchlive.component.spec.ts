import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchliveComponent } from './matchlive.component';

describe('MatchliveComponent', () => {
  let component: MatchliveComponent;
  let fixture: ComponentFixture<MatchliveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchliveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
