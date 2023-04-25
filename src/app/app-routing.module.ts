import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { DonateComponent } from './pages/donate/donate.component';
import { GuideDetailsComponent } from './pages/guide-details/guide-details.component';
import { GuideComponent } from './pages/guide/guide.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'about', component: AboutComponent },
  { path: 'news', component: NewsComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'guide/:id', component: GuideDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
  // TODO: Agregar route para 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
