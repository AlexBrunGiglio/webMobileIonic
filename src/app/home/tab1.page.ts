import { Component } from '@angular/core';
import { languageKey } from '../../environments/constant';
import { RoutesList } from '../../environments/routes';

export interface Language {
  name: string;
  order: number;
  imgUrl: string;
}
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  routes = RoutesList;
  languageList: Language[] = [];

  constructor() {
    this.loadData();
  }

  loadData() {
    const jsonLanguageList: Language[] = JSON.parse(localStorage.getItem(languageKey));
    this.languageList = jsonLanguageList.sort((a, b) => a.order - b.order);
    console.log('🚀 ~ Tab1Page ~ loadData ~ this.languageList', this.languageList);
  }

  editProperty() {
    console.log('Echo');
  }

  openProperty() {
    // 
  }
}
