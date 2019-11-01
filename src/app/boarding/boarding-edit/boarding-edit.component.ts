import { Component, OnInit } from '@angular/core';
import { Boarding } from '../boarding.model';
@Component({
  selector: 'app-boarding-edit',
  templateUrl: './boarding-edit.component.html',
  styleUrls: ['./boarding-edit.component.css']
})
export class BoardingEditComponent implements OnInit {
  boardings: Boarding [] = [
    new Boarding ('Rs.5000', '0714774883', 'Homagama', '8km', 'Comfortable bed room with attach bath rooms',
    'https://suitcasemag.com/wp-content/uploads/2017/08/best-hostels.jpg', '20,000', 'kaveesh')];
  constructor() { }

  ngOnInit() {
  }

}
