import { Boarding } from './boarding.model';
import { Subject } from 'rxjs';

export class BoardingService {
   boardingChanged = new Subject<Boarding[]>();
    // public boardingSelected = new EventEmitter <Boarding> ();

    private boardings: Boarding[] = [
        new Boarding ('Rs.5000', '0714774883', 'Ratnapura', '8km', 'Comfortable bed room with attach bath rooms',
        'https://suitcasemag.com/wp-content/uploads/2017/08/best-hostels.jpg', '20,000', 'Silumi'),
        new Boarding ('Rs.5000', '0714774883', 'Ratnapura', '8km', 'Comfortable bed room with attach bath rooms',
        'https://metiza.com/wp-content/uploads/2019/01/img60561-Reykjavik-City-Hostel-Iceland-.jpg', '20,000', 'Silumi')
    ];

    getBoardings() {
        return this.boardings.slice();
    }
    getBoarding(index: number) { // routing
        return this.boardings[index];
    }
    addBoarding(boarding: Boarding) {
        this.boardings.push(boarding);
        this.boardingChanged.next(this.boardings.slice());
      }
    updateBoarding(index: number, newBoarding: Boarding){
        this.boardings[index] = newBoarding;
        this.boardingChanged.next(this.boardings.slice());
    }
    addBoardings(boardings: Boarding[]) {
        this.boardings.push(...boardings);
        this.boardingChanged.next(this.boardings.slice());
      }
    deleteBoarding(index: number){
        this.boardings.splice(index, 1);
        this.boardingChanged.next(this.boardings.slice());

    }
}
