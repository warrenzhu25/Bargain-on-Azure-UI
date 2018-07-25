import { Component, OnInit } from '@angular/core';
import { OrderService } from '@app/order/services/order.service';
import { BatchJob } from "@app/order/framework/batchjob";
import { MatSnackBar } from '@angular/material';
import { Observable } from "rxjs/Observable";

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

    this.batchJob.status = "SUBMITTED";
    this.orderService.create(this.batchJob).subscribe(val => {
      this.loadBatchJobList();
      this.showSubmitSuccess();
    });
  }

  showSubmitSuccess() {
    this.openSnackBar("Submit batch job successfully", "OK");
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  verifyPrice() {
    let verifiedJob;
    this.orderService.create(this.batchJob).subscribe(val => { verifiedJob = val; });

    if (this.batchJob.price != verifiedJob.suggestedPrice) {
      this.batchJob.price = verifiedJob.suggestedPrice;
      // TODO Show batch job price is updated with suggested price
    }

    if (this.batchJob.deadline != verifiedJob.suggestedDeadline) {
      this.batchJob.deadline = verifiedJob.suggestedDeadline;
      // TODO Show batch job deadline is updated with suggested deadline
    }
  }
}
