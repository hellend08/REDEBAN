import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

import { ChartsComponent } from './charts/charts.component';
import { DashboardBancoComponent } from './dashboard-banco/dashboard-banco.component';
import { DashboardComercioComponent } from './dashboard-comercio/dashboard-comercio.component';
import { DashboardRedebanComponent } from './dashboard-redeban/dashboard-redeban.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComercioComponent
      },
      {
        path: 'banco',
        component: DashboardBancoComponent
      },
      {
        path: 'redeban',
        component: DashboardRedebanComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
