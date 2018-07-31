import { Component, OnInit } from '@angular/core';
import {FormioResourceComponent, FormioResourceService} from 'angular-formio/resource';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-event-resource',
  templateUrl: './event-resource.component.html',
  styleUrls: ['./event-resource.component.sass']
})
export class EventResourceComponent extends FormioResourceComponent implements OnInit {

  constructor(public service: FormioResourceService, public route: ActivatedRoute) {
    super(service, route);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
