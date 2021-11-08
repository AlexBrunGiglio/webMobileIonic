import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { RouterModule, Routes } from '@angular/router';
import { LanguageModule } from '../components/language-dialog/language-dialog.module';
import { DetailsPropertyPage } from './details-properties/details-property.page';


const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
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
  declarations: [Tab1Page],
  exports: [RouterModule],
})
export class Tab1PageModule { }
