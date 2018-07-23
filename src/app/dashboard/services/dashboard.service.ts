import { Injectable } from '@angular/core';
import { IndividualSeriesOptions } from 'highcharts';
import { DashboardData } from '@app/dashboard/framework/dashboard-data';

@Injectable()
export class DashboardService {
  constructor() { }

  listPrices(): DashboardData[] {
    return [
      {
        name: 'CPU',
        data: [10, 20, 30, 40],
      },
      {
        name: 'Storage',
        data: [20, 10, 10, 30],
      },
      {
        name: 'Network',
        data: [30, 20, 10, 40],
      }
    ];
  }

  listProfits(): DashboardData[] {
    return [
      {
        name: 'floating',
        data: [30, 20, 10, 10],
      },
      {
        name: 'fixed',
        data: [20, 20, 20, 20],
      },
    ];
  }

  listResources(): DashboardData[] {
    return [
      {
        name: 'CPU',
        data: [100, 150, 200, 100],
      },
      {
        name: 'Storage',
        data: [50, 100, 100, 300],
      },
      {
        name: 'Network',
        data: [30, 10, 100, 40],
      }
    ];
  }

  listUsages(): DashboardData[] {
    return [
      {
        name: 'Number',
        data: [100, 150, 200, 200],
      },
    ];
  }
}
