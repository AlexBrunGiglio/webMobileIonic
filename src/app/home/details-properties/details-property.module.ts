import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { LanguageModule } from "../../components/language-dialog/language-dialog.module";
import { DetailsPropertyPage } from "./details-property.page";

const routes: Routes = [
    {
        path: '',
        component: DetailsPropertyPage,
    }
];

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        LanguageModule,
    ],
    declarations: [DetailsPropertyPage],
    exports: [RouterModule],
})
export class PageDetailsPropertyModule { }
