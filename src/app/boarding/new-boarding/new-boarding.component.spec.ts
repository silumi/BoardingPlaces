import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBoardingComponent } from './new-boarding.component';

describe('NewBoardingComponent', () => {
  let component: NewBoardingComponent;
  let fixture: ComponentFixture<NewBoardingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBoardingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBoardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
