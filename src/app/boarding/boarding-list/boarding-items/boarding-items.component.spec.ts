import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardingItemsComponent } from './boarding-items.component';

describe('BoardingItemsComponent', () => {
  let component: BoardingItemsComponent;
  let fixture: ComponentFixture<BoardingItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardingItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardingItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
