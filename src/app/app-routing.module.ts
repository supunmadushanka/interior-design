import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageServiceComponent } from './modules/admin-panel/manage-service/manage-service.component';
import { SideNavComponent } from './modules/admin-panel/side-nav/side-nav.component';
import { AboutUsComponent } from './modules/home/about-us/about-us.component';
import { HomeContentComponent } from './modules/home/home-content/home-content.component';

const routes: Routes = [
  { path: '', component: HomeContentComponent },
  { path: 'home-content', component: HomeContentComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'admin-pannel', component: SideNavComponent },
  { path: 'manage-services', component: ManageServiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
