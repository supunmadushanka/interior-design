import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './modules/home/about-us/about-us.component';
import { HomeContentComponent } from './modules/home/home-content/home-content.component';

const routes: Routes = [
  { path: '', component: HomeContentComponent },
  { path: 'home-content', component: HomeContentComponent },
  { path: 'about-us', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
