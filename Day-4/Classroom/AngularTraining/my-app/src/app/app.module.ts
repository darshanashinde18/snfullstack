import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaincompComponent } from './maincomp/maincomp.component';
import { HeadercompComponent } from './headercomp/headercomp.component';
import { FootercompComponent } from './footercomp/footercomp.component';
import { FormmdemoComponent } from './formmdemo/formmdemo.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LandingPageComponent } from './landing-page/landing-page.component'
import { USER_ROUTE } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    MaincompComponent,
    HeadercompComponent,
    FootercompComponent,
    FormmdemoComponent,
    LoginComponent,
    RegistrationComponent,
    UserdetailsComponent,
    PortfolioComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule, USER_ROUTE
  ],
  providers: [],
  bootstrap: [LandingPageComponent]
})
export class AppModule { }
