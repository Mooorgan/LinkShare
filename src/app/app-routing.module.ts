import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupAndLoginComponent } from './signup-and-login/signup-and-login.component';
import { PagesComponent } from './pages/pages.component';
import { LinksPageComponent } from './links-page/links-page.component';
import { ProfileComponent } from './profile/profile.component';
import { PreviewComponent } from './preview/preview.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupOrLoginComponent } from './signup-and-login/signup-or-login/signup-or-login.component';
// import { isLoginResolver } from './signup-and-login/signup-login.helper-functions';

const routes: Routes = [
  {
    path: '',
    component: SignupAndLoginComponent,
    data: { components: [SignupOrLoginComponent] },
    // resolve: { isLogin: isLoginResolver },
  },
  {
    path: 'signup',
    component: SignupAndLoginComponent,
    data: { components: [SignupOrLoginComponent] },
    // resolve: { isLogin: isLoginResolver },
  },
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: 'links', component: LinksPageComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },
  { path: 'preview', component: PreviewComponent },
  // { path: 'not-found', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent },
  // { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
