import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CreatePostComponent} from './create-post/create-post.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import { CreateSignupComponent } from './create-signup/create-signup.component';
import { CreateLoginComponent } from './create-login/create-login.component';


const routes: Routes = [
  {path: 'create-post' , component: CreatePostComponent},
  {path: 'user-profile/**', component: UserProfileComponent},
  {path: 'create-signup' , component: CreateSignupComponent},
  {path: 'create-login' , component: CreateLoginComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
