import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeDBPageComponent } from './pages/employee-db-page/employee-db-page.component';
import { StoreComponent } from './pages/store/store.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'store', component: StoreComponent}, 
  {path: 'employee-details', component: EmployeeDBPageComponent}, 
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
