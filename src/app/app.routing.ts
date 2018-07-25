import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard/components/dashboard-page/dashboard-page.component';
import { OrderPageComponent } from './order/components/order-page/order-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
  },
  {
    path: 'order',
    component: OrderPageComponent,
  },
];

export interface RouteTabLink {
  label: string;
  link: string;
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
