import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CreateLoginComponent} from './create-login/create-login.component';
import {CreateSignupComponent} from './create-signup/create-signup.component';
import {HeaderComponent} from './header/header.component';
import {FootarComponent} from './footar/footar.component';
import {SidebarNavComponent} from './sidebar-nav/sidebar-nav.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateLoginComponent,
    CreateSignupComponent,
    HeaderComponent,
    FootarComponent,
    SidebarNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
