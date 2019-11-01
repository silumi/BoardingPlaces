import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardingEditComponent } from './boarding-edit.component';

describe('BoardingEditComponent', () => {
  let component: BoardingEditComponent;
  let fixture: ComponentFixture<BoardingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
