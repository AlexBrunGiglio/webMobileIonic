import { Component } from '@angular/core';
import { RoutesList } from '../../environments/routes';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  routes = RoutesList;
  constructor() { }

}
