import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { languageKey } from '../../../environments/constant';
import { RoutesList } from '../../../environments/routes';
import { MainDataList } from '../../app.component';
import { LanguageComponent } from '../../components/language-dialog/language-dialog.component';
import { Type } from '../tab1.page';

@Component({
    selector: 'app-details-property',
    templateUrl: './details-property.page.html',
    styleUrls: ['./details-property.page.scss']
})
export class DetailsPropertyPage {
    routes = RoutesList;
    dataLoaded: Type[] = [];

    constructor(
        public modalController: ModalController,
        private navCtrl: NavController,
        private route: ActivatedRoute
    ) {
        this.loadData();
    }

    loadData() {
        const jsonLanguageList: MainDataList[] = JSON.parse(localStorage.getItem(languageKey));
        const routeParam = this.route.snapshot.params.code;
        this.dataLoaded = jsonLanguageList.find(x => x.code === routeParam).values?.sort((a, b) => a.order - b.order);
    }

    async editProperty(item: Type) {
        const modal = await this.modalController.create({
            component: LanguageComponent,
            componentProps: {
                // eslint-disable-next-line object-shorthand
                item: item,
            },
        });
        return await modal.present();
    }

    openProperty() {
        //
    }

}
