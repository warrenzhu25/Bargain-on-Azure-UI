import { Component, OnInit } from '@angular/core';
import { OrderService } from '@app/order/services/order.service';
import { BatchJob } from "@app/order/framework/batchjob";

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {
  jobName = "My Batch Job";
  jobTypes: string[] = [
    "Machine Learning",
    "Hadoop"
  ];

  constructor(
    private orderService: OrderService,
  ) { }

  ngOnInit() {
  }

  uploadBatchJob(batchJob: BatchJob) {
    // TODO: submit batch job to backend
    return new BatchJob(batchJob.id, batchJob.jobName, "Waiting", batchJob.type);
  }
}
