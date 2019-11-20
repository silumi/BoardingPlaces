import { Boarding } from './boarding.model';
import { EventEmitter } from '@angular/core';

export class BoardingService {
    boardingChanged = new EventEmitter<Boarding[]>();
    public boardingSelected = new EventEmitter <Boarding> ();

    private boardings: Boarding[] = [
        new Boarding ('Rs.5000', '0714774883', 'Ratnapura', '8km', 'Comfortable bed room with attach bath rooms',
        'https://suitcasemag.com/wp-content/uploads/2017/08/best-hostels.jpg', '20,000', 'Silumi'),
        new Boarding ('Rs.5000', '0714774883', 'Ratnapura', '8km', 'Comfortable bed room with attach bath rooms',
        'https://metiza.com/wp-content/uploads/2019/01/img60561-Reykjavik-City-Hostel-Iceland-.jpg', '20,000', 'Silumi')
    ];

    getBoardings() {
        return this.boardings.slice();
    }
    addBoarding(boarding: Boarding) {
        this.boardings.push(boarding);
        this.boardingChanged.emit(this.boardings.slice());
      }
    addBoardings(boardings: Boarding[]) {
        this.boardings.push(...boardings);
        this.boardingChanged.emit(this.boardings.slice());
      }
}
