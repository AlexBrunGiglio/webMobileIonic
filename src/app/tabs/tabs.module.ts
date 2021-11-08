import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsPage } from './tabs.page';
import { RouterModule, Routes } from '@angular/router';
import { RoutesList } from '../../environments/routes';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: RoutesList.Home,
        loadChildren: () => import('../home/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: RoutesList.Home + '/:code',
        loadChildren: () => import('../home/details-properties/details-property.module').then(m => m.PageDetailsPropertyModule)
      },
      {
        path: RoutesList.Other,
        loadChildren: () => import('../other/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: RoutesList.Settings,
        loadChildren: () => import('../settings/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: RoutesList.Home,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: RoutesList.Home,
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }

