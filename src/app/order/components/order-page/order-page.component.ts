import { Component, OnInit } from '@angular/core';
import { OrderService } from '@app/order/services/order.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  constructor(
    private orderService: OrderService,
  ) { }

  ngOnInit() {
  }

}
