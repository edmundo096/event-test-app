import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { EventTableComponent } from './event-table/event-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // Angular Material.
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
