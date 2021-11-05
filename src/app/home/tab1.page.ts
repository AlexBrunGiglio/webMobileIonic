import { Component } from '@angular/core';
import { RoutesList } from '../../environments/routes';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  routes = RoutesList;

  constructor() { }

  editProperty() {
    console.log('Echo');
  }

  openProperty() {
    // 
  }
}
