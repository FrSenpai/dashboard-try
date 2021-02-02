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
import { AboutMeComponent } from './core/components/about-me/about-me.component';
import { UserExperienceComponent } from './core/components/user-experience/user-experience.component';
import { UserPhotosComponent } from './core/components/user-photos/user-photos.component';
import { UserLanguageComponent } from './core/components/user-language/user-language.component';
import { UserQualificationsComponent } from './core/components/user-qualifications/user-qualifications.component';
import { UserSpecialitiesComponent } from './core/components/user-specialities/user-specialities.component';
import { UserSubInfosComponent } from './core/components/user-sub-infos/user-sub-infos.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './core/services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    UserAlertsComponent,
    WelcomeBannerComponent,
    UserResumeComponent,
    UserResumeHeaderComponent,
    AboutMeComponent,
    UserExperienceComponent,
    UserPhotosComponent,
    UserLanguageComponent,
    UserQualificationsComponent,
    UserSpecialitiesComponent,
    UserSubInfosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
