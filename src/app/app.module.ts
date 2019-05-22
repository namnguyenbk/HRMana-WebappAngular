import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {CommonModuleUi} from './common-module-ui.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { ManageListComponent } from './layouts/manage-list/manage-list.component';
import { AppRoutingModule } from './app-routing.module';
import { UserModule} from './user/user.module';

import { UserInfoServiceService} from './services/user/user-info-service.service';
import { CookieService } from 'ngx-cookie-service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {HeaderInterceptor} from './user/header-interceptor';
import { ProjectComponent } from './project/project.component';
import { TaskComponent } from './task/task.component';
import {UserDetailComponent} from './user/user-detail/user-detail.component';
import { WorkboardComponent } from './workboard/workboard.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ManageListComponent,
    ProjectComponent,
    TaskComponent,
    UserDetailComponent,
    WorkboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UserModule,
    CommonModuleUi,
    NgZorroAntdModule
  ],
  providers: [
    CookieService,
    UserInfoServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
