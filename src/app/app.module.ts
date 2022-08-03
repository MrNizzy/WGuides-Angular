import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArmorerComponent } from './components/armorer/armorer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IntroductionGuideComponent } from './components/introduction-guide/introduction-guide.component';

@NgModule({
  declarations: [
    AppComponent,
    ArmorerComponent,
    NavbarComponent,
    IntroductionGuideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
