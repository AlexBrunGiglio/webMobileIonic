import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { languageKey } from '../../../environments/constant';
import { MainDataList } from '../../app.component';

@Component({
    selector: 'app-category-dialog',
    templateUrl: './category-dialog.component.html',
    styleUrls: ['./category-dialog.component.scss']
})
export class CategoryComponent implements OnInit {
    @Input() item: MainDataList;
    @Input() isNew: boolean;

    itemToCreate: MainDataList = {} as any;
    constructor(
        public modal: ModalController,
    ) {
    }

    ngOnInit() {
    }


    dismiss() {
        this.modal.dismiss(this.item);
    }

    save() {
        if (this.itemToCreate) {
            if (this.itemToCreate.order || this.itemToCreate.name || this.itemToCreate.description) {
                return;
            }
        }
        this.itemToCreate.code = this.itemToCreate.name?.toLowerCase();
        const jsonLanguageList: MainDataList[] = JSON.parse(localStorage.getItem(languageKey));
        console.log("🚀 ~ CategoryComponent ~ save ~ jsonLanguageList", jsonLanguageList);
        jsonLanguageList.push(this.itemToCreate);
        console.log("🚀 ~ CategoryComponent ~ save ~ jsonLanguageList", jsonLanguageList);
        return;
        // localStorage.setItem(languageKey, JSON.stringify(dataFromJson));
        this.dismiss();
    }
}
