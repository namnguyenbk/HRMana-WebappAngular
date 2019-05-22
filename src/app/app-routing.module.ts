import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './user/login/login.component';
import {ManageListComponent} from './layouts/manage-list/manage-list.component';
import {AuthGuardService} from './services/auth-guard.service';
import { WorkboardComponent } from './workboard/workboard.component';

const ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: ManageListComponent,
    canActivate : [AuthGuardService],
    children: [
      { path: 'detail/:project_id', component : WorkboardComponent  },
      // { path: 'overview', component: Overview },
      // { path: 'specs', component: Specs }
    ]
  },
  // { path: '', component: ManageListComponent, canActivate: [AuthGuardService] },
  // {
  //   path: 'detail/:project_id',
  //   component: WorkboardComponent,
  // },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports:[
    RouterModule,
  ],
  providers:[
    AuthGuardService,
  ]
})
export class AppRoutingModule {
  
 }
