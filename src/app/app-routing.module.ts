import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { PinsComponent } from './pins/pins.component';

const routes: Routes = [
  {path:'',component:CustomerComponent},
  {path:'pin',component:PinsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
