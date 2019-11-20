import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-new-boarding',
  templateUrl: './new-boarding.component.html',
  styleUrls: ['./new-boarding.component.css']
})
export class NewBoardingComponent implements OnInit {
id: number;
editMode = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
       // tslint:disable-next-line: no-string-literal
       this.id = +params['id'];
       // tslint:disable-next-line: no-string-literal
       this.editMode = params['id'] != null; // to check which mode we are
       console.log(this.editMode);
      }
    );
  }

}
