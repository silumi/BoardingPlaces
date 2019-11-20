import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardingComponent } from './boarding/boarding.component';
import { FoodsComponent } from './Food/foods/foods.component';
import { BoardingStartComponent } from './boarding/boarding-start/boarding-start.component';
import { BoardingDetailsComponent } from './boarding/boarding-details/boarding-details.component';
import { BoardingEditComponent } from './boarding/boarding-edit/boarding-edit.component';
import { NewBoardingComponent } from './boarding/new-boarding/new-boarding.component';


const routes: Routes = [
  {path: '', redirectTo: '/boardings', pathMatch: 'full'},
  {path: 'boardings', component: BoardingComponent , children: [
    {path: '', component: BoardingStartComponent},
    {path: 'new', component: NewBoardingComponent},
    {path: ':id', component: BoardingDetailsComponent},
    {path: ':id/edit', component: NewBoardingComponent}// order important
  ] },
  {path: 'foods', component: FoodsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
