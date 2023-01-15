import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    HomeContentComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class HomeModule { }