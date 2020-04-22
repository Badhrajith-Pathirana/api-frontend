import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CreatePostComponent} from './create-post/create-post.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import { ProgramManageComponent } from './program-manage/program-manage.component';
import { ProgramManage2Component } from './program-manage2/program-manage2.component';
import { ProgramManage3Component } from './program-manage3/program-manage3.component';


const routes: Routes = [
 {path: 'create-post' , component: CreatePostComponent},
 {path: 'user-profile', component: UserProfileComponent},
  {path: 'program-manage' , component: ProgramManageComponent},
  {path: 'program-manage2' , component: ProgramManage2Component},
  {path: 'program-manage3' , component: ProgramManage3Component}
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
