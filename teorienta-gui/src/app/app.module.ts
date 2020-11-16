import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnouncementComponent } from './component/announcement/announcement.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';

import { ValidateService } from './services/validate.service'
import { AuthService } from './services/auth.service'
import { FlashMessagesModule } from 'angular2-flash-messages'
import { AuthGuard } from './guards/auth.guard'
import { AdminGuard } from './guards/admin.guards';
import { FeedAnnouncementComponent } from './component/feed-announcement/feed-announcement.component';
import { FormQuestionsComponent } from './component/form-questions/form-questions.component';
import { SendEmailComponent } from './component/send-email/send-email.component';
import { FeedUserComponent } from './component/feed-user/feed-user.component';
import { LifeCycleComponent } from './component/life-cycle/life-cycle.component';
import { NotificationComponent } from './component/notification/notification.component'
import { AnnouncementService } from './services/announcement/announcement.service';
import { NotificationService } from './services/notification/notification.service';
import { ProjectsComponent } from './component/projects/projects.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'announcements', component: AnnouncementComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'feed-announcement', component: FeedAnnouncementComponent, canActivate: [AuthGuard] },
  { path: 'form-questions', component: FormQuestionsComponent, canActivate: [AuthGuard] },
  { path: 'send-email', component: SendEmailComponent },
  { path: 'feed-user', component: FeedUserComponent, canActivate: [AdminGuard] },
  { path: 'life-cycle', component: LifeCycleComponent },
  { path: 'notification', component: NotificationComponent, canActivate: [AdminGuard] },
  { path: 'projects', component: ProjectsComponent, canActivate: [AdminGuard] }
]

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementComponent,
    DashboardComponent,
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
    FeedAnnouncementComponent,
    FormQuestionsComponent,
    SendEmailComponent,
    FeedUserComponent,
    LifeCycleComponent,
    NotificationComponent,
    ProjectsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [ValidateService, AuthService, AuthGuard, AdminGuard, AnnouncementService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
