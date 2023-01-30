import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StoreComponent } from './pages/store/store.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { EmployeeDBTableComponent } from './components/employee-db-table/employee-db-table.component';
import { EmployeeDBDataEntryComponent } from './components/employee-db-data-entry/employee-db-data-entry.component';
import { EmployeeDBPageComponent } from './pages/employee-db-page/employee-db-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StoreComponent,
    LoginComponent,
    MainComponent,
    EmployeeDBTableComponent,
    EmployeeDBDataEntryComponent,
    EmployeeDBPageComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
