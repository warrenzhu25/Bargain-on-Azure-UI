import { Injectable } from '@angular/core';
import { IndividualSeriesOptions } from 'highcharts';
import { DashboardData, DashboardChart } from '@app/dashboard/framework/dashboard-data';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DashboardService {
  private readonly BaseUrl = 'https://bargain-on-azure.azurewebsites.net';

  constructor(
    private _http: HttpClient
  ) { }

  async listPrices(): Promise<DashboardChart> {
    const response = <any[]>await this._get('/getPriceChart');
    const chart: DashboardChart = {
      data: [],
      category: [],
    };
    const data: DashboardData[] = [
      {
        name: 'CPU',
        data: [],
      },
      {
        name: 'MEMORY',
        data: [],
      },
      {
        name: 'DISK',
        data: [],
      }
    ];
    const category = new Set<any>();
    response.forEach(d => {
      data.filter(x => x.name === d['resourceType'])[0].data.push(d['price']);
      category.add(d['date']);
    });
    chart.data = data;
    chart.category = Array.from(category).sort();
    return chart;
  }

  async listProfits(): Promise<DashboardChart> {
    const response = <any[]>await this._get('/getProfitChart');
    const chart = {
      data: [{ name: 'proift', data: [] }],
      category: [],
    };
    response.forEach(r => {
      chart.data[0].data.push(r['profit']);
      chart.category.push(r['date']);
    });
    console.log(chart);
    return chart;
  }


  async listResources(): Promise<DashboardChart> {
    const response = <any[]>await this._get('/getRemainChart');
    const chart: DashboardChart = {
      data: [],
      category: [],
    };
    const data: DashboardData[] = [
      {
        name: 'CPU',
        data: [],
      },
      {
        name: 'MEMORY',
        data: [],
      },
      {
        name: 'DISK',
        data: [],
      }
    ];
    const category = new Set<any>();
    response.forEach(d => {
      data.filter(x => x.name === d['resourceType'])[0].data.push(d['count']);
      category.add(d['date']);
    });
    chart.data = data;
    chart.category = Array.from(category).sort();
    return chart;
  }

  async listUsages(): Promise<DashboardChart> {
    const response = <any[]>await this._get('/getUsageChart');
    const chart: DashboardChart = {
      data: [],
      category: [],
    };
    const data: DashboardData[] = [
      {
        name: 'CPU',
        data: [],
      },
      {
        name: 'MEMORY',
        data: [],
      },
      {
        name: 'DISK',
        data: [],
      }
    ];
    const category = new Set<any>();
    response.forEach(d => {
      data.filter(x => x.name === d['resourceType'])[0].data.push(d['usage']);
      category.add(d['date']);
    });
    chart.data = data;
    chart.category = Array.from(category).sort();
    return chart;
  }

  private async _get(url) {
    this._http.get(`${this.BaseUrl}/${url}`).subscribe(console.log);
    return this._http.get(`${this.BaseUrl}/${url}`).toPromise();
  }
}
