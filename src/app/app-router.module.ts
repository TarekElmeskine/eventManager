import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import { AuthModule } from './auth/auth.module';
import {HomeComponent} from './home/home.component';
import {EventModule} from './event/event.module';

const routes: Route[] = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {
    path: 'auth',
    loadChildren: () => AuthModule
  },
  {
    path: 'event',
    loadChildren: () => EventModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {

}
