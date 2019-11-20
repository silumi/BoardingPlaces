import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Boarding } from '../boarding.model';
import { BoardingService } from '../Boarding.service';

@Component({
  selector: 'app-boarding-edit',
  templateUrl: './boarding-edit.component.html',
  styleUrls: ['./boarding-edit.component.css']
})
export class BoardingEditComponent implements OnInit {
  @ViewChild('price', {static: false}) priceInputRef: ElementRef;
  @ViewChild('phone', {static: false}) phoneInputRef: ElementRef;
  @ViewChild('address', {static: false}) addressInputRef: ElementRef;
  @ViewChild('distance', {static: false}) distanceInputRef: ElementRef;
  @ViewChild('desc', {static: false}) descInputRef: ElementRef;
  @ViewChild('keyMoney', {static: false}) keyMoneyInputRef: ElementRef;
  @ViewChild('owner', {static: false}) ownerInputRef: ElementRef;
  @ViewChild('image', {static: false}) imageInputRef: ElementRef;

constructor(private boardingService: BoardingService) { }

  ngOnInit() {
  }
  onAddItem() {
    const price = this.priceInputRef.nativeElement.value;
    const phone = this.phoneInputRef.nativeElement.value;
    const address = this.addressInputRef.nativeElement.value;
    const distance = this.distanceInputRef.nativeElement.value;
    const description = this.descInputRef.nativeElement.value;
    const keyMoney = this.keyMoneyInputRef.nativeElement.value;
    const owner = this.ownerInputRef.nativeElement.value;
    const image = this.imageInputRef.nativeElement.value;
    const newBoarding = new Boarding(price, phone, address, distance, description, keyMoney, owner, image);
    this.boardingService.addBoarding(newBoarding);
  }
}
