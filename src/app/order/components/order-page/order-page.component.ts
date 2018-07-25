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
  batchJobs: BatchJob[];

  priceNotMatch: boolean = false;
  deadlineNotMatch: boolean = false;

  displayedColumns: string[] = ['id', 'name', 'status', 'type', 'batchJobFile', 'price', 'deadline'];

  constructor(
    private orderService: OrderService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.loadBatchJobList();
  }

  loadBatchJobList() {
    this.orderService.getBatchJobList().subscribe(val => {
      this.batchJobs = val;
    });
  }

  fileSelected(event) {
    var files = event.srcElement.files;
    this.batchJob.batchJobFile = files[0];
    console.log(this.batchJob.batchJobFile);
  }

  submitBatchJob() {
    console.log(this.batchJob);

    let verifiedJob;
    this.batchJob.status = "SUBMITTED";
    this.orderService.create(this.batchJob).subscribe(val => {
      verifiedJob = val;
      console.log("Verified batch job: " + verifiedJob);

      // If suggested price or suggested deadline not empty, user needs to submit again.
      if (verifiedJob.suggestedPrice) {
        this.batchJob.price = verifiedJob.suggestedPrice;
        this.priceNotMatch = true;
      }

      if (verifiedJob.suggestDeadline) {
        this.batchJob.deadline = new Date(verifiedJob.suggestDeadline);
        this.deadlineNotMatch = true;
      }

      if (this.priceNotMatch || this.deadlineNotMatch) {
        this.showSubmitFailure();
      }

      if (!verifiedJob.suggestedPrice && !verifiedJob.suggestDeadline) {
        // If price and deadline empty, the job has been submitted.
        this.loadBatchJobList();
        this.showSubmitSuccess();
        this.priceNotMatch = false;
        this.deadlineNotMatch = false;
      }
    });
  }

  showSubmitSuccess() {
    this.openSnackBar("Submit batch job successfully", "OK");
  }

  showSubmitFailure() {
    this.openSnackBar("Price or deadline not met, use suggested price/deadline and submit again.", "OK");
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 10000,
    });
  }
}
