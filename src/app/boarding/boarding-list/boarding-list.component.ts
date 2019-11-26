import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import {Boarding} from '../boarding.model';
import { BoardingService } from '../Boarding.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-boarding-list',
  templateUrl: './boarding-list.component.html',
  styleUrls: ['./boarding-list.component.css']
})
export class BoardingListComponent implements OnInit, OnDestroy {
 // @Output() featureSelected = new EventEmitter<string>();
boardings: Boarding[];
private subscription: Subscription;
  constructor(private boardingService: BoardingService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.boardings = this.boardingService.getBoardings();
    this.boardings = this.boardingService.getBoardings();
    this.boardingService.boardingChanged
    .subscribe(
      (boardings: Boarding[]) => {
        this.boardings = boardings;
      }
    );

  }
  onNewBoarding() {
   this.router.navigate(['new'], {relativeTo: this.route});
  }
  // onSelect(feature: string) {
  //  this.featureSelected.emit(feature);
  // }
ngOnDestroy() {
this.subscription.unsubscribe();
}
}
