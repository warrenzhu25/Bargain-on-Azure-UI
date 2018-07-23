import { Component, OnInit } from '@angular/core';
import { OrderService } from '@app/order/services/order.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  constructor(
    private orderService: OrderService,
  ) { }

  ngOnInit() {
  }

}
