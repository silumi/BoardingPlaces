import { Component, OnInit, Input } from '@angular/core';
import { Boarding } from '../boarding.model';

@Component({
  selector: 'app-boarding-details',
  templateUrl: './boarding-details.component.html',
  styleUrls: ['./boarding-details.component.css']
})
export class BoardingDetailsComponent implements OnInit {
@Input() boarding: Boarding;
  constructor() { }

  ngOnInit() {
  }

}
