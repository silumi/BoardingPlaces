import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BoardingService } from '../Boarding.service';

@Component({
  selector: 'app-new-boarding',
  templateUrl: './new-boarding.component.html',
  styleUrls: ['./new-boarding.component.css']
})
export class NewBoardingComponent implements OnInit {
id: number;
editMode = false;
boardingForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private boardingService: BoardingService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
       // tslint:disable-next-line: no-string-literal
       this.id = +params['id'];
       // tslint:disable-next-line: no-string-literal
       this.editMode = params['id'] != null; // to check which mode we are
       // console.log(this.editMode);
       this.initForm();
      }
    );
  }
  private initForm() {
    let boardingPrice = '';
    let boardingPhone ='';
    let boardingAddress = '';
    let boardingDistance ='';
    let boardingDescription ='';
    let boardingImagePath = '';
    let boardingKey ='';
    let boardingOwner = '';

    if (this.editMode) {
      const boarding = this.boardingService.getBoarding(this.id);
      boardingPrice = boarding.price;
      boardingPhone = boarding.mobile;
      boardingAddress = boarding.address;
      boardingDistance = boarding.distance;
      boardingDescription = boarding.description;
      boardingImagePath = boarding.imagePath;
      boardingKey = boarding.keyMoney;
      boardingOwner = boarding.owner;
    }
    this.boardingForm = new FormGroup({
      'price' : new FormControl(boardingPrice, Validators.required),
      'mobile': new FormControl(boardingPhone,  Validators.required),
      'address': new FormControl(boardingAddress,  Validators.required),
      'distance': new FormControl(boardingDistance,  Validators.required),
      'description': new FormControl(boardingDescription,  Validators.required),
      'imagePath': new FormControl(boardingImagePath,  Validators.required),
      'keyMoney': new FormControl(boardingKey,  Validators.required),
      'owner': new FormControl(boardingOwner,  Validators.required)


    });
  }
onSubmit() {
  if (this.editMode) {
    this.boardingService.updateBoarding(this.id, this.boardingForm.value);
  } else {
    this.boardingService.addBoarding(this.boardingForm.value);
  }
  this.onClear();
}
onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
}
onClear() {
  this.boardingForm.reset();
  this.editMode = false; }

}
