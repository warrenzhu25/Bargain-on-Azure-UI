import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from '@app/dashboard/components/dashboard-page/dashboard-page.component';
import { DashboardService } from '@app/dashboard/services/dashboard.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    DashboardService,
  ],
  declarations: [DashboardPageComponent]
})
export class DashboardModule { }
