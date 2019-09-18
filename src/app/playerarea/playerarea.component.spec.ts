import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerareaComponent } from './playerarea.component';

describe('PlayerareaComponent', () => {
  let component: PlayerareaComponent;
  let fixture: ComponentFixture<PlayerareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
