import { Component, Inject, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Type } from '../../home/tab1.page';

@Component({
    selector: 'app-language-dialog',
    templateUrl: './language-dialog.component.html',
    styleUrls: ['./language-dialog.component.scss']
})
export class LanguageComponent implements OnInit {
    @Input() item: Type;
    constructor(
        public modal: ModalController,
    ) {
    }

    ngOnInit() {
        // console.log("🚀 ~ LanguageComponent ~ init ~ this.language", this.language);
    }


    dismiss() {
        this.modal.dismiss(this.item);
    }
}
