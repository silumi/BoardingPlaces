import { Component, OnInit } from '@angular/core';
import { BoardingService } from './Boarding.service';

@Component({
  selector: 'app-boarding',
  templateUrl: './boarding.component.html',
  styleUrls: ['./boarding.component.css'],
  providers: [BoardingService]
})
export class BoardingComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
