import { Component, OnInit } from '@angular/core';
import {Boarding} from '../boarding.model';

@Component({
  selector: 'app-boarding-list',
  templateUrl: './boarding-list.component.html',
  styleUrls: ['./boarding-list.component.css']
})
export class BoardingListComponent implements OnInit {
boardings: Boarding [] = [
 new Boarding ('Rs.5000', '0714774883', 'Homagama', '8km', 'Comfortable bed room with attach bath rooms',
 'https://suitcasemag.com/wp-content/uploads/2017/08/best-hostels.jpg', '20,000', 'kaveesh'),
 new Boarding ('Rs.5000', '0714774883', 'Homagama', '8km', 'Comfortable bed room with attach bath rooms',
 'https://suitcasemag.com/wp-content/uploads/2017/08/best-hostels.jpg', '20,000', 'kaveesh')
];
  constructor() { }

  ngOnInit() {
  }

}
