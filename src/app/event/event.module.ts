import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormioResource, FormioResourceConfig, FormioResourceRoutes, FormioResourceService} from 'angular-formio/resource';
import {ParticipantModule} from './participant/participant.module';
import {EventResourceComponent} from './event-resource/event-resource.component';
import {EventViewComponent} from './event-view/event-view.component';

const eventResourceRoutes: Routes = FormioResourceRoutes({
  view: EventViewComponent,
  resource: EventResourceComponent
});
eventResourceRoutes[2].children.push({
  path: 'participant',
  loadChildren: () => ParticipantModule
});

@NgModule({
  imports: [
    CommonModule,
    FormioResource,
    RouterModule.forChild(eventResourceRoutes)
  ],
  providers: [
    FormioResourceService,
    {
      provide: FormioResourceConfig, useValue: {
        name: 'event',
        form: 'event'
      }
    }
  ],
  declarations: [EventResourceComponent, EventViewComponent]
})
export class EventModule {
}
