import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageServiceComponent } from './modules/admin-panel/manage-service/manage-service.component';
import { SideNavComponent } from './modules/admin-panel/side-nav/side-nav.component';
import { AboutUsComponent } from './modules/home/about-us/about-us.component';
import { HomeContentComponent } from './modules/home/home-content/home-content.component';
import { LoginComponent } from './modules/registration/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { Role } from './shared/models/role';

const routes: Routes = [
  { path: '', component: HomeContentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home-content', component: HomeContentComponent },
  { path: 'about-us', component: AboutUsComponent },
  {
    path: 'admin-pannel',
    component: SideNavComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin, Role.Moderator] }
  },
  {
    path: 'manage-services',
    component: ManageServiceComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin, Role.Moderator] }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
