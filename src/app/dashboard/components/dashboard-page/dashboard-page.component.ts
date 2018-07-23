import { Component, OnInit } from '@angular/core';
import { OrderService } from '@app/order/services/order.service';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 3]
      }
    ]
  });

  constructor(
    private orderService: OrderService,
  ) { }

  ngOnInit() {
  }

}
