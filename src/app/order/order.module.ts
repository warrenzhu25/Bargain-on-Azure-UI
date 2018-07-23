import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderPageComponent } from '@app/order/components/order-page/order-page.component';
import { OrderService } from '@app/order/services/order.service';
import { PlatformModule } from '@app/platform/platform.module';

@NgModule({
  imports: [
    CommonModule,
    PlatformModule,
  ],
  providers: [
    OrderService,
  ],
  declarations: [OrderPageComponent]
})
export class OrderModule { }
