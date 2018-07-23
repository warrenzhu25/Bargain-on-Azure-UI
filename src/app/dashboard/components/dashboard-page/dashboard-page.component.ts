import { Component, OnInit } from '@angular/core';
import { OrderService } from '@app/order/services/order.service';
import { Chart } from 'angular-highcharts';
import { IndividualSeriesOptions } from 'highcharts';
import { DashboardService } from '@app/dashboard/services/dashboard.service';
import { DashboardData } from '@app/dashboard/framework/dashboard-data';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
  charts: Chart[];

  constructor(
    private dashboardService: DashboardService,
  ) { }

  ngOnInit() {
    this.charts = [
      this._toChart(
        'Resource',
        'line',
        this.dashboardService.listResources()
      ),
      this._toChart(
        'Price',
        'line',
        this.dashboardService.listPrices()
      ),
      this._toChart(
        'Profit and Loss',
        'line',
        this.dashboardService.listProfits()
      ),
      this._toChart(
        'Usage',
        'line',
        this.dashboardService.listUsages()
      ),

    ];
  }

  private _toChart(title: string, type: string, data: DashboardData[], yAxis: string = ''): Chart {
    return new Chart({
      chart: {
        type: type,
      },
      title: {
        text: title,
      },
      credits: {
        enabled: false
      },
      xAxis: {
        title: {
          text: 'Time'
        }
      },
      yAxis: {
        title: {
          text: yAxis
        }
      },
      series: <IndividualSeriesOptions[]>data,
    });
  }

}
