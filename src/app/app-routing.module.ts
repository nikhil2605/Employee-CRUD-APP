import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  // { path: '', redirectTo: 'view-employee', pathMatch: 'full' },  
  // { path: 'view-employee', component: EmployeeListComponent },  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
