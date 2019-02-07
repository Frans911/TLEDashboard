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
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { SignInComponent } from './sign-in/sign-in.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DataDialogComponent } from './data-dialog/data-dialog.component'; 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnalysisComponent,
    DataComponent,
    OptionsComponent,
    SignInComponent,
    SignUpComponent,
    DataDialogComponent, 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes), 
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule, 
    ChartsModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[DataDialogComponent]
})
export class AppModule { }
