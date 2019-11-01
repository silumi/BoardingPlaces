import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardingDetailsComponent } from './boarding-details.component';

describe('BoardingDetailsComponent', () => {
  let component: BoardingDetailsComponent;
  let fixture: ComponentFixture<BoardingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
