import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OlympicsModule } from './olympics/olympics.module';
import { ErrorComponent } from './olympics/errorComponent';

@NgModule({
  imports: [
    BrowserModule,
    OlympicsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
