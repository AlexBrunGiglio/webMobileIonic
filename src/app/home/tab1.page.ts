import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { languageKey } from '../../environments/constant';
import { RoutesList } from '../../environments/routes';
import { LanguageComponent } from '../components/language-dialog/language-dialog.component';

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

  constructor(
    public modalController: ModalController,
  ) {
    this.loadData();
  }

  loadData() {
    const jsonLanguageList: Language[] = JSON.parse(localStorage.getItem(languageKey));
    this.languageList = jsonLanguageList.sort((a, b) => a.order - b.order);
  }

  async editProperty(item: Language) {
    const modal = await this.modalController.create({
      component: LanguageComponent,
      componentProps: {
        item: item,
      },
    });
    return await modal.present();
  }


  openProperty() {
    // 
  }
}
