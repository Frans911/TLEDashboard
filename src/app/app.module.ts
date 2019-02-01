import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { routes } from 'src/app-routes.module';
import { RouterModule } from '@angular/router' ;
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { AnalysisComponent } from './analysis/analysis.component';
import { DataComponent } from './data/data.component';
import { OptionsComponent } from './options/options.component'; 
import { ChartsModule } from 'ng2-charts';
import {MatTableModule} from '@angular/material/table';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnalysisComponent,
    DataComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes), 
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule, 
    ChartsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
