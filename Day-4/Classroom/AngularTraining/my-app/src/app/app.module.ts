import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaincompComponent } from './maincomp/maincomp.component';
import { HeadercompComponent } from './headercomp/headercomp.component';
import { FootercompComponent } from './footercomp/footercomp.component';

@NgModule({
  declarations: [
    AppComponent,
    MaincompComponent,
    HeadercompComponent,
    FootercompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
