import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GooglePlaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
