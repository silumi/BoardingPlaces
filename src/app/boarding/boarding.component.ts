import { Component, OnInit } from '@angular/core';
import { Boarding } from './boarding.model';
import { BoardingService } from './Boarding.service';

@Component({
  selector: 'app-boarding',
  templateUrl: './boarding.component.html',
  styleUrls: ['./boarding.component.css'],
  providers: [BoardingService]
})
export class BoardingComponent implements OnInit {
selectedBoarding: Boarding;
  constructor(private boardingservice: BoardingService ) { }

  ngOnInit() {
    this.boardingservice.boardingSelected
      .subscribe(
        (boarding: Boarding) => {
          this.selectedBoarding = boarding;
        }
      );
  }

}
