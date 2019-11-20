import { Component, OnInit, Input } from '@angular/core';
import { Boarding } from '../../boarding.model';
import { BoardingService } from '../../Boarding.service';


@Component({
  selector: 'app-boarding-items',
  templateUrl: './boarding-items.component.html',
  styleUrls: ['./boarding-items.component.css']
})
export class BoardingItemsComponent implements OnInit {
@Input() boarding: Boarding;
// @Output() boardingSelected = new EventEmitter<void>();

  constructor(private boardingservice: BoardingService) { }

  ngOnInit() {
  }
onSelected() {
this.boardingservice.boardingSelected.emit(this.boarding);
}
}
