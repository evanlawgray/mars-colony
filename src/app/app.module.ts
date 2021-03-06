import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { Ng2PageTransitionModule } from "ng2-page-transition"; // <-- import the module

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { EncountersComponent } from './encounters/encounters.component';
import { ReportComponent } from './report/report.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { JournalComponent } from './journal/journal.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent}, 
  { path: 'encounters', component: EncountersComponent},
  { path: 'report', component: ReportComponent},
  { path: 'notfound', component: NotfoundComponent},
  { path: 'journal', component: JournalComponent},
  { path: '**', redirectTo: 'notfound' }]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    EncountersComponent,
    ReportComponent,
    NotfoundComponent,
    JournalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    Ng2PageTransitionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
