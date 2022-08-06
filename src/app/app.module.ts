import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    EnchantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
