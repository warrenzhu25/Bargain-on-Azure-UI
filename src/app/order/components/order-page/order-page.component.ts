import { Component, OnInit } from '@angular/core';
import { OrderService } from '@app/order/services/order.service';
import { BatchJob } from "@app/order/framework/batchjob";
import { MatSnackBar } from '@angular/material';

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
    private snackBar: MatSnackBar
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

    let suggestedBatchJob = new BatchJob(this.batchJob.id,
      this.batchJob.jobName,
      "Waiting",
      this.batchJob.type,
      this.batchJob.batchJobFile,
      this.batchJob.price,
      this.batchJob.deadline,
      this.batchJob.price,
      this.batchJob.deadline); // Same suggested value as submitted

    this.showSubmitSuccess();
  }

  showSubmitSuccess() {
    console.log("Show submit success snackbar");
    this.openSnackBar("Submit batch job successfully", "OK");
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
