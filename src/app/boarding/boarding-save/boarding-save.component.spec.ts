import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardingSaveComponent } from './boarding-save.component';

describe('BoardingSaveComponent', () => {
  let component: BoardingSaveComponent;
  let fixture: ComponentFixture<BoardingSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardingSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardingSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
