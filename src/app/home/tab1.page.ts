import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { languageKey } from '../../environments/constant';
import { RoutesList } from '../../environments/routes';
import { MainDataList } from '../app.component';
import { CategoryComponent } from '../components/category-dialog/category-dialog.component';

export interface Type {
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
  dataList: MainDataList[] = [];

  constructor(
    public modalController: ModalController,
    private navCtrl: NavController,
  ) {
    this.loadData();
  }

  loadData() {
    const jsonDataList: MainDataList[] = JSON.parse(localStorage.getItem(languageKey));
    this.dataList = jsonDataList.sort((a, b) => a.order - b.order);
  }

  public openItem(item: MainDataList): void {
    this.navCtrl.navigateForward(['/' + RoutesList.Home + '/' + item.code]);
  }

  async openDialog() {
    const item: MainDataList = {
      code: '',
      description: '',
      name: '',
      values: [],
      order: null,
    };
    const modal = await this.modalController.create({
      component: CategoryComponent,
      componentProps: {
        // eslint-disable-next-line object-shorthand
        item: item,
        isNew: true
      },
    });
    return await modal.present();
  }
}
