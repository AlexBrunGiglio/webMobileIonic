import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { Brightness } from '@ionic-native/brightness/ngx';


const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  }
];
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
  ],
  declarations: [Tab3Page],
  exports: [RouterModule],
  providers: [
    Brightness
  ]
})
export class Tab3PageModule { }
