import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSliderModule } from '@angular/material';

import { SeavelComponent } from './components/seavel.component';
import { MapComponent } from './components/map.component';
import { TimeLineComponent } from './components/timeLine.component';

@NgModule({
  declarations: [
    AppComponent,
    SeavelComponent,
    MapComponent,
    TimeLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
