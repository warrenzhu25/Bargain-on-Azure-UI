import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderPageComponent } from '@app/order/components/order-page/order-page.component';
import { OrderService } from '@app/order/services/order.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    OrderService,
  ],
  declarations: [OrderPageComponent]
})
export class OrderModule { }
