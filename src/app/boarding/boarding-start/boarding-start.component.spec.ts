import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardingStartComponent } from './boarding-start.component';

describe('BoardingStartComponent', () => {
  let component: BoardingStartComponent;
  let fixture: ComponentFixture<BoardingStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardingStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardingStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
