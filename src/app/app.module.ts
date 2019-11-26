import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardingDetailsComponent } from './boarding/boarding-details/boarding-details.component';
import { BoardingComponent } from './boarding/boarding.component';
import { BoardingListComponent } from './boarding/boarding-list/boarding-list.component';
import { BoardingItemsComponent } from './boarding/boarding-list/boarding-items/boarding-items.component';
import { HeaderComponent } from './header/header.component';
import { FoodsComponent } from './Food/foods/foods.component';
import { NewBoardingComponent } from './boarding/new-boarding/new-boarding.component';
import { DropdownDirective } from './dropdown.directive';
import { BoardingService } from './boarding/Boarding.service';
import { BoardingStartComponent } from './boarding/boarding-start/boarding-start.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardingDetailsComponent,
    BoardingComponent,
    BoardingListComponent,
    BoardingItemsComponent,
    HeaderComponent,
    FoodsComponent,
    NewBoardingComponent,
    DropdownDirective,
    BoardingStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [BoardingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
