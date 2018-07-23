import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from '@app/dashboard/components/dashboard-page/dashboard-page.component';
import { DashboardService } from '@app/dashboard/services/dashboard.service';
import { ChartModule } from 'angular-highcharts';
import { PlatformModule } from '@app/platform/platform.module';

@NgModule({
  imports: [
    CommonModule,
    ChartModule,
    PlatformModule,
  ],
  providers: [
    DashboardService,
  ],
  declarations: [DashboardPageComponent]
})
export class DashboardModule { }
