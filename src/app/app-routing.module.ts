import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CreatePostComponent} from './create-post/create-post.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import { ProgramManageComponent } from './program-manage/program-manage.component';
import {SearchPostComponent} from './search-post/search-post.component';


const routes: Routes = [
  {path: 'create-post' , component: CreatePostComponent},
  {path: 'user-profile/**', component: UserProfileComponent},
  {path: 'search-post', component: SearchPostComponent},
  {path: 'program-manage' , component: ProgramManageComponent}
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
