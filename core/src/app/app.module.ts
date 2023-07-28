import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Make sure this line is present

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule], // Include HttpClientModule in the imports array
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
