import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA }  from '@angular/core';
import { TooltipModule } from '@cesarbr/angular-tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArmorerComponent } from './components/armorer/armorer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IntroductionGuideComponent } from './components/introduction-guide/introduction-guide.component';
import { FooterComponent } from './components/footer/footer.component';
import { StatisticsPriorityComponent } from './components/statistics-priority/statistics-priority.component';
import { GemsComponent } from './components/gems/gems.component';
import { VideoGuideComponent } from './components/video-guide/video-guide.component';
import { EnchantsComponent } from './components/enchants/enchants.component';
import { ConsumablesComponent } from './components/consumables/consumables.component';
import { TalentsComponent } from './components/talents/talents.component';
import { GuideComponent } from './pages/guide/guide.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NewsComponent } from './pages/news/news.component';
import { DonateComponent } from './pages/donate/donate.component';
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    ArmorerComponent,
    NavbarComponent,
    IntroductionGuideComponent,
    FooterComponent,
    StatisticsPriorityComponent,
    GemsComponent,
    VideoGuideComponent,
    EnchantsComponent,
    ConsumablesComponent,
    TalentsComponent,
    GuideComponent,
    HomeComponent,
    AboutComponent,
    NewsComponent,
    DonateComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule { }
