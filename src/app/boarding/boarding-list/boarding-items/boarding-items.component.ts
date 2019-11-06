import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Boarding } from '../../boarding.model';


@Component({
  selector: 'app-boarding-items',
  templateUrl: './boarding-items.component.html',
  styleUrls: ['./boarding-items.component.css']
})
export class BoardingItemsComponent implements OnInit {
@Input() boarding: Boarding;
// @Output() boardingSelected = new EventEmitter<void>();
@Output() boardingSelected = new EventEmitter <void>();

  constructor() { }

  ngOnInit() {
  }
onSelected() {
this.boardingSelected.emit();
}
}
