import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { employeeRouter } from '../employee/employee.routing';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent, children: employeeRouter
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
