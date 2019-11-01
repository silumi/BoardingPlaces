import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardingDetailsComponent } from './boarding/boarding-details/boarding-details.component';
import { BoardingComponent } from './boarding/boarding.component';
import { BoardingEditComponent } from './boarding/boarding-edit/boarding-edit.component';
import { BoardingListComponent } from './boarding/boarding-list/boarding-list.component';
import { BoardingItemsComponent } from './boarding/boarding-list/boarding-items/boarding-items.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardingDetailsComponent,
    BoardingComponent,
    BoardingEditComponent,
    BoardingListComponent,
    BoardingItemsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
