import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Boarding} from '../boarding.model';
import { BoardingService } from '../Boarding.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-boarding-list',
  templateUrl: './boarding-list.component.html',
  styleUrls: ['./boarding-list.component.css']
})
export class BoardingListComponent implements OnInit {
 // @Output() featureSelected = new EventEmitter<string>();
boardings: Boarding[];
  constructor(private boardingService: BoardingService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.boardings = this.boardingService.getBoardings();
  }
  onNewBoarding() {
   this.router.navigate(['new'], {relativeTo: this.route});
  }
  // onSelect(feature: string) {
  //  this.featureSelected.emit(feature);
  // }

}
