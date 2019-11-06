import { Component, OnInit } from '@angular/core';
import { Boarding } from './boarding.model';

@Component({
  selector: 'app-boarding',
  templateUrl: './boarding.component.html',
  styleUrls: ['./boarding.component.css']
})
export class BoardingComponent implements OnInit {
selectedBoarding: Boarding;
  constructor() { }

  ngOnInit() {
  }

}
