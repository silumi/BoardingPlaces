import { Component, OnInit, Input } from '@angular/core';
import { Boarding } from '../../boarding.model';



@Component({
  selector: 'app-boarding-items',
  templateUrl: './boarding-items.component.html',
  styleUrls: ['./boarding-items.component.css']
})
export class BoardingItemsComponent implements OnInit {
@Input() boarding: Boarding;
@Input() index: number;
// @Output() boardingSelected = new EventEmitter<void>();
  ngOnInit() {
  }

}
