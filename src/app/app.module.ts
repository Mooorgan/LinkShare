import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupAndLoginComponent } from './signup-and-login/signup-and-login.component';
import { LinksPageComponent } from './links-page/links-page.component';
import { ProfileComponent } from './profile/profile.component';
import { PreviewComponent } from './preview/preview.component';
import { PagesComponent } from './pages/pages.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupOrLoginComponent } from './signup-and-login/signup-or-login/signup-or-login.component';
import { PortalModule } from './portal/portal.module';
import { SignuploginDataPipe } from './signup-and-login/signup-or-login/pipes/signuplogin-data/signuplogin-data.pipe';
import { SigninLoginModule } from './modules/signin-login/signin-login.module';
import { ViewcontainerrefDirective } from './viewcontainerref.directive';

@NgModule({
  declarations: [
    AppComponent,
    SignupAndLoginComponent,
    LinksPageComponent,
    ProfileComponent,
    PreviewComponent,
    PagesComponent,
    NotFoundComponent,
    SignupOrLoginComponent,
    SignuploginDataPipe,
    ViewcontainerrefDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    PortalModule,
    SigninLoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
