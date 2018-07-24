import { Component, OnInit } from '@angular/core';
import { OrderService } from '@app/order/services/order.service';
import { BatchJob } from "@app/order/framework/batchjob";

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {
  jobTypes: string[] = [
    "Machine Learning",
    "Hadoop"
  ];

  batchJob = new BatchJob(-1, "My batch job", "", "", "");

  constructor(
    private orderService: OrderService,
  ) { }

  ngOnInit() {
  }

  fileSelected(event) {
    var files = event.srcElement.files;
    this.batchJob.batchJobFile = files[0];
    console.log(this.batchJob.batchJobFile);
  }

  submitBatchJob() {
    // TODO: submit batch job to backend
    console.log(this.batchJob);

    return new BatchJob(this.batchJob.id,
      this.batchJob.jobName,
      "Waiting",
      this.batchJob.type,
      this.batchJob.batchJobFile);
  }

  verifyPrice() {
    // 
  }
}
