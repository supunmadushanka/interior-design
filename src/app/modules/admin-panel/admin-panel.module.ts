import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ManageServiceComponent } from './manage-service/manage-service.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SideNavComponent,
    ManageServiceComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AdminPanelModule { }
