import { Component, OnInit } from '@angular/core';
import { Boarding } from '../boarding.model';
import { BoardingService } from '../Boarding.service';

@Component({
  selector: 'app-boarding-save',
  templateUrl: './boarding-save.component.html',
  styleUrls: ['./boarding-save.component.css']
})
export class BoardingSaveComponent implements OnInit {
  public boardings: Boarding[] = [];
  constructor(private boardingService: BoardingService) { }

  ngOnInit() {
    this.boardings = this.boardingService.getBoardings();
    this.boardingService.boardingChanged
      .subscribe(
        (boardings: Boarding[]) => {
          this.boardings = boardings;
        }
      );
  }

}

