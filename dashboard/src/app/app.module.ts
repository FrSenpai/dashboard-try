import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { UserAlertsComponent } from './shared/components/user-alerts/user-alerts.component';
import { WelcomeBannerComponent } from './core/components/welcome-banner/welcome-banner.component';
import { UserResumeComponent } from './core/components/user-resume/user-resume.component';
import { UserResumeHeaderComponent } from './core/components/user-resume-header/user-resume-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    UserAlertsComponent,
    WelcomeBannerComponent,
    UserResumeComponent,
    UserResumeHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
