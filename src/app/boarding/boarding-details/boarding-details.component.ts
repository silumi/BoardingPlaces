import { Component, OnInit } from '@angular/core';
import { Boarding } from '../boarding.model';
import { BoardingService } from '../Boarding.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-boarding-details',
  templateUrl: './boarding-details.component.html',
  styleUrls: ['./boarding-details.component.css']
})
export class BoardingDetailsComponent implements OnInit {
boarding: Boarding;
id: number;
  constructor(private boardingService: BoardingService,
              private route: ActivatedRoute,
              private router: Router ) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        // tslint:disable-next-line: no-string-literal
        this.id = +params ['id'];
        this.boarding = this.boardingService.getBoarding(this.id);
      }
    );
  }
  onEditBoarding() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
