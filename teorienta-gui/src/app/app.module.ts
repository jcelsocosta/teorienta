import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

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
import { FormQuestionsComponent } from './component/form-questions/form-questions.component'

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'announcements', component: AnnouncementComponent, canActivate: [AdminGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'feed-announcement', component: FeedAnnouncementComponent, canActivate: [AuthGuard]},
  { path: 'form-questions', component: FormQuestionsComponent, canActivate: [AuthGuard]},
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
    FormQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [ValidateService, AuthService, AuthGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
