import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'hammerjs';
import {MaterialModule} from '@angular/material';

import {NgxChartsModule} from 'ngx-charts';

import {OverlayPanelModule} from 'primeng/primeng';
import {SplitButtonModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {AccordionModule} from 'primeng/primeng';


import { StoreModule } from '@ngrx/store';


import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    NgxChartsModule,
    OverlayPanelModule,SplitButtonModule,ButtonModule,AccordionModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
