import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormioAppConfig} from 'angular-formio';
import {FormioAuthService, FormioAuthConfig} from 'angular-formio/auth';
import {AuthConfig, AppConfig} from '../config';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AppRouterModule} from './app-router.module';
import { HeaderComponent } from './header/header.component';
import {FormioResources} from 'angular-formio/resource';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [
    FormioResources,
    FormioAuthService,
    {provide: FormioAuthConfig, useValue: AuthConfig},
    {provide: FormioAppConfig, useValue: AppConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
